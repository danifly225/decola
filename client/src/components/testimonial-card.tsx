import { Star, User } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating?: number;
}

export default function TestimonialCard({ name, role, content, rating = 5 }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="text-gold-accent fill-current" size={20} />
        ))}
      </div>
      <p className="text-slate-gray mb-4">
        "{content}"
      </p>
      <div className="flex items-center">
        <div className="w-10 h-10 bg-sandy rounded-full flex items-center justify-center mr-3">
          <User className="text-white" size={20} />
        </div>
        <div>
          <p className="font-semibold text-saddle">{name}</p>
          <p className="text-sm text-slate-gray">{role}</p>
        </div>
      </div>
    </div>
  );
}
