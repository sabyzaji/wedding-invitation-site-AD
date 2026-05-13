import { motion } from "framer-motion";
import { Heart, ChevronDown, Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const HERO_IMAGE = "https://media.base44.com/images/public/69d9c8995b8bcdc2adab7648/dd2d09467_generated_012b8927.png";
const CHURCH_IMAGE = "https://media.base44.com/images/public/69d9c8995b8bcdc2adab7648/8c70b952d_generated_ffc8ec92.png";

export default function Welcome() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="Romantic couple in Kerala garden at golden hour"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 pt-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-body text-xs md:text-sm tracking-[0.3em] uppercase text-foreground/80 mb-6"
          >
            Together with their families
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-foreground tracking-wide"
          >
            Ajay
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="my-4 flex items-center justify-center gap-4"
          >
            <div className="h-px w-12 md:w-20 bg-accent/60" />
            <Heart className="w-4 h-4 md:w-5 md:h-5 text-accent fill-accent" />
            <div className="h-px w-12 md:w-20 bg-accent/60" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-foreground tracking-wide"
          >
            Dona
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="font-display text-lg md:text-xl italic text-primary mt-8"
          >
            "Two lives, one prayer"
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5 text-primary" />
              <span className="font-body text-xs tracking-widest uppercase">
                May 9, 2026
              </span>
            </div>
            <span className="hidden sm:block text-border">·</span>
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-primary" />
              <span className="font-body text-xs tracking-widest uppercase">
                Kottayam, Kerala
              </span>
            </div>
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="mt-16"
          >
            <ChevronDown className="w-5 h-5 text-primary/50 mx-auto animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* Greeting Section */}
      <section className="py-20 lg:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-6">
              You are invited
            </p>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight">
              We joyfully invite you to celebrate
              <br className="hidden md:block" /> the beginning of our forever
            </h2>
            <div className="flex items-center justify-center gap-4 my-8">
              <div className="h-px w-16 bg-accent/40" />
              <Heart className="w-3 h-3 text-accent fill-accent opacity-60" />
              <div className="h-px w-16 bg-accent/40" />
            </div>
            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              With hearts full of gratitude and love, we invite you to witness
              and bless the union of{" "}
              <span className="font-display text-lg md:text-xl text-foreground italic">
                Ajay P Oommen
              </span>{" "}
              and{" "}
              <span className="font-display text-lg md:text-xl text-foreground italic">
                Dona Rachel Abey
              </span>
              . Your presence is the greatest gift we could ask for as we begin
              this beautiful journey together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Venue Preview */}
      <section className="py-16 lg:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
          >
            <div className="relative rounded-lg overflow-hidden aspect-[4/3]">
              <img
                src={CHURCH_IMAGE}
                alt="Manganam St. Peter's Mar Thoma Syrian Church"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>
            <div className="lg:pl-4">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
                The Venue
              </p>
              <h3 className="font-display text-3xl md:text-4xl font-light text-foreground mb-4">
                Manganam St. Peter's
                <br />
                Mar Thoma Syrian Church
              </h3>
              <p className="font-body text-base text-muted-foreground leading-relaxed mb-6">
                A place of sacred beauty in the heart of Kottayam, where our
                families have worshipped for generations. It is here, surrounded
                by the blessings of our community, that we will make our
                covenant before God.
              </p>
              <p className="font-body text-sm text-muted-foreground/80">
                Kottayam, Kerala, India
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/schedule"
                  className="inline-flex items-center gap-2 font-body text-xs tracking-widest uppercase text-primary border border-primary/30 px-6 py-3 rounded-full hover:bg-primary/5 transition-colors"
                >
                  View Schedule
                </Link>
                <Link
                  to="/travel"
                  className="inline-flex items-center gap-2 font-body text-xs tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors px-6 py-3"
                >
                  Travel Info →
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 lg:py-24 px-6 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
              Explore
            </p>
            <h3 className="font-display text-3xl md:text-4xl font-light text-foreground">
              Everything you need to know
            </h3>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { to: "/schedule", label: "Schedule", icon: "📅" },
              { to: "/our-story", label: "Our Story", icon: "💕" },
              { to: "/travel", label: "Travel", icon: "✈️" },
              { to: "/faqs", label: "FAQs", icon: "💌" },
            ].map((item, i) => (
              <motion.div
                key={item.to}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <Link
                  to={item.to}
                  className="block p-6 lg:p-8 rounded-lg border border-border/50 bg-card hover:bg-card/80 hover:border-primary/20 transition-all duration-300 text-center group"
                >
                  <span className="text-2xl mb-3 block">{item.icon}</span>
                  <span className="font-body text-xs tracking-widest uppercase text-muted-foreground group-hover:text-primary transition-colors">
                    {item.label}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}