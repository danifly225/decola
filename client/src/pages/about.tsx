import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Check } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-beige pattern-overlay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-poppins font-bold text-4xl md:text-5xl text-saddle mb-4">À Propos de Nous</h1>
            <p className="text-lg text-slate-gray max-w-2xl mx-auto">
              Découvrez l'histoire et les valeurs qui animent Decola Africa dans sa mission de préservation de l'artisanat africain.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-saddle mb-6">Notre Histoire</h2>
              <p className="text-lg text-slate-gray mb-6">
                Decola Africa puise ses racines dans la riche tradition artisanale africaine. Depuis notre création, 
                nous nous engageons à préserver et valoriser le savoir-faire ancestral de nos artisans locaux.
              </p>
              <p className="text-lg text-slate-gray mb-6">
                Chaque création est le fruit d'un processus artisanal minutieux, utilisant des techniques 
                transmises de génération en génération. Nous sélectionnons avec soin nos matières premières 
                locales pour garantir l'authenticité et la qualité de nos produits.
              </p>
              
              {/* Values */}
              <div className="space-y-4">
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

          {/* Process Section */}
          <div className="mb-16">
            <h3 className="font-poppins font-bold text-2xl md:text-3xl text-saddle mb-8 text-center">Notre Processus de Fabrication</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-sandy rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h4 className="font-semibold text-lg text-saddle mb-2">Sélection de l'Argile</h4>
                <p className="text-slate-gray">Nous choisissons soigneusement les meilleures argiles locales, riches en minéraux naturels.</p>
              </div>
              <div className="text-center">
                <div className="bg-chocolate rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h4 className="font-semibold text-lg text-saddle mb-2">Façonnage Artisanal</h4>
                <p className="text-slate-gray">Nos maîtres artisans sculptent chaque pièce à la main selon des techniques ancestrales.</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h4 className="font-semibold text-lg text-saddle mb-2">Cuisson Traditionnelle</h4>
                <p className="text-slate-gray">Les pièces sont cuites dans des fours traditionnels pour obtenir leur couleur et résistance uniques.</p>
              </div>
            </div>
          </div>

          {/* Vision Section */}
          <div className="bg-beige rounded-xl p-8 text-center">
            <h3 className="font-poppins font-bold text-2xl md:text-3xl text-saddle mb-4">Notre Vision</h3>
            <p className="text-lg text-slate-gray max-w-3xl mx-auto">
              Faire rayonner l'artisanat africain dans le monde entier, en créant un pont entre les traditions ancestrales 
              et les besoins contemporains. Nous aspirons à devenir la référence mondiale pour les créations artisanales 
              africaines en terre cuite, tout en soutenant les communautés d'artisans locaux.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
