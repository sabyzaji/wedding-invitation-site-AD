import { motion } from "framer-motion";
import { MapPin, Phone, Globe, Star } from "lucide-react";

export default function HotelCard({ hotel, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group p-6 lg:p-8 rounded-lg border border-border/50 bg-card hover:border-primary/20 hover:shadow-md transition-all duration-500"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h4 className="font-display text-xl lg:text-2xl font-light text-foreground mb-1">
            {hotel.name}
          </h4>
          <div className="flex items-center gap-1.5 text-muted-foreground/80">
            <MapPin className="w-3 h-3 text-primary/60" />
            <span className="font-body text-xs">{hotel.distance}</span>
          </div>
        </div>
        {hotel.recommended && (
          <div className="flex items-center gap-1 bg-accent/10 text-accent px-2.5 py-1 rounded-full">
            <Star className="w-3 h-3 fill-accent" />
            <span className="font-body text-[10px] tracking-wider uppercase font-medium">
              Recommended
            </span>
          </div>
        )}
      </div>

      <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5">
        {hotel.description}
      </p>

      <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-border/50">
        {hotel.price && (
          <span className="font-body text-sm text-foreground font-medium">
            {hotel.price}
          </span>
        )}
        {hotel.phone && (
          <a
            href={`tel:${hotel.phone}`}
            className="inline-flex items-center gap-1.5 font-body text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            <Phone className="w-3 h-3" />
            {hotel.phone}
          </a>
        )}
        {hotel.website && (
          <a
            href={hotel.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-body text-xs text-primary hover:text-primary/80 transition-colors"
          >
            <Globe className="w-3 h-3" />
            Website
          </a>
        )}
      </div>
    </motion.div>
  );
}