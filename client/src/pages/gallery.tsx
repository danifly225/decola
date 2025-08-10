import { useState } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Lightbox from "@/components/lightbox";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const galleryItems = [
  {
    src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    alt: "Claustra géométrique terminé",
    category: "realisations"
  },
  {
    src: "https://images.unsplash.com/photo-1610375461246-83df859d849d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    alt: "Façonnage de l'argile",
    category: "processus"
  },
  {
    src: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    alt: "Argile naturelle",
    category: "matieres"
  },
  {
    src: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    alt: "Vasque artisanale installée",
    category: "realisations"
  },
  {
    src: "https://images.unsplash.com/photo-1594736797933-d0600501ba34?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    alt: "Cuisson au four traditionnel",
    category: "processus"
  },
  {
    src: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    alt: "Collection d'accessoires",
    category: "realisations"
  },
  {
    src: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    alt: "Préparation de l'argile",
    category: "matieres"
  },
  {
    src: "https://pixabay.com/get/g37722d2ab4d434888186f140d315e48d8dc5863d338594e88fdc551c7def9df3de7ebbec091a0c3739f644cdbff0b28af79d4f4b7e46a63479651de416d66699_1280.jpg",
    alt: "Application des motifs",
    category: "processus"
  }
];

const categories = [
  { id: "all", label: "Toutes" },
  { id: "realisations", label: "Réalisations" },
  { id: "processus", label: "Processus" },
  { id: "matieres", label: "Matières" }
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState({ src: "", alt: "" });

  const filteredItems = activeFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  const openLightbox = (src: string, alt: string) => {
    setLightboxImage({ src, alt });
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-beige pattern-overlay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-poppins font-bold text-4xl md:text-5xl text-saddle mb-4">Notre Galerie</h1>
            <p className="text-lg text-slate-gray max-w-2xl mx-auto">
              Explorez notre collection de créations artisanales et découvrez le processus de fabrication traditionnel.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Gallery Categories */}
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
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg hover-scale cursor-pointer group"
                onClick={() => openLightbox(item.src, item.alt)}
              >
                <img src={item.src} alt={item.alt} className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <Search className="text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity" size={32} />
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-slate-gray">Aucune image trouvée dans cette catégorie.</p>
            </div>
          )}
        </div>
      </section>

      <Lightbox
        isOpen={lightboxOpen}
        imageSrc={lightboxImage.src}
        imageAlt={lightboxImage.alt}
        onClose={() => setLightboxOpen(false)}
      />

      <Footer />
    </div>
  );
}
