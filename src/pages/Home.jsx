import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import imgHero from '@/assests/1x/arch-photo.jpg';
import imgStory1 from '@/assests/1x/flower-garden-holding-hands.jpg';
import imgStory2 from '@/assests/1x/forehead-touch-intimate.jpg';
import imgStory3 from '@/assests/1x/walking-orange-dress.jpg';
import imgStory4 from '@/assests/1x/smiling-portrait-together.jpg';
import imgStory5 from '@/assests/1x/sitting-looking-at-each-other.jpg';
import imgStory6 from '@/assests/1x/hands-on-bench.jpg';
import church from '@/assests/church.webp';,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
import {
  Heart,
  ChevronDown,
  Calendar,
  MapPin,
  Clock,
  Plane,
  Car,
  Train,
} from "lucide-react";

// ── Real couple photos ─────────────────────────────────────────────────────────
const IMG_HERO = imgHero;
const IMG_STORY1 = imgStory1;
const IMG_STORY2 = imgStory2;
const IMG_STORY3 = imgStory3;
const IMG_STORY4 = imgStory4;
const IMG_STORY5 = imgStory5;
const IMG_STORY6 = imgStory6;
const IMG_CHURCH = church;
const CHURCH_MAP_URL = "https://www.google.com/maps/search/?api=1&query=Manganam%20St.%20Peter%27s%20Mar%20Thoma%20Syrian%20Church%2C%20Kottayam%2C%20HGMX%2B45G%2C%20Near%20Thurutul%20Palem%2C%20Manganam%2C%20Kottayam%2C%20Kerala%20686004";
const ENGAGEMENT_MAP_URL = "https://www.google.com/maps/search/?api=1&query=St.%20Thomas%20Orthodox%20Church%20Kangazha%2C%20GMHJ%2BRRC%2C%20Kangazha%2C%20Kerala%20686555";
const GROOM_HOME_MAP_URL = "https://maps.app.goo.gl/3mwQQ5hxLsAgski2A";
const BRIDE_HOME_MAP_URL = "https://www.google.com/maps/search/?api=1&query=9.534611%2C76.671917";
const COUNTDOWN_TARGET = new Date("2026-05-09T11:00:00+05:30").getTime();
const COUNTDOWN_UNITS = ["Days", "Hours", "Minutes", "Seconds"];

function handleChurchImageError(event) {
  event.currentTarget.onerror = null;
  event.currentTarget.src = church;
}

function createImageFallbackHandler(fallbackSrc) {
  return (event) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = fallbackSrc;
  };
}

// ── Helpers ───────────────────────────────────────────────────────────────────
function Divider() {
  return (
    <div className="flex items-center justify-center gap-4 py-8">
      <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/30" />
      <Heart className="w-3 h-3 text-accent fill-accent opacity-70" />
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

function StoryImage({ src, alt, className = "", fallbackSrc }) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      fetchPriority="low"
      sizes="(min-width: 1024px) 22rem, 45vw"
      onError={
        fallbackSrc
          ? createImageFallbackHandler(fallbackSrc)
          : undefined
      }
      className={className}
    />
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
        <Heart className="h-4 w-4 fill-white/80 text-white/80" />
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
      {/* <div className="mx-auto max-w-2xl rounded-[1.75rem] border border-white/12 bg-gradient-to-br from-white/12 via-white/8 to-transparent px-3 py-3 shadow-[0_16px_60px_rgba(0,0,0,0.22)] backdrop-blur-lg sm:px-5"> */}
      {/* <div className="flex items-center justify-center gap-2 text-white/70"> */}
      {/* <Clock className="h-4 w-4" /> */}
      {/* <span className="font-body text-[10px] uppercase tracking-[0.24em] sm:text-[11px] sm:tracking-[0.35em]"> */}
      {/* Live countdown to May 9, 2026 */}
      {/* </span> */}
      {/* </div> */}
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
          Remaining To Make It Official
        </p>
      </div>
      {/* </div> */}
    </motion.div>
  );
}

// ── Data ──────────────────────────────────────────────────────────────────────
const events = [
  {
    date: "May 2, 2026",
    title: "The Engagement",
    desc: "Ajay and Dona exchange rings in the presence of their families, beginning this sacred chapter together.",
    time: "11:30 AM",
    venue: "St. Thomas Orthodox Church Kangazha, Kottayam",
    venueMapUrl: ENGAGEMENT_MAP_URL,
    featured: false,
  },
  {
    date: "May 7, 2026",
    title: "Eve of the Wedding",
    desc: "An evening of prayer, music, and togetherness as both families come together in celebration.",
    time: "6:30 PM",
    venue: "Groom's Home, Pampady, Kottayam",
    venueMapUrl: GROOM_HOME_MAP_URL,
    secondaryVenue: "Bride's Home, Kangazha, Kottayam",
    secondaryVenueMapUrl: BRIDE_HOME_MAP_URL,
    featured: false,
  },
  {
    date: "May 9, 2026",
    title: "The Wedding Ceremony",
    desc: "Ajay & Dona make their covenant before God at the beautiful Manganam St. Peter's Mar Thoma Syrian Church — surrounded by family, faith, and love.",
    time: "11:00 AM",
    venue: "St. Peter's Mar Thoma Syrian Church,Manganam, Kottayam",
    venueMapUrl: CHURCH_MAP_URL,
    featured: true,
  },
  {
    date: "May 9, 2026",
    title: "Wedding Reception",
    desc: "A joyful celebration with feasting, laughter, and blessings from our dearest people.",
    time: "12:30 PM",
    venue: "St. Peter's Mar Thoma Syrian Church,Manganam, Kottayam",
    venueMapUrl: CHURCH_MAP_URL,
    featured: false,
  },
];

const travelOptions = [
  { Icon: Plane, title: "By Air", desc: "Cochin International Airport (COK) — ~90 km away. Pre-paid taxis available at the airport." },
  { Icon: Train, title: "By Train", desc: "Kottayam Railway Station is 4 km from the venue. Taxis and autos are readily available." },
  { Icon: Car, title: "By Road", desc: "Well connected via NH 183. Regular buses and taxis from Cochin, Trivandrum & other cities." },
];

// ── Our Story chapters ─────────────────────────────────────────────────────────
const storyChapters = [
  {
    chapter: "Chapter One",
    title: "Where It All Began",
    quote: "Some friendships quietly become forever.",
    text: "It started in school — a chance encounter, shared laughs, and a friendship that felt like home. Neither of them knew it then, but something beautiful had already begun.",
    images: [IMG_STORY5, IMG_STORY3],   // casual, sitting / walking
    fallbackImages: [imgStory5, imgStory3],
    layout: "right",  // image right
  },
  {
    chapter: "Chapter Two",
    title: "He Asked. She Said Yes.",
    quote: "One question. One answer. Everything changed.",
    text: "Years of friendship blossomed into something deeper. Ajay gathered his heart, found the right moment, and asked. Dona smiled — and said yes. The rest is the story you're reading now.",
    images: [IMG_STORY1, IMG_STORY2],   // flower garden / intimate
    fallbackImages: [imgStory1, imgStory2],
    layout: "left",
  },
  {
    chapter: "Chapter Three",
    title: "Forever Begins — May 9, 2026",
    quote: "Two lives. One prayer. One forever.",
    text: "Today, in the same church where generations have made their vows, Ajay and Dona will stand hand in hand — and say forever.",
    images: [IMG_STORY6, IMG_STORY4],   // hands / smiling portrait
    fallbackImages: [imgStory6, imgStory4],
    layout: "right",
  },
];

// ══════════════════════════════════════════════════════════════════════════════
export default function WeddingPage() {
  return (
    <div className="overflow-x-hidden">

      {/* ── HERO ──────────────────────────────────────────────────────────────── */}
      <section id="welcome" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMG_HERO}
            alt="Ajay and Dona"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            sizes="100vw"
            onError={createImageFallbackHandler(imgHero)}
            className="w-full h-full object-cover object-[center_27%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-background" />
        </div>

        <div className="relative z-10 text-center px-6 pt-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}
            className="font-body text-xs md:text-sm tracking-[0.3em] uppercase text-white/80 mb-6"
          >
            Together with their families
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 1 }}
            className="font-display text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-light text-white tracking-wide leading-none"
          >
            Ajay
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8, duration: 0.6 }}
            className="my-4 flex items-center justify-center gap-4"
          >
            <div className="h-px w-16 md:w-24 bg-white/50" />
            <Heart className="w-5 h-5 text-white fill-white" />
            <div className="h-px w-16 md:w-24 bg-white/50" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 1 }}
            className="font-display text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-light text-white tracking-wide leading-none"
          >
            Dona
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 1 }}
            className="font-display text-xl md:text-2xl italic text-white/80 mt-8"
          >
            "Two lives, one prayer"
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}
            className="mt-6 flex items-center justify-center gap-2 text-white/70"
          >
            <div className="flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5" />
              <span className="font-body text-xs tracking-widest uppercase">May 9, 2026</span>
            </div>
            <span className="opacity-40">·</span>
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5" />
              <span className="font-body text-xs tracking-widest uppercase">11:00 AM</span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.7, duration: 1 }}
            className="mt-3 font-body text-xs tracking-widest uppercase text-white/70"
          >
            Manganam St. Peter&apos;s Mar Thoma Syrian Church
          </motion.p>

          <CountdownCard />

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }} className="mt-16">
            <ChevronDown className="w-5 h-5 text-white/40 mx-auto animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* ── GREETING ──────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-6">You are invited</p>
            <h2 className="font-display text-3xl md:text-5xl font-light text-foreground leading-tight">
              We joyfully invite you to celebrate<br className="hidden md:block" /> the beginning of our forever
            </h2>
            <Divider />
            <p className="font-body text-base md:text-lg text-muted-foreground leading-[1.8]">
              With hearts full of gratitude and love, we invite you to witness and bless the union of<p>{" "}
                <span className="font-display text-2xl text-foreground italic">Ajay P Oommen</span> and{" "}
                <span className="font-display text-2xl text-foreground italic">Dona Rachel Abey</span>.</p>
              Your presence is the greatest gift we could ever ask for.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── VENUE ─────────────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 px-6 bg-card/40">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="rounded-lg overflow-hidden shadow-lg aspect-[4/3]"
          >
            {/* Actual Google Street View / Maps image of the church */}
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!4v1!6m8!1m7!1sCAoSLEFGMVFpcE5rbVRkOVV4b3dQZjFkRUkwZEVHMXdoaUhMWlFkZUdBVlJUalEz!2m2!1d9.6053!2d76.5521!3f200!4f0!5f0.7820865974627469"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Manganam St. Peter's Mar Thoma Syrian Church"
              className="w-full h-full min-h-[300px]"
            /> */}
            <a
              href={CHURCH_MAP_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Open Manganam St. Peter's Mar Thoma Syrian Church in Google Maps"
              className="block h-full w-full"
            >
              <img
                src={IMG_CHURCH}
                alt="Manganam St. Peter's Mar Thoma Syrian Church"
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                sizes="(min-width: 1024px) 50vw, 100vw"
                onError={handleChurchImageError}
                className="h-full w-full object-cover"
              />
            </a>

          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">The Venue</p>
            <h3 className="font-display text-3xl md:text-4xl font-light text-foreground mb-4">
              Manganam St. Peter's<br />Mar Thoma Syrian Church
            </h3>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-4">
              A place of sacred beauty in the heart of Kottayam, where our families have worshipped for generations.
              It is here, surrounded by the blessings of our community, that we will make our covenant before God.
            </p>
            <p className="font-body text-sm text-muted-foreground/70 flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-primary/60" />
              Manganam, Kottayam, Kerala 686018
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── SCHEDULE ──────────────────────────────────────────────────────────── */}
      <section id="schedule" className="py-20 lg:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionHeading title="The Schedule" subtitle="A timeline of celebrations as we journey toward forever" />

          {/* Desktop */}
          <div className="hidden md:block relative">
            <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-border/60" />
            {events.map((ev, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative grid grid-cols-2 gap-8 mb-14 last:mb-0">
                  <div className="absolute left-1/2 top-1 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background shadow z-10" />
                  {isLeft ? (
                    <>
                      <div className="text-right pr-10">
                        <EventCard ev={ev} align="right" />
                      </div>
                      <div />
                    </>
                  ) : (
                    <>
                      <div />
                      <div className="pl-10">
                        <EventCard ev={ev} align="left" />
                      </div>
                    </>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Mobile */}
          <div className="md:hidden space-y-8">
            {events.map((ev, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-primary border-2 border-background shadow mt-1 flex-shrink-0" />
                  {i < events.length - 1 && <div className="w-px flex-1 bg-border/60 mt-2" />}
                </div>
                <div className="pb-6 flex-1">
                  <EventCard ev={ev} align="left" />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="font-display text-xl italic text-muted-foreground">"For where your treasure is, there your heart will be also."</p>
            <p className="font-body text-xs text-muted-foreground/50 mt-2 tracking-widest uppercase">Matthew 6:21</p>
          </div>
        </div>
      </section>

      {/* ── OUR STORY ─────────────────────────────────────────────────────────── */}
      <section id="our-story" className="py-20 lg:py-32 bg-card/30">

        {/* Section title */}
        <div className="px-6 mb-16 lg:mb-20">
          <SectionHeading title="Our Story" subtitle="From schoolmates to soulmates — a love written by God himself" />
        </div>

        {/* Chapters */}
        <div className="space-y-28 lg:space-y-36 px-6">
          {storyChapters.map((ch, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9 }}
              className="max-w-6xl mx-auto"
            >
              <div className={`grid lg:grid-cols-2 gap-10 lg:gap-20 items-center ${ch.layout === "left" ? "" : "lg:[&>*:first-child]:order-2"}`}>

                {/* Text side */}
                <div className="flex flex-col justify-center">
                  <p className="font-body text-[10px] tracking-[0.35em] uppercase text-primary mb-3">{ch.chapter}</p>
                  <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-5 leading-tight">
                    {ch.title}
                  </h3>
                  <p className="font-display text-lg md:text-xl italic text-primary mb-6 leading-snug">
                    "{ch.quote}"
                  </p>
                  <p className="font-body text-base md:text-lg text-muted-foreground leading-[1.8]">
                    {ch.text}
                  </p>
                  <div className="mt-8 flex items-center gap-3">
                    <div className="h-px w-8 bg-accent/40" />
                    <Heart className="w-3 h-3 text-accent fill-accent opacity-60" />
                    <div className="h-px w-8 bg-accent/40" />
                  </div>
                </div>

                {/* Images side */}
                <div className="grid grid-cols-2 gap-3 lg:gap-4">
                  <div className="rounded-lg overflow-hidden aspect-[3/4] shadow-md col-span-1">
                    <StoryImage src={ch.images[0]} alt={ch.title} className="w-full h-full object-cover" fallbackSrc={ch.fallbackImages?.[0]} />
                  </div>
                  <div className="rounded-lg overflow-hidden aspect-[3/4] shadow-md col-span-1 mt-8 lg:mt-12">
                    <StoryImage src={ch.images[1]} alt={ch.title} className="w-full h-full object-cover" fallbackSrc={ch.fallbackImages?.[1]} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-24 px-6"
        >
          <Heart className="w-5 h-5 text-primary fill-primary mx-auto mb-4" />
          <p className="font-display text-2xl md:text-3xl text-foreground">Ajay P Oommen & Dona Rachel Abey</p>
          <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mt-2">May 9, 2026 · Kottayam</p>
        </motion.div>
      </section>

      {/* ── TRAVEL ────────────────────────────────────────────────────────────── */}
      <section id="travel" className="py-20 lg:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeading title="Travel" subtitle="Everything you need to join us in beautiful Kottayam" />

          {/* How to reach */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20">
            {travelOptions.map(({ Icon, title, desc }, i) => (
              <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.6 }}
                className="p-6 lg:p-8 rounded-lg border border-border/50 bg-card text-center">
                <Icon className="w-6 h-6 text-primary mx-auto mb-4" />
                <h3 className="font-display text-xl font-light text-foreground mb-3">{title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Map */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="rounded-lg overflow-hidden border border-border/50 mb-16 lg:mb-20">
            <div className="p-5 bg-card flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <h3 className="font-display text-xl font-light text-foreground">Manganam St. Peter's Mar Thoma Syrian Church</h3>
                <p className="font-body text-sm text-muted-foreground mt-1">Manganam, Kottayam, Kerala 686018</p>
              </div>
            </div>
            <div className="relative aspect-[16/9] md:aspect-[21/9]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3934.6324!2d76.5499!3d9.6053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b063b5c8a50e027%3A0x5b2c1e7c9f8d7a6!2sManganam%20St.%20Peter's%20Mar%20Thoma%20Syrian%20Church!5e0!3m2!1sen!2sin!4v1"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                title="Wedding venue location" className="w-full h-full" />
              <a
                href={CHURCH_MAP_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Open wedding venue in Google Maps"
                className="absolute inset-0 z-10"
              />
            </div>
          </motion.div>

          {/* Hotels */}
          {/* <p className="font-body text-xs tracking-[0.3em] uppercase text-primary text-center mb-8">Where to Stay</p>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {hotels.map((h, i) => (
              <motion.div key={h.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group p-6 lg:p-8 rounded-lg border border-border/50 bg-card hover:border-primary/20 hover:shadow-md transition-all duration-500">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="font-display text-xl lg:text-2xl font-light text-foreground mb-1">{h.name}</h4>
                    <div className="flex items-center gap-1.5 text-muted-foreground/80">
                      <MapPin className="w-3 h-3 text-primary/60" />
                      <span className="font-body text-xs">{h.dist}</span>
                    </div>
                  </div>
                  {h.rec && (
                    <div className="flex items-center gap-1 bg-accent/10 text-accent px-2.5 py-1 rounded-full">
                      <Star className="w-3 h-3 fill-accent" />
                      <span className="font-body text-[10px] tracking-wider uppercase font-medium">Recommended</span>
                    </div>
                  )}
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5">{h.desc}</p>
                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-border/50">
                  {h.price && <span className="font-body text-sm text-foreground font-medium">{h.price}</span>}
                  {h.phone && (
                    <a href={`tel:${h.phone}`} className="inline-flex items-center gap-1.5 font-body text-xs text-muted-foreground hover:text-primary transition-colors">
                      <Phone className="w-3 h-3" />{h.phone}
                    </a>
                  )}
                  {h.website && (
                    <a href={h.website} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-body text-xs text-primary hover:text-primary/80 transition-colors">
                      <Globe className="w-3 h-3" />Website
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div> */}
        </div>
      </section>

    </div>
  );
}

// ── EventCard subcomponent ────────────────────────────────────────────────────
function EventCard({ ev, align }) {
  return (
    <>
      <p className="font-body text-[10px] tracking-[0.2em] uppercase text-primary mb-1">{ev.date}</p>
      <h4 className={`font-display font-light text-foreground mb-2 ${ev.featured ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"}`}>
        {ev.title}
      </h4>
      <p className="font-body text-sm text-muted-foreground leading-relaxed mb-3">{ev.desc}</p>
      <div className={`flex flex-col gap-1.5 text-muted-foreground/70 ${align === "right" ? "items-end" : ""}`}>
        <span className="flex items-center gap-1.5 text-xs"><Clock className="w-3 h-3 text-primary/60" />{ev.time}</span>
        {ev.venueMapUrl ? (
          <a
            href={ev.venueMapUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${ev.venue} in Google Maps`}
            className="flex items-center gap-1.5 text-xs  decoration-primary/50 underline-offset-2 transition-colors hover:text-primary"
          >
            <MapPin className="w-3 h-3 text-primary/70" />
            {ev.venue}
          </a>
        ) : (
          <span className="flex items-center gap-1.5 text-xs">
            <MapPin className="w-3 h-3 text-primary/60" />
            {ev.venue}
          </span>
        )}
        {ev.secondaryVenueMapUrl ? (
          <a
            href={ev.secondaryVenueMapUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${ev.secondaryVenue} in Google Maps`}
            className="flex items-center gap-1.5 text-xs  decoration-primary/50 underline-offset-2 transition-colors hover:text-primary"
          >
            <MapPin className="w-3 h-3 text-primary/70" />
            {ev.secondaryVenue}
          </a>
        ) : ev.secondaryVenue ? (
          <span className="flex items-center gap-1.5 text-xs">
            <MapPin className="w-3 h-3 text-primary/60" />
            {ev.secondaryVenue}
          </span>
        ) : null}
      </div>
      {ev.featured && (
        <div className={`mt-3 ${align === "right" ? "flex justify-end" : ""}`}>
          <span className="inline-block font-body text-[10px] tracking-widest uppercase bg-primary/10 text-primary px-3 py-1.5 rounded-full">
            Main Ceremony
          </span>
        </div>
      )}
    </>
  );
}
