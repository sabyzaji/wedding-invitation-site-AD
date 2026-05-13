import { motion } from "framer-motion";
import { Heart, Home, BookOpen, Leaf, Gift } from "lucide-react";
import SectionHeading from "../components/wedding/SectionHeading";
import DecorativeDivider from "../components/wedding/DecorativeDivider";

const REGISTRY_IMAGE = "https://media.base44.com/images/public/69d9c8995b8bcdc2adab7648/114c14e82_generated_fab58fae.png";

const registryCategories = [
  {
    icon: Home,
    title: "Our New Home",
    description: "Help us build our first home together with essentials that turn a house into a haven.",
    items: ["Kitchen Essentials", "Bedding & Linens", "Home Décor"],
  },
  {
    icon: BookOpen,
    title: "Experiences & Memories",
    description: "Gift us moments we'll treasure forever — from a honeymoon adventure to a cooking class.",
    items: ["Honeymoon Fund", "Dining Experiences", "Adventure Activities"],
  },
  {
    icon: Leaf,
    title: "Give Back",
    description: "In lieu of material gifts, consider a donation to causes close to our hearts.",
    items: ["Children's Education Fund", "Church Community Fund", "Environmental Charity"],
  },
];

export default function Registry() {
  return (
    <div className="pt-24 lg:pt-32 pb-16 lg:pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title="Gift Registry"
          subtitle="Your presence is our greatest gift. But if you wish to bless us further, here are some ideas."
        />

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-sm mx-auto mb-16 lg:mb-20"
        >
          <div className="aspect-square rounded-full overflow-hidden border-4 border-background shadow-lg">
            <img
              src={REGISTRY_IMAGE}
              alt="Traditional brass lamp with jasmine flowers"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <p className="font-display text-2xl md:text-3xl italic text-primary leading-snug max-w-2xl mx-auto">
            "The best things in life are the people you love, the places
            you've been, and the memories you've made along the way."
          </p>
        </motion.div>

        {/* Categories */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {registryCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group p-8 rounded-lg border border-border/50 bg-card hover:border-primary/20 hover:shadow-md transition-all duration-500 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/15 transition-colors">
                <category.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-xl lg:text-2xl font-light text-foreground mb-3">
                {category.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5">
                {category.description}
              </p>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="font-body text-xs tracking-wider uppercase text-muted-foreground/80 flex items-center justify-center gap-2"
                  >
                    <Heart className="w-2.5 h-2.5 text-accent fill-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center p-8 lg:p-12 rounded-lg border border-border/50 bg-card"
        >
          <Gift className="w-6 h-6 text-accent mx-auto mb-4" />
          <h3 className="font-display text-2xl font-light text-foreground mb-3">
            A Note from Us
          </h3>
          <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-lg mx-auto">
            We truly mean it when we say your presence is the greatest blessing.
            Whether you give us a hug, a prayer, or a gift — it all means the
            world to us. Thank you for being part of our story.
          </p>

          <DecorativeDivider className="py-6" />

          <p className="font-display text-lg italic text-primary">
            With love, Ajay & Dona
          </p>
        </motion.div>
      </div>
    </div>
  );
}