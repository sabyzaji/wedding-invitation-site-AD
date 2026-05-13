import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="py-16 px-6 text-center border-t border-border/50">
      <div className="max-w-md mx-auto">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-12 bg-primary/30" />
          <Heart className="w-3.5 h-3.5 text-primary fill-primary" />
          <div className="h-px w-12 bg-primary/30" />
        </div>
        <p className="font-display text-2xl text-foreground mb-2">
          Ajay & Dona
        </p>
        <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-1">
          May 9, 2026 · Kottayam, Kerala
        </p>
        <p className="font-body text-xs tracking-widest text-muted-foreground mb-1">
          Contact:+91 8078348082, +91 90741 19502
        </p>
        <p className="font-body text-xs text-muted-foreground/60 mt-6">
          Made with love
        </p>
      </div>
    </footer>
  );
}