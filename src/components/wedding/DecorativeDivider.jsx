import { Heart } from "lucide-react";

export default function DecorativeDivider({ className = "" }) {
  return (
    <div className={`flex items-center justify-center gap-4 py-8 ${className}`}>
      <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/30" />
      <Heart className="w-3 h-3 text-accent fill-accent opacity-60" />
      <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/30" />
    </div>
  );
}