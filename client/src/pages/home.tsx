import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import SpecialtiesSection from "@/components/specialties-section";
import ProductCard from "@/components/product-card";
import TestimonialCard from "@/components/testimonial-card";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "wouter";

const featuredProducts = [
  {
    title: "Claustra Géométrique",
    description: "Design moderne avec motifs africains traditionnels",
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    imageAlt: "Claustra décoratif en terre cuite",
    category: "claustras"
  },
  {
    title: "Vasque Artisanale",
    description: "Forme unique sculptée à la main par nos artisans",
    imageUrl: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    imageAlt: "Vasque artisanale en terre cuite",
    category: "vasques"
  },
  {
    title: "Collection Décorative",
    description: "Vases et objets d'art pour votre intérieur",
    imageUrl: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    imageAlt: "Collection d'accessoires décoratifs",
    category: "accessoires"
  }
];

const testimonials = [
  {
    name: "Marie Dubois",
    role: "Architecte d'intérieur",
    content: "Les claustras de Decola Africa ont complètement transformé notre terrasse. La qualité artisanale est exceptionnelle et le design unique."
  },
  {
    name: "Jean-Pierre Martin",
    role: "Designer",
    content: "Une vasque magnifique qui apporte une touche authentique à notre salle de bain. Le travail artisanal est remarquable."
  },
  {
    name: "Sophie Leroy",
    role: "Propriétaire",
    content: "Service client exceptionnel et produits d'une qualité remarquable. Je recommande vivement Decola Africa."
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <SpecialtiesSection />
      
      {/* Featured Products Section */}
      <section className="py-16 bg-beige pattern-overlay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-saddle mb-4">Nos Créations Phares</h2>
            <p className="text-lg text-slate-gray max-w-2xl mx-auto mb-8">
              Chaque pièce est unique, façonnée à la main selon des techniques ancestrales transmises de génération en génération.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/produits">
              <Button size="lg" className="bg-orange-accent hover:bg-gold-accent text-white">
                Voir tous nos produits
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-saddle mb-6">Notre Histoire</h2>
              <p className="text-lg text-slate-gray mb-6">
                Decola Africa puise ses racines dans la riche tradition artisanale africaine. Depuis notre création, 
                nous nous engageons à préserver et valoriser le savoir-faire ancestral de nos artisans locaux.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Check className="text-orange-accent mr-3" size={20} />
                  <span className="font-medium">Authenticité africaine garantie</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-orange-accent mr-3" size={20} />
                  <span className="font-medium">Qualité artisanale supérieure</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-orange-accent mr-3" size={20} />
                  <span className="font-medium">Durabilité et respect de l'environnement</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-orange-accent mr-3" size={20} />
                  <span className="font-medium">Soutien aux artisans locaux</span>
                </div>
              </div>

              <Link href="/apropos">
                <Button variant="outline" className="border-saddle text-saddle hover:bg-saddle hover:text-white">
                  En savoir plus
                </Button>
              </Link>
            </div>
            
            <div className="space-y-6">
              <img 
                src="https://images.unsplash.com/photo-1610375461246-83df859d849d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Artisan africain façonnant l'argile" 
                className="rounded-xl shadow-lg w-full"
              />
              <img 
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300" 
                alt="Poteries africaines séchant au soleil" 
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-r from-sandy to-chocolate pattern-overlay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-4">Ce Que Disent Nos Clients</h2>
            <p className="text-lg text-white opacity-90 max-w-2xl mx-auto">
              Découvrez les témoignages de nos clients satisfaits qui ont choisi l'excellence artisanale africaine.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
