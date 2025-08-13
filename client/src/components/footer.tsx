import { Link } from "wouter";
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-gray text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <svg className="w-8 h-8 text-orange-accent mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 9.949V7.5l1-2 1 2v19.449c5.16-.21 9-4.399 9-9.949V7L12 2z"/>
              </svg>
              <span className="font-poppins font-bold text-xl">DECOLA AFRICA</span>
            </div>
            <p className="text-gray-300 mb-4">
              L'excellence artisanale africaine au service de vos espaces modernes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-orange-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-accent transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-accent transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-orange-accent transition-colors">Accueil</Link></li>
              <li><Link href="/produits" className="text-gray-300 hover:text-orange-accent transition-colors">Nos Produits</Link></li>
              <li><Link href="/apropos" className="text-gray-300 hover:text-orange-accent transition-colors">À Propos</Link></li>
              <li><Link href="/galerie" className="text-gray-300 hover:text-orange-accent transition-colors">Galerie</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-orange-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Products */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-4">Nos Produits</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-orange-accent transition-colors">Claustras décoratifs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-accent transition-colors">Vasques de douche</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-accent transition-colors">Accessoires déco</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-accent transition-colors">Créations sur mesure</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-4">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center"><Phone className="w-4 h-4 mr-2" /> +225 07 08 19 89 12</p>
              <p className="flex items-center"><Mail className="w-4 h-4 mr-2" /> support@decolaafrica.com</p>
              <p className="flex items-start"><MapPin className="w-4 h-4 mr-2 mt-1" /> Quartier Artisanal<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bassam, Côte d&apos;Ivoire</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2025 Decola Africa. Tous droits réservés. | Artisanat africain authentique</p>
        </div>
      </div>
    </footer>
  );
}
