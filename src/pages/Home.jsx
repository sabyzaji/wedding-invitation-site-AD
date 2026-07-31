import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import imgFamily from "@/assests/family.jpeg";
import imgHouse from "@/assests/house.jpg";
import imgVenue from "@/assests/house.jpeg";
import imgFoundation from "@/assests/foundation.jpeg";
import imgFoundation2 from "@/assests/foundation2.jpeg";
import {
  Home,
  ChevronDown,
  Calendar,
  MapPin,
  Clock,
  Church,
  Heart,
} from "lucide-react";

const VENUE_MAP_URL = "https://maps.app.goo.gl/CPzn3eWyF99uPF347";
const COUNTDOWN_TARGET = new Date("2026-08-22T17:00:00+05:30").getTime();
const COUNTDOWN_UNITS = ["Days", "Hours", "Minutes", "Seconds"];

function Divider({ Icon = Home }) {
  return (
    <div className="flex items-center justify-center gap-4 py-8">
      <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/30" />
      <Icon className="w-3.5 h-3.5 text-primary opacity-70" />
      <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/30" />
    </div>
  );
}

function SectionHeading({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8 }}
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
      <Divider />
    </motion.div>
  );
}

function getTimeRemaining(targetTime) {
  const now = new Date();
  const distance = targetTime - now.getTime();

  if (distance <= 0) {
    return { expired: true, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  return { expired: false, days, hours, minutes, seconds };
}

function CountdownCard() {
  const [timeLeft, setTimeLeft] = useState(() => getTimeRemaining(COUNTDOWN_TARGET));

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft(getTimeRemaining(COUNTDOWN_TARGET));
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  if (timeLeft.expired) {
    return (
      <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-white/85 backdrop-blur-md">
        <Home className="h-4 w-4 text-white/80" />
        <span className="font-body text-xs uppercase tracking-[0.3em]">The day is here</span>
      </div>
    );
  }

  const units = [
    { value: timeLeft.days, label: COUNTDOWN_UNITS[0] },
    { value: timeLeft.hours, label: COUNTDOWN_UNITS[1] },
    { value: timeLeft.minutes, label: COUNTDOWN_UNITS[2] },
    { value: timeLeft.seconds, label: COUNTDOWN_UNITS[3] },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.9, duration: 0.8 }}
      className="mt-5"
    >
      <div className="mt-3 rounded-[1.4rem] border border-white/20 bg-black/30 px-2.5 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-sm sm:px-3">
        <div className="flex items-end justify-center gap-2 sm:gap-3">
          {units.map((unit, index) => (
            <div key={unit.label} className="relative flex items-end gap-2 text-center">
              <div className="min-w-[52px] sm:min-w-[74px]">
                <div className="font-display text-[2.2rem] leading-none text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.55)] [-webkit-text-stroke:0.8px_rgba(255,255,255,0.45)] sm:text-[3.4rem] sm:[-webkit-text-stroke:0.6px_rgba(255,255,255,0.35)]">
                  {String(unit.value).padStart(2, "0")}
                </div>
                <div className="mt-1.5 font-body text-[8px] uppercase tracking-[0.2em] text-white/80 sm:text-[10px] sm:tracking-[0.28em]">
                  {unit.label}
                </div>
              </div>
              {index < units.length - 1 && (
                <div className="pb-4 font-display text-2xl leading-none text-white/75 sm:pb-5 sm:text-3xl">:</div>
              )}
            </div>
          ))}
        </div>
        <p className="mt-3 font-body text-[10px] uppercase tracking-[0.2em] text-white/70 sm:text-[11px] sm:tracking-[0.28em]">
          Until We Welcome You Home
        </p>
      </div>
    </motion.div>
  );
}

const events = [
  {
    date: "Saturday, 22 August 2026",
    title: "Housewarming Reception",
    desc: "Join us as we open our doors and hearts — an evening of gratitude, fellowship, and celebration in our new home.",
    time: "5:00 PM onwards",
    venue: "Chuzhakunnel House, South Pampady, Kottayam",
    venueMapUrl: VENUE_MAP_URL,
    featured: true,
  },
];

const blessings = [
  {
    title: "Built on Faith",
    quote: "Unless the Lord builds the house…",
    text: "This home is more than walls and rooms — it is a testimony of God's faithfulness through every season of building, waiting, and praying.",
  },
  {
    title: "Gathered in Love",
    quote: "A house becomes a home with love.",
    text: "We cannot wait to share this new chapter with the people who have walked beside us — family and friends whose blessings mean everything.",
  },
  {
    title: "A New Beginning",
    quote: "Every good gift is from above.",
    text: "With grateful hearts we step into this new beginning, trusting the One who has brought us here and inviting you to celebrate with us.",
  },
];

export default function HousewarmingPage() {
  return (
    <div className="overflow-x-hidden">
      {/* ── HERO ──────────────────────────────────────────────────────────────── */}
      <section id="welcome" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={imgHouse}
            alt=""
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-background" />
        </div>

        <div className="relative z-10 text-center px-6 pt-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-body text-xs md:text-sm tracking-[0.3em] uppercase text-white/80 mb-6"
          >
            You are warmly invited
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white tracking-wide leading-tight"
          >
            Housewarming
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="my-5 flex items-center justify-center gap-4"
          >
            <div className="h-px w-16 md:w-24 bg-white/50" />
            <Home className="w-5 h-5 text-white" />
            <div className="h-px w-16 md:w-24 bg-white/50" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="font-display text-2xl sm:text-3xl md:text-4xl font-light text-white/90 tracking-wide"
          >
            Reception
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="font-display text-lg md:text-xl italic text-white/75 mt-8 max-w-xl mx-auto leading-relaxed"
          >
            &ldquo;Unless the Lord builds the house,
            <br className="hidden sm:block" /> the builders labor in vain.&rdquo;
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.35, duration: 1 }}
            className="font-body text-[10px] tracking-[0.25em] uppercase text-white/55 mt-3"
          >
            Psalm 127:1
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-white/70"
          >
            <div className="flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5" />
              <span className="font-body text-xs tracking-widest uppercase">22 August 2026</span>
            </div>
            <span className="opacity-40">·</span>
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5" />
              <span className="font-body text-xs tracking-widest uppercase">5:00 PM onwards</span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7, duration: 1 }}
            className="mt-3 font-body text-xs tracking-widest uppercase text-white/70"
          >
            Chuzhakunnel House · South Pampady
          </motion.p>

          <CountdownCard />

          <motion.a
            href="#invitation"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="mt-14 inline-flex flex-col items-center gap-3 group"
            aria-label="Scroll to invitation"
          >
            <span className="font-body text-[10px] tracking-[0.35em] uppercase text-white/90">
              Scroll to explore
            </span>
            <span className="relative flex h-12 w-7 items-start justify-center rounded-full border-2 border-white/70 bg-white/10 backdrop-blur-sm pt-2 shadow-[0_0_20px_rgba(255,255,255,0.25)] group-hover:border-white group-hover:bg-white/20 transition-colors">
              <motion.span
                className="block h-2 w-1 rounded-full bg-white"
                animate={{ y: [0, 14, 0], opacity: [1, 0.35, 1] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              />
            </span>
            <motion.span
              className="flex flex-col items-center -mt-1"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="w-5 h-5 text-white drop-shadow-md -mb-3" />
              <ChevronDown className="w-5 h-5 text-white/55" />
            </motion.span>
          </motion.a>
        </div>
      </section>

      {/* ── GREETING ──────────────────────────────────────────────────────────── */}
      <section id="invitation" className="py-20 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-6">
              With grateful hearts
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-light text-foreground leading-tight">
              By God&apos;s abundant grace,
              <br className="hidden md:block" /> we invite you to our home
            </h2>
            <Divider />
            <p className="font-body text-base md:text-lg text-muted-foreground leading-[1.8]">
              With grateful hearts and by God&apos;s abundant grace, we are delighted to invite you
              and your family to our{" "}
              <span className="font-display text-2xl text-foreground italic">Housewarming Reception</span>.
            </p>
            <p className="font-body text-base md:text-lg text-muted-foreground leading-[1.8] mt-6">
              Your presence and blessings will make this joyful occasion even more special.
              We look forward to celebrating this new beginning with you.
            </p>
            <p className="font-display text-xl md:text-2xl text-foreground mt-10 italic">
              With love,
            </p>
            <p className="font-display text-2xl md:text-3xl text-foreground mt-2">
              The Chuzhakunnel Family
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── VENUE ─────────────────────────────────────────────────────────────── */}
      <section id="venue" className="py-16 lg:py-24 px-6 bg-card/40">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-lg overflow-hidden shadow-lg aspect-[4/3] relative"
          >
            <a
              href={VENUE_MAP_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Open Chuzhakunnel House in Google Maps"
              className="block h-full w-full"
            >
              <div className="relative h-full w-full flex flex-col items-center justify-end gap-3 pb-6">
                <img
                  src={imgVenue}
                  alt="Chuzhakunnel House"
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/35" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent" />
                <div className="relative z-10 text-center px-6">
                  <p className="font-display text-2xl text-white">Chuzhakunnel House</p>
                  <p className="font-body text-sm text-white/85 mt-2 flex items-center justify-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    View on Google Maps
                  </p>
                </div>
              </div>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">The Venue</p>
            <h3 className="font-display text-3xl md:text-4xl font-light text-foreground mb-4">
              Chuzhakunnel House
            </h3>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-6">
              Nestled in the quiet of South Pampady, our new home awaits your footsteps and your
              blessings. Come as you are — we cannot wait to welcome you through our doors.
            </p>
            <div className="space-y-3 font-body text-sm text-muted-foreground">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-primary/60 mt-0.5 shrink-0" />
                <span>
                  Chuzhakunnel House
                  <br />
                  South Pampady
                  <br />
                  Kottayam
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-primary/60 shrink-0" />
                Saturday, 22 August 2026
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-primary/60 shrink-0" />
                5:00 PM onwards
              </p>
            </div>
            <a
              href={VENUE_MAP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-8 font-body text-xs tracking-widest uppercase text-primary border border-primary/30 px-6 py-3 rounded-full hover:bg-primary/5 transition-colors"
            >
              <MapPin className="w-3.5 h-3.5" />
              Get Directions
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── SCHEDULE ──────────────────────────────────────────────────────────── */}
      <section id="schedule" className="py-20 lg:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            title="The Celebration"
            subtitle="One evening of gratitude, fellowship, and joy"
          />

          <div className="max-w-xl mx-auto">
            {events.map((ev, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center p-8 lg:p-12 rounded-lg border border-border/50 bg-card"
              >
                <p className="font-body text-[10px] tracking-[0.2em] uppercase text-primary mb-3">
                  {ev.date}
                </p>
                <h4 className="font-display text-3xl md:text-4xl font-light text-foreground mb-4">
                  {ev.title}
                </h4>
                <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed mb-6 max-w-md mx-auto">
                  {ev.desc}
                </p>
                <div className="flex flex-col items-center gap-2 text-muted-foreground/70">
                  <span className="flex items-center gap-1.5 text-xs">
                    <Clock className="w-3 h-3 text-primary/60" />
                    {ev.time}
                  </span>
                  <a
                    href={ev.venueMapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs underline-offset-2 transition-colors hover:text-primary"
                  >
                    <MapPin className="w-3 h-3 text-primary/70" />
                    {ev.venue}
                  </a>
                </div>
                <div className="mt-6">
                  <span className="inline-block font-body text-[10px] tracking-widest uppercase bg-primary/10 text-primary px-3 py-1.5 rounded-full">
                    Main Event
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="font-display text-xl italic text-muted-foreground">
              &ldquo;Unless the Lord builds the house, the builders labor in vain.&rdquo;
            </p>
            <p className="font-body text-xs text-muted-foreground/50 mt-2 tracking-widest uppercase">
              Psalm 127:1
            </p>
          </div>
        </div>
      </section>

      {/* ── BLESSINGS / NEW BEGINNING ─────────────────────────────────────────── */}
      <section id="blessings" className="py-20 lg:py-32 bg-card/30">
        <div className="px-6 mb-16 lg:mb-20">
          <SectionHeading
            title="A Blessed Home"
            subtitle="Reflections as we step into this new season of grace"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-6 mb-20 lg:mb-28"
        >
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="grid grid-cols-2 gap-3 lg:gap-4">
              <div className="rounded-lg overflow-hidden shadow-md aspect-[3/4]">
                <img
                  src={imgFoundation}
                  alt="Foundation stone blessing"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md aspect-[3/4] mt-8 lg:mt-12">
                <img
                  src={imgFoundation2}
                  alt="Foundation stone laying ceremony"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="text-center md:text-left">
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-primary mb-3">
                Where it began
              </p>
              <h3 className="font-display text-3xl md:text-4xl font-light text-foreground mb-4">
                The Foundation Stone
              </h3>
              <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4 flex items-center justify-center md:justify-start gap-2">
                <Calendar className="w-3.5 h-3.5 text-primary/60" />
                9 / 10 / 25
              </p>
              <p className="font-body text-base text-muted-foreground leading-relaxed">
                Before the walls rose, we laid this stone in prayer — marking the beginning of a home
                built not only with hands, but with faith. Every blessing spoken that day still lives
                in these rooms.
              </p>
              <div className="mt-6 flex items-center justify-center md:justify-start gap-3">
                <div className="h-px w-8 bg-primary/30" />
                <Church className="w-3.5 h-3.5 text-primary opacity-70" />
                <div className="h-px w-8 bg-primary/30" />
              </div>
            </div>
          </div>
        </motion.div>

        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-8 lg:gap-10">
          {blessings.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="text-center"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                {i === 0 ? (
                  <Church className="w-5 h-5 text-primary" />
                ) : i === 1 ? (
                  <Heart className="w-5 h-5 text-primary" />
                ) : (
                  <Home className="w-5 h-5 text-primary" />
                )}
              </div>
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-primary mb-2">
                {b.title}
              </p>
              <p className="font-display text-lg italic text-foreground mb-4">&ldquo;{b.quote}&rdquo;</p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{b.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-24 px-6"
        >
          <img
            src={imgFamily}
            alt="The Chuzhakunnel Family"
            loading="lazy"
            decoding="async"
            className="mx-auto mb-6 w-full max-w-lg rounded-lg object-cover shadow-md aspect-[4/3]"
          />
          <p className="font-display text-2xl md:text-3xl text-foreground">The Chuzhakunnel Family</p>
          <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mt-2">
            22 August 2026 · South Pampady, Kottayam
          </p>
        </motion.div>
      </section>
    </div>
  );
}
