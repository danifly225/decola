import { useState } from "react";
import Navigation from "@/components/navigation";
import ProductCard from "@/components/product-card";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";

const products = [
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
  },
  {
    title: "Mur Claustra",
    description: "Installation complète pour espaces extérieurs",
    imageUrl: "https://pixabay.com/get/gb36b6fa4aafb31284f30dfa7bbd0a7b33a7de18adc042c14fc6f31de7edf4d02c52ef037bcb1c562d8df52d8f38481ccc8369f42ec93a6ebf6bc51df77484fcd_1280.jpg",
    imageAlt: "Mur claustra traditionnel",
    category: "claustras"
  },
  {
    title: "Vasque Moderne",
    description: "Style contemporain avec finition naturelle",
    imageUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    imageAlt: "Vasque moderne en terre cuite",
    category: "vasques"
  },
  {
    title: "Pièces Sur Mesure",
    description: "Créations personnalisées selon vos désirs",
    imageUrl: "https://images.unsplash.com/photo-1610375461246-83df859d849d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    imageAlt: "Artisan façonnant la terre cuite",
    category: "accessoires"
  }
];

const categories = [
  { id: "all", label: "Tous" },
  { id: "claustras", label: "Claustras" },
  { id: "vasques", label: "Vasques" },
  { id: "accessoires", label: "Accessoires" }
];

export default function Products() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProducts = activeFilter === "all" 
    ? products 
    : products.filter(product => product.category === activeFilter);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-beige pattern-overlay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-poppins font-bold text-4xl md:text-5xl text-saddle mb-4">Nos Produits</h1>
            <p className="text-lg text-slate-gray max-w-2xl mx-auto">
              Chaque pièce est unique, façonnée à la main selon des techniques ancestrales transmises de génération en génération.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Product Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeFilter === category.id ? "default" : "outline"}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  activeFilter === category.id
                    ? "bg-saddle text-white"
                    : "bg-white text-saddle border-saddle hover:bg-sandy hover:text-white"
                }`}
                onClick={() => setActiveFilter(category.id)}
              >
                {category.label}
              </Button>
            ))}
          </div>
          
          {/* Product Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-slate-gray">Aucun produit trouvé dans cette catégorie.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
