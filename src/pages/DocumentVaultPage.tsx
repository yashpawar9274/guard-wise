import { ArrowLeft, Plus, FileText, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const DocumentVaultPage = () => {
  const navigate = useNavigate();

  const documents = [
    {
      name: "PAN Card",
      uploadDate: "2024-01-15",
      icon: <FileText className="h-6 w-6" />
    },
    {
      name: "Aadhaar Card", 
      uploadDate: "2024-02-20",
      icon: <FileText className="h-6 w-6" />
    },
    {
      name: "Bank Account Details",
      uploadDate: "2024-03-10", 
      icon: <FileText className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-background p-4">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <button onClick={() => navigate(-1)} className="p-2">
          <ArrowLeft className="h-6 w-6" />
        </button>
        <h1 className="text-xl font-semibold">Document Vault</h1>
      </div>

      {/* Main Content */}
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">Securely store your documents</h2>
          <p className="text-muted-foreground mb-6">
            Upload sensitive documents like PAN, Aadhaar, and bank details. We'll scan for leaks and fake usage.
          </p>
        </div>

        {/* Upload Button */}
        <Card className="border-2 border-dashed border-muted-foreground/20">
          <CardContent className="p-6">
            <button className="w-full flex items-center justify-between text-left">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-muted rounded-lg">
                  <Plus className="h-6 w-6" />
                </div>
                <span className="font-medium">Upload Document</span>
              </div>
              <ChevronRight className="h-5 w-5" />
            </button>
          </CardContent>
        </Card>

        {/* Uploaded Documents */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Uploaded Documents</h3>
          <div className="space-y-3">
            {documents.map((doc, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <button className="w-full flex items-center justify-between text-left">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-muted rounded-lg">
                        {doc.icon}
                      </div>
                      <div>
                        <div className="font-medium">{doc.name}</div>
                        <div className="text-sm text-primary">Uploaded on {doc.uploadDate}</div>
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentVaultPage;