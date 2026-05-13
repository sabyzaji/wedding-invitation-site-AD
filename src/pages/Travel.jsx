import { motion } from "framer-motion";
import { Plane, Car, Train, MapPin } from "lucide-react";
import SectionHeading from "../components/wedding/SectionHeading";
import HotelCard from "../components/wedding/HotelCard";
import DecorativeDivider from "../components/wedding/DecorativeDivider";

const TRAVEL_IMAGE = "https://media.base44.com/images/public/69d9c8995b8bcdc2adab7648/8076849a1_generated_9d5b275e.png";

const hotels = [
  {
    name: "Windsor Castle",
    distance: "3 km from venue",
    description:
      "A well-known hotel in Kottayam offering comfortable rooms, excellent dining, and warm hospitality.",
    price: "From ₹3,500/night",
    phone: "+91 481 256 3637",
    recommended: true,
  },
  {
    name: "Aida Hotel",
    distance: "2 km from venue",
    description:
      "A modern hotel with lake views and contemporary amenities, perfectly located near the town center.",
    price: "From ₹2,800/night",
    phone: "+91 481 256 8391",
  },
  {
    name: "Hotel Arcadia",
    distance: "4 km from venue",
    description:
      "A peaceful retreat surrounded by greenery, offering a serene atmosphere for your stay in Kottayam.",
    price: "From ₹2,200/night",
    phone: "+91 481 230 0500",
  },
  {
    name: "Taj Gateway Hotel",
    distance: "5 km from venue",
    description:
      "Premium hotel on the banks of Vembanad Lake, offering luxury accommodation and world-class service.",
    price: "From ₹6,000/night",
    website: "https://www.tajhotels.com",
    recommended: true,
  },
];

const travelOptions = [
  {
    icon: Plane,
    title: "By Air",
    description:
      "The nearest airport is Cochin International Airport (COK), approximately 90 km from Kottayam. Pre-paid taxis and private cars are available at the airport.",
  },
  {
    icon: Train,
    title: "By Train",
    description:
      "Kottayam Railway Station is well-connected to major cities across India. The station is just 4 km from the wedding venue.",
  },
  {
    icon: Car,
    title: "By Road",
    description:
      "Kottayam is well-connected by road via NH 183. Regular buses and taxis are available from Cochin, Trivandrum, and other cities.",
  },
];

export default function Travel() {
  return (
    <div className="pt-24 lg:pt-32 pb-16 lg:pb-24">
      {/* Hero */}
      <div className="relative h-[40vh] md:h-[50vh] mb-16 lg:mb-24 overflow-hidden">
        <img
          src={TRAVEL_IMAGE}
          alt="Scenic Kottayam Kerala landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-8">
          <div className="max-w-4xl mx-auto">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-foreground/80 mb-2">
              Getting There
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
              Travel & Stay
            </h1>
          </div>
        </div>
      </div>

      <div className="px-6">
        <div className="max-w-5xl mx-auto">
          {/* How to Reach */}
          <section className="mb-20 lg:mb-28">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4 text-center"
            >
              How to Reach Kottayam
            </motion.p>
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {travelOptions.map((option, i) => (
                <motion.div
                  key={option.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  className="p-6 lg:p-8 rounded-lg border border-border/50 bg-card text-center"
                >
                  <option.icon className="w-6 h-6 text-primary mx-auto mb-4" />
                  <h3 className="font-display text-xl font-light text-foreground mb-3">
                    {option.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {option.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Venue Map */}
          <section className="mb-20 lg:mb-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-lg overflow-hidden border border-border/50"
            >
              <div className="p-6 bg-card">
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-display text-xl font-light text-foreground">
                      Manganam St. Peter's Mar Thoma Syrian Church
                    </h3>
                    <p className="font-body text-sm text-muted-foreground mt-1">
                      Kottayam, Kerala 686018
                    </p>
                  </div>
                </div>
              </div>
              <div className="aspect-[16/9] md:aspect-[21/9]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3934.2!2d76.52!3d9.59!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMzUnMjQuMCJOIDc2wrAzMScxMi4wIkU!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Wedding venue location"
                  className="w-full h-full"
                />
              </div>
            </motion.div>
          </section>

          {/* Hotels */}
          {/* <section>
            <SectionHeading
              title="Where to Stay"
              subtitle="Comfortable accommodations near the wedding venue"
            />
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {hotels.map((hotel, i) => (
                <HotelCard key={hotel.name} hotel={hotel} index={i} />
              ))}
            </div>
          </section> */}

          <DecorativeDivider className="mt-16" />
        </div>
      </div>
    </div>
  );
}