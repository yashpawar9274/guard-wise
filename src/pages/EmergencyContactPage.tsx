import { useState } from "react";
import { ArrowLeft, Plus, Trash2, Phone, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface EmergencyContact {
  id: string;
  name: string;
  phone: string;
  relationship: string;
}

const EmergencyContactPage = () => {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState<EmergencyContact[]>([
    {
      id: "1",
      name: "Sarah Carter",
      phone: "+1 (555) 987-6543",
      relationship: "Sister"
    }
  ]);
  const [newContact, setNewContact] = useState({
    name: "",
    phone: "",
    relationship: ""
  });
  const [showAddForm, setShowAddForm] = useState(false);

  const handleAddContact = () => {
    if (!newContact.name || !newContact.phone) {
      toast.error("Please fill in name and phone number");
      return;
    }

    const contact: EmergencyContact = {
      id: Date.now().toString(),
      ...newContact
    };

    setContacts(prev => [...prev, contact]);
    setNewContact({ name: "", phone: "", relationship: "" });
    setShowAddForm(false);
    toast.success("Emergency contact added");
  };

  const handleRemoveContact = (id: string) => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
    toast.success("Emergency contact removed");
  };

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
        <h1 className="text-xl font-semibold text-foreground">Emergency Contacts</h1>
        <Button 
          size="icon"
          onClick={() => setShowAddForm(true)}
        >
          <Plus className="h-5 w-5" />
        </Button>
      </div>

      <div className="p-4 space-y-6">
        {/* Info Card */}
        <Card className="p-4 bg-primary/10 border-primary/20">
          <p className="text-sm text-foreground">
            These contacts will be notified if Fraude Guard detects a serious security threat 
            or if you trigger an emergency alert.
          </p>
        </Card>

        {/* Add Contact Form */}
        {showAddForm && (
          <Card className="p-4 bg-gradient-card border-border space-y-4">
            <h3 className="font-semibold text-foreground">Add Emergency Contact</h3>
            
            <div className="space-y-3">
              <Input
                placeholder="Contact Name"
                value={newContact.name}
                onChange={(e) => setNewContact(prev => ({ ...prev, name: e.target.value }))}
                className="bg-background border-border"
              />
              
              <Input
                placeholder="Phone Number"
                type="tel"
                value={newContact.phone}
                onChange={(e) => setNewContact(prev => ({ ...prev, phone: e.target.value }))}
                className="bg-background border-border"
              />
              
              <Input
                placeholder="Relationship (Optional)"
                value={newContact.relationship}
                onChange={(e) => setNewContact(prev => ({ ...prev, relationship: e.target.value }))}
                className="bg-background border-border"
              />
            </div>

            <div className="flex space-x-3">
              <Button onClick={handleAddContact} className="flex-1">
                Add Contact
              </Button>
              <Button 
                variant="outline" 
                onClick={() => setShowAddForm(false)}
                className="flex-1"
              >
                Cancel
              </Button>
            </div>
          </Card>
        )}

        {/* Emergency Contacts List */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">
            Emergency Contacts ({contacts.length})
          </h2>
          
          {contacts.length === 0 ? (
            <Card className="p-8 text-center bg-gradient-card border-border">
              <User className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <p className="text-muted-foreground">No emergency contacts added</p>
              <Button 
                onClick={() => setShowAddForm(true)}
                className="mt-4"
              >
                Add Your First Contact
              </Button>
            </Card>
          ) : (
            contacts.map((contact) => (
              <Card key={contact.id} className="p-4 bg-gradient-card border-border">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <User className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">{contact.name}</h3>
                      <p className="text-sm text-muted-foreground flex items-center">
                        <Phone className="h-3 w-3 mr-1" />
                        {contact.phone}
                      </p>
                      {contact.relationship && (
                        <p className="text-xs text-muted-foreground">{contact.relationship}</p>
                      )}
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleRemoveContact(contact.id)}
                    className="text-destructive hover:bg-destructive/10"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))
          )}
        </div>

        {/* Emergency Button */}
        <Card className="p-4 bg-gradient-to-r from-destructive/10 to-destructive/20 border-destructive/20">
          <div className="text-center space-y-3">
            <h3 className="font-semibold text-foreground">Emergency Alert</h3>
            <p className="text-sm text-muted-foreground">
              Press this button if you're experiencing a security emergency
            </p>
            <Button 
              className="bg-destructive hover:bg-destructive/90 text-destructive-foreground"
              onClick={() => toast.error("Emergency alert sent to all contacts!")}
            >
              Send Emergency Alert
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default EmergencyContactPage;