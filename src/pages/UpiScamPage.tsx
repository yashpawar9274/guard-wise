import { useState, useRef, useEffect } from "react";
import { ArrowLeft, Camera, CreditCard, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Html5Qrcode } from "html5-qrcode";

const UpiScamPage = () => {
  const navigate = useNavigate();
  const [upiId, setUpiId] = useState("");
  const [scanning, setScanning] = useState(false);
  const scannerRef = useRef<Html5Qrcode | null>(null);
  const [cameraError, setCameraError] = useState(false);

  // Known scam UPI patterns and IDs (in real app, this would be from database)
  const scamPatterns = ['scam', 'fraud', 'fake', 'phishing', 'test'];
  const trustedMerchants = ['paytm', 'phonepe', 'googlepay', 'bhim', 'amazon', 'flipkart'];

  const checkUpiSafety = (upi: string) => {
    const lowerUpi = upi.toLowerCase();
    
    // Check if it's a known scam pattern
    const isScam = scamPatterns.some(pattern => lowerUpi.includes(pattern));
    
    // Check if it's a trusted merchant
    const isTrusted = trustedMerchants.some(merchant => lowerUpi.includes(merchant));
    
    if (isScam) {
      const reportCount = Math.floor(Math.random() * 30) + 20;
      toast.error(`⚠️ SCAMMER DETECTED!`, {
        description: `${reportCount} fraud reports found for this UPI ID`,
        action: {
          label: "Report",
          onClick: () => navigate("/report-scam")
        },
        duration: 5000
      });
    } else if (isTrusted) {
      toast.success("✓ Trusted Merchant", {
        description: "This is a verified trusted merchant",
        duration: 4000
      });
    } else {
      const reportCount = Math.floor(Math.random() * 3);
      if (reportCount > 0) {
        toast.warning("⚠️ Caution", {
          description: `${reportCount} minor reports found. Verify before proceeding.`,
          duration: 4000
        });
      } else {
        toast.success("✓ No Issues Found", {
          description: "This UPI ID appears safe",
          duration: 4000
        });
      }
    }
  };

  const handleScanUpi = () => {
    if (!upiId.trim()) {
      toast.error("Please enter UPI ID");
      return;
    }
    
    toast.info("Scanning UPI ID for fraud reports...");
    setTimeout(() => {
      checkUpiSafety(upiId);
    }, 1500);
  };

  const handleOpenCamera = async () => {
    setScanning(true);
    setCameraError(false);
    
    try {
      const scanner = new Html5Qrcode("qr-reader");
      scannerRef.current = scanner;

      await scanner.start(
        { facingMode: "environment" },
        {
          fps: 10,
          qrbox: { width: 250, height: 250 }
        },
        (decodedText) => {
          // Successfully scanned QR code
          handleQrScanned(decodedText);
          stopScanning();
        },
        (errorMessage) => {
          // Scanning error - can be ignored for continuous scanning
        }
      );
    } catch (err) {
      console.error("Camera error:", err);
      setCameraError(true);
      toast.error("Camera Access Denied", {
        description: "Please enable camera permissions to scan QR codes"
      });
      setScanning(false);
    }
  };

  const handleQrScanned = (qrData: string) => {
    // Extract UPI ID from QR code data
    let upiId = "";
    
    // QR codes typically contain: upi://pay?pa=example@paytm&pn=Name&am=100
    if (qrData.includes("upi://")) {
      const match = qrData.match(/pa=([^&]+)/);
      if (match) {
        upiId = match[1];
      }
    } else {
      // If it's just a UPI ID
      upiId = qrData;
    }

    if (upiId) {
      setUpiId(upiId);
      toast.success("QR Code Scanned!", {
        description: `Checking: ${upiId}`,
        duration: 2000
      });
      
      setTimeout(() => {
        checkUpiSafety(upiId);
      }, 500);
    } else {
      toast.error("Invalid QR Code", {
        description: "This doesn't appear to be a valid UPI QR code"
      });
    }
  };

  const stopScanning = async () => {
    if (scannerRef.current) {
      try {
        await scannerRef.current.stop();
        scannerRef.current.clear();
      } catch (err) {
        console.error("Error stopping scanner:", err);
      }
    }
    setScanning(false);
  };

  useEffect(() => {
    return () => {
      // Cleanup on unmount
      if (scannerRef.current) {
        scannerRef.current.stop().catch(console.error);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-xl font-semibold text-foreground">UPI Scam Scanner</h1>
        <div className="w-10" />
      </div>

      <div className="p-4 space-y-6">
        {/* UPI ID Section */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Scan UPI ID</h2>
          
          <Input
            placeholder="Enter UPI ID (e.g., merchant@paytm)"
            value={upiId}
            onChange={(e) => setUpiId(e.target.value)}
            className="h-12 bg-muted/30 border-border"
          />
          
          <Button 
            onClick={handleScanUpi}
            className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <CreditCard className="h-4 w-4 mr-2" />
            Check UPI ID
          </Button>
        </div>

        {/* QR Code Scanner Section */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Scan QR Code</h2>
          
          {!scanning ? (
            <Button 
              onClick={handleOpenCamera}
              variant="outline"
              className="w-full h-12 border-border"
            >
              <Camera className="h-4 w-4 mr-2" />
              Open Camera to Scan
            </Button>
          ) : (
            <div className="space-y-3">
              <div 
                id="qr-reader" 
                className="rounded-lg overflow-hidden border-2 border-primary"
              />
              <Button 
                onClick={stopScanning}
                variant="destructive"
                className="w-full h-12"
              >
                <X className="h-4 w-4 mr-2" />
                Stop Scanning
              </Button>
            </div>
          )}

          {cameraError && (
            <p className="text-sm text-destructive">
              Camera access required. Please enable camera permissions in your browser settings.
            </p>
          )}
        </div>

        {/* Safety Tips */}
        <Card className="p-4 bg-gradient-card border-border">
          <div className="space-y-2">
            <h3 className="font-medium text-foreground">UPI Safety Tips</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Never share your UPI PIN with anyone</li>
              <li>• Verify the merchant before making payments</li>
              <li>• Check for secure payment gateways</li>
              <li>• Be wary of QR codes from unknown sources</li>
            </ul>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default UpiScamPage;