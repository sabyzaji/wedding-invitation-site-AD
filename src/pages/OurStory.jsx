import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import SectionHeading from "../components/wedding/SectionHeading";
import DecorativeDivider from "../components/wedding/DecorativeDivider";

const STORY_IMAGE = "https://media.base44.com/images/public/69d9c8995b8bcdc2adab7648/8fc2d3d62_generated_6915fbd1.png";
const HANDS_IMAGE = "https://media.base44.com/images/public/69d9c8995b8bcdc2adab7648/b0fe76e91_generated_3c3f8c2f.png";

const storyChapters = [
  {
    title: "The First Meeting",
    text: "Some love stories begin with grand gestures, but ours started with a quiet smile across a room. It was as if the universe had carefully arranged the moment — a gentle nudge from destiny that brought two souls together in the most unexpected way.",
    pullQuote: "In a world of noise, we found our peace in each other.",
  },
  {
    title: "Growing Together",
    text: "Through long conversations, shared prayers, and quiet moments, our bond deepened. We discovered that love isn't just a feeling — it's a choice you make every day. We chose each other, again and again, through every season of life.",
    pullQuote: "Love is not just looking at each other, it's looking in the same direction.",
  },
  {
    title: "The Proposal",
    text: "Under a canopy of stars and with a heart full of hope, Ajay asked the question that would change everything. Dona's eyes sparkled with tears of joy as she whispered 'yes' — a single word that sealed a lifetime of promises.",
    pullQuote: "She said yes, and the world stood still.",
  },
  {
    title: "Forever Begins",
    text: "On May 9, 2026, at the beautiful Manganam St. Peter's Mar Thoma Syrian Church in Kottayam, we will stand before God and our loved ones to make our covenant. This is not just the start of a marriage — it's the beginning of a legacy of love, faith, and togetherness.",
    pullQuote: "Two lives, one prayer, one forever.",
  },
];

export default function OurStory() {
  return (
    <div className="pt-24 lg:pt-32 pb-16 lg:pb-24">
      {/* Hero */}
      <div className="relative h-[50vh] md:h-[60vh] mb-16 lg:mb-24 overflow-hidden">
        <img
          src={STORY_IMAGE}
          alt="Couple walking through Kerala backwaters at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />
        <div className="absolute bottom-0 left-0 right-0 text-center px-6 pb-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-foreground"
          >
            Our Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="font-display text-lg italic text-primary mt-3"
          >
            How two hearts became one
          </motion.p>
        </div>
      </div>

      <div className="px-6">
        <div className="max-w-4xl mx-auto">
          {/* Story Chapters */}
          {storyChapters.map((chapter, i) => (
            <div key={i} className="mb-20 lg:mb-28">
              {/* Pull Quote */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8 }}
                className="text-center mb-10"
              >
                <p className="font-display text-2xl md:text-3xl lg:text-4xl italic text-primary leading-snug max-w-2xl mx-auto">
                  "{chapter.pullQuote}"
                </p>
              </motion.div>

              {/* Chapter content - alternating layout */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`grid lg:grid-cols-[1fr_auto] gap-8 items-start ${
                  i % 2 === 1 ? "lg:grid-cols-[auto_1fr]" : ""
                }`}
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <p className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-3">
                    Chapter {i + 1}
                  </p>
                  <h3 className="font-display text-3xl md:text-4xl font-light text-foreground mb-5">
                    {chapter.title}
                  </h3>
                  <p className="font-body text-base md:text-lg text-muted-foreground leading-[1.8]">
                    {chapter.text}
                  </p>
                </div>
                <div
                  className={`hidden lg:flex items-center justify-center w-px h-32 bg-border/50 ${
                    i % 2 === 1 ? "lg:order-1" : ""
                  }`}
                />
              </motion.div>

              {/* Image between certain chapters */}
              {i === 1 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="mt-16 lg:mt-20 rounded-lg overflow-hidden aspect-[3/2] max-w-2xl mx-auto"
                >
                  <img
                    src={HANDS_IMAGE}
                    alt="Couple's hands intertwined with engagement rings"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              )}

              {i < storyChapters.length - 1 && (
                <DecorativeDivider className="mt-12" />
              )}
            </div>
          ))}

          {/* Closing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mt-8"
          >
            <Heart className="w-5 h-5 text-primary fill-primary mx-auto mb-4" />
            <p className="font-display text-xl md:text-2xl text-foreground">
              Ajay P Oommen & Dona Rachel Abey
            </p>
            <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mt-2">
              May 9, 2026
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}