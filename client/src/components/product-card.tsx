import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  category: string;
}

export default function ProductCard({ title, description, imageUrl, imageAlt, category }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover-scale" data-category={category}>
      <img src={imageUrl} alt={imageAlt} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="font-poppins font-semibold text-xl text-saddle mb-2">{title}</h3>
        <p className="text-slate-gray mb-4">{description}</p>
        <Button className="w-full bg-orange-accent text-white hover:bg-gold-accent">
          <Mail className="w-4 h-4 mr-2" />
          Demander un devis
        </Button>
      </div>
    </div>
  );
}
