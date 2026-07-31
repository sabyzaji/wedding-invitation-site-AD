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
        <p className="font-display text-xl md:text-2xl text-foreground mb-2">
          Thank you for being part of our joy
        </p>
        <p className="font-body text-xs text-muted-foreground/60 mt-4">
          We look forward to welcoming you
        </p>
      </div>
    </footer>
  );
}
