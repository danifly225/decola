import { Grid3X3, ShowerHead, Shapes } from "lucide-react";

const specialties = [
  {
    icon: Grid3X3,
    title: "Claustras Décoratifs",
    description: "Séparateurs d'espace élégants en terre cuite, parfaits pour créer de l'intimité tout en laissant passer la lumière",
    gradient: "from-sandy to-chocolate"
  },
  {
    icon: ShowerHead,
    title: "Vasques de Douche",
    description: "Vasques artisanales uniques, alliant fonctionnalité et esthétique africaine authentique",
    gradient: "from-orange-accent to-gold-accent"
  },
  {
    icon: Shapes,
    title: "Accessoires Déco",
    description: "Vases, pots, sculptures et objets décoratifs pour sublimer vos espaces",
    gradient: "from-saddle to-sandy"
  }
];

export default function SpecialtiesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-saddle mb-4">Nos Spécialités</h2>
          <p className="text-lg text-slate-gray max-w-2xl mx-auto">
            Découvrez l'élégance intemporelle de nos créations artisanales en terre cuite, fabriquées avec passion par des artisans locaux africains.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => {
            const IconComponent = specialty.icon;
            return (
              <div key={index} className="text-center group hover-scale">
                <div className={`bg-gradient-to-br ${specialty.gradient} rounded-xl p-8 mb-6 shadow-lg`}>
                  <IconComponent className="text-white text-4xl mb-4 mx-auto" size={48} />
                  <h3 className="font-poppins font-semibold text-xl text-white mb-2">{specialty.title}</h3>
                </div>
                <p className="text-slate-gray">
                  {specialty.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
