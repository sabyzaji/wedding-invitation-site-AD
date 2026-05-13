import { motion } from "framer-motion";
import { Clock, MapPin } from "lucide-react";

export default function TimelineEvent({ event, index, isLast }) {
  const isLeft = index % 2 === 0;

  return (
    <div className="relative">
      {/* Desktop Layout */}
      <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] gap-8 items-start">
        {/* Left content */}
        <div className={isLeft ? "text-right" : ""}>
          {isLeft && (
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6"
            >
              <EventContent event={event} align="right" />
            </motion.div>
          )}
        </div>

        {/* Center line & dot */}
        <div className="flex flex-col items-center">
          <div className="w-3 h-3 rounded-full bg-primary border-2 border-background shadow-sm relative z-10" />
          {!isLast && <div className="w-px flex-1 bg-border min-h-[120px]" />}
        </div>

        {/* Right content */}
        <div className={!isLeft ? "" : ""}>
          {!isLeft && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6"
            >
              <EventContent event={event} align="left" />
            </motion.div>
          )}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex gap-4">
        <div className="flex flex-col items-center">
          <div className="w-3 h-3 rounded-full bg-primary border-2 border-background shadow-sm relative z-10 mt-1" />
          {!isLast && <div className="w-px flex-1 bg-border" />}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pb-10 flex-1"
        >
          <EventContent event={event} align="left" />
        </motion.div>
      </div>
    </div>
  );
}

function EventContent({ event, align }) {
  return (
    <div className={align === "right" ? "md:text-right" : ""}>
      <p className="font-body text-xs tracking-[0.2em] uppercase text-primary mb-2">
        {event.date}
      </p>
      <h3 className="font-display text-2xl md:text-3xl font-light text-foreground mb-2">
        {event.title}
      </h3>
      {event.description && (
        <p className="font-body text-sm text-muted-foreground leading-relaxed mb-3">
          {event.description}
        </p>
      )}
      <div className="flex flex-col gap-1.5">
        {event.time && (
          <div className={`flex items-center gap-2 text-muted-foreground/80 ${align === "right" ? "md:justify-end" : ""}`}>
            <Clock className="w-3.5 h-3.5 text-primary/60" />
            <span className="font-body text-xs">{event.time}</span>
          </div>
        )}
        {event.venue && (
          <div className={`flex items-center gap-2 text-muted-foreground/80 ${align === "right" ? "md:justify-end" : ""}`}>
            <MapPin className="w-3.5 h-3.5 text-primary/60" />
            <span className="font-body text-xs">{event.venue}</span>
          </div>
        )}
      </div>
      {event.featured && (
        <div className="mt-4">
          <span className="inline-block font-body text-[10px] tracking-widest uppercase bg-primary/10 text-primary px-3 py-1.5 rounded-full">
            Main Ceremony
          </span>
        </div>
      )}
    </div>
  );
}