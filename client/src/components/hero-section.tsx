import { Button } from "@/components/ui/button";
import { Eye, Calculator, ChevronDown } from "lucide-react";
import { Link } from "wouter";

export default function HeroSection() {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center pattern-overlay" 
      style={{
        background: `linear-gradient(rgba(139, 69, 19, 0.7), rgba(139, 69, 19, 0.7)), url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080') center/cover fixed`
      }}
    >
      <div className="text-center text-white max-w-4xl mx-auto px-4 animate-fade-in-up">
        <h1 className="font-poppins font-bold text-4xl md:text-6xl lg:text-7xl mb-6 text-shadow">
          DECOLA AFRICA
        </h1>
        <p className="font-poppins text-xl md:text-2xl mb-4 text-shadow">
          Artisanat Africain en Terre Cuite
        </p>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-shadow">
          L'Art Africain Authentique pour Vos Espaces Modernes
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/produits">
            <Button 
              size="lg" 
              className="bg-orange-accent hover:bg-gold-accent text-white hover-scale"
            >
              <Eye className="w-4 h-4 mr-2" />
              Découvrir nos créations
            </Button>
          </Link>
          <Link href="/contact">
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-saddle hover-scale"
            >
              <Calculator className="w-4 h-4 mr-2" />
              Demander un devis gratuit
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white text-2xl" />
      </div>
    </section>
  );
}
