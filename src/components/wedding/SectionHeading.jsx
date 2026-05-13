import { motion } from "framer-motion";
import DecorativeDivider from "./DecorativeDivider";

export default function SectionHeading({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-center mb-12 lg:mb-16"
    >
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-wide">
        {title}
      </h2>
      {subtitle && (
        <p className="font-body text-sm md:text-base text-muted-foreground mt-4 max-w-lg mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <DecorativeDivider className="py-4 mt-2" />
    </motion.div>
  );
}