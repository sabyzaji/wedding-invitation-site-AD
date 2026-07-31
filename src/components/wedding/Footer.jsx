import { Home } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-16 px-6 text-center border-t border-border/50">
      <div className="max-w-md mx-auto">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-12 bg-primary/30" />
          <Home className="w-3.5 h-3.5 text-primary" />
          <div className="h-px w-12 bg-primary/30" />
        </div>
        <p className="font-body text-[10px] tracking-[0.25em] uppercase text-primary mb-4">
          Inviting on behalf of the family
        </p>
        <p className="font-display text-xl md:text-2xl text-foreground tracking-wide">
          Abin Andrews Varghese
        </p>
        <p className="font-display text-lg text-muted-foreground/50 my-1">&amp;</p>
        <p className="font-display text-xl md:text-2xl text-foreground tracking-wide">
          Albin Andrews Varghese
        </p>
        <p className="font-body text-xs text-muted-foreground/60 mt-6">
          We look forward to welcoming you
        </p>
      </div>
    </footer>
  );
}
