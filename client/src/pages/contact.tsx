import { useState } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import type { InsertContact } from "@shared/schema";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    productType: "",
    message: ""
  });

  const submitContactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message envoyé !",
        description: "Merci pour votre demande ! Nous vous répondrons dans les plus brefs délais.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        productType: "",
        message: ""
      });
    },
    onError: (error) => {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer.",
        variant: "destructive",
      });
      console.error("Contact form error:", error);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.productType || !formData.message) {
      toast({
        title: "Champs manquants",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive",
      });
      return;
    }

    submitContactMutation.mutate(formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-beige pattern-overlay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-poppins font-bold text-4xl md:text-5xl text-saddle mb-4">Contactez-Nous</h1>
            <p className="text-lg text-slate-gray max-w-2xl mx-auto">
              Prêt à découvrir nos créations ? Contactez-nous pour un devis personnalisé ou pour toute question.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-beige">
              <CardContent className="p-8">
                <h3 className="font-poppins font-semibold text-2xl text-saddle mb-6">Demande de Devis</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-slate-gray font-medium">Prénom *</Label>
                      <Input
                        id="firstName"
                        type="text"
                        placeholder="Votre prénom"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        className="mt-2 border-sandy focus:border-orange-accent"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-slate-gray font-medium">Nom *</Label>
                      <Input
                        id="lastName"
                        type="text"
                        placeholder="Votre nom"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        className="mt-2 border-sandy focus:border-orange-accent"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-slate-gray font-medium">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="votre@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="mt-2 border-sandy focus:border-orange-accent"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone" className="text-slate-gray font-medium">Téléphone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Votre numéro"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="mt-2 border-sandy focus:border-orange-accent"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="productType" className="text-slate-gray font-medium">Type de produit *</Label>
                    <Select value={formData.productType} onValueChange={(value) => handleInputChange("productType", value)}>
                      <SelectTrigger className="mt-2 border-sandy focus:border-orange-accent">
                        <SelectValue placeholder="Choisissez une catégorie" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="claustras">Claustras décoratifs</SelectItem>
                        <SelectItem value="vasques">Vasques de douche</SelectItem>
                        <SelectItem value="accessoires">Accessoires déco</SelectItem>
                        <SelectItem value="sur-mesure">Projet sur mesure</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-slate-gray font-medium">Message *</Label>
                    <Textarea
                      id="message"
                      rows={4}
                      placeholder="Décrivez votre projet..."
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="mt-2 border-sandy focus:border-orange-accent"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-orange-accent text-white hover:bg-gold-accent"
                    disabled={submitContactMutation.isPending}
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {submitContactMutation.isPending ? "Envoi en cours..." : "Envoyer ma demande"}
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="font-poppins font-semibold text-2xl text-saddle mb-6">Nos Informations</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="text-orange-accent text-xl mt-1 mr-4" />
                    <div>
                      <h4 className="font-semibold text-saddle mb-1">Adresse</h4>
                      <p className="text-slate-gray">123 Rue de l'Artisanat<br />Quartier Artisanal<br />Ville, Pays</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="text-orange-accent text-xl mt-1 mr-4" />
                    <div>
                      <h4 className="font-semibold text-saddle mb-1">Téléphone</h4>
                      <p className="text-slate-gray">+XX X XX XX XX XX</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="text-orange-accent text-xl mt-1 mr-4" />
                    <div>
                      <h4 className="font-semibold text-saddle mb-1">Email</h4>
                      <p className="text-slate-gray">contact@decolaafrica.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="text-orange-accent text-xl mt-1 mr-4" />
                    <div>
                      <h4 className="font-semibold text-saddle mb-1">Horaires</h4>
                      <p className="text-slate-gray">
                        Lun - Ven: 8h00 - 18h00<br />
                        Sam: 8h00 - 16h00<br />
                        Dim: Sur rendez-vous
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Social Media */}
              <div>
                <h4 className="font-semibold text-saddle mb-4">Suivez-nous</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-orange-accent text-white rounded-full flex items-center justify-center hover:bg-gold-accent transition-colors">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-orange-accent text-white rounded-full flex items-center justify-center hover:bg-gold-accent transition-colors">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-orange-accent text-white rounded-full flex items-center justify-center hover:bg-gold-accent transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-orange-accent text-white rounded-full flex items-center justify-center hover:bg-gold-accent transition-colors">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
              
              {/* Call to Action */}
              <Card className="bg-gradient-to-r from-saddle to-chocolate text-white">
                <CardContent className="p-6">
                  <h4 className="font-poppins font-semibold text-xl mb-2">Projet Spécial ?</h4>
                  <p className="mb-4">Nos artisans peuvent créer des pièces uniques selon vos spécifications.</p>
                  <Button className="bg-white text-saddle hover:bg-beige">
                    Discutons de votre projet
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
