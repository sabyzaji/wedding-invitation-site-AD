import { motion } from "framer-motion";
import { HelpCircle, CalendarDays, Plane, Gift } from "lucide-react";
import SectionHeading from "../components/wedding/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqCategories = [
  {
    icon: CalendarDays,
    title: "Event Details",
    faqs: [
      {
        q: "When and where is the wedding?",
        a: "The wedding ceremony will be held on May 9, 2026, at Manganam St. Peter's Mar Thoma Syrian Church, Kottayam, Kerala. The morning ceremony will be followed by a reception.",
      },
      {
        q: "What is the engagement date?",
        a: "The engagement ceremony will be held on May 4, 2026, in Kottayam. Details for the engagement venue will be shared closer to the date.",
      },
      {
        q: "What is the dress code?",
        a: "We encourage traditional Indian formal wear or elegant semi-formal attire. Think beautiful sarees, kurtas, or smart formal wear. Pastel and earthy tones are welcome!",
      },
      {
        q: "Can I bring a plus-one?",
        a: "We are happy to accommodate your partner! If you've received a named invitation, please RSVP for those named. If you'd like to bring a guest, do let us know.",
      },
      {
        q: "Will there be parking available?",
        a: "Yes, ample parking is available near the church and at the reception venue. Volunteers will be there to guide you.",
      },
    ],
  },
  {
    icon: Plane,
    title: "Travel & Stay",
    faqs: [
      {
        q: "What is the nearest airport?",
        a: "Cochin International Airport (COK) is the nearest airport, approximately 90 km from Kottayam. Pre-paid taxis are available at the airport.",
      },
      {
        q: "Are there hotel recommendations near the venue?",
        a: "Yes! We recommend Windsor Castle, Aida Hotel, Hotel Arcadia, and Taj Gateway Hotel. All are within 5 km of the venue. Visit our Travel page for full details and contact information.",
      },
      {
        q: "Is transportation provided from the hotel to the venue?",
        a: "We will arrange shuttle services from select hotels on the wedding day. Details will be shared closer to the event.",
      },
      {
        q: "How far is Kottayam Railway Station from the venue?",
        a: "Kottayam Railway Station is approximately 4 km from the wedding venue. Auto-rickshaws and taxis are readily available.",
      },
    ],
  },
  {
    icon: Gift,
    title: "Gifts & Registry",
    faqs: [
      {
        q: "Do you have a gift registry?",
        a: "Your presence is the greatest gift! However, if you wish to bless us with a gift, we have a small registry with a few meaningful items. Visit our Registry page for more details.",
      },
      {
        q: "Can I give cash as a gift?",
        a: "Cash gifts are absolutely welcome and appreciated. We will have a gift box available at the reception for cards and envelopes.",
      },
      {
        q: "Is there a specific charity you support?",
        a: "In lieu of gifts, contributions to the church's community fund or any children's education charity would be deeply meaningful to us.",
      },
    ],
  },
];

export default function FAQs() {
  return (
    <div className="pt-24 lg:pt-32 pb-16 lg:pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          title="Questions & Answers"
          subtitle="Everything you need to know about our wedding celebrations"
        />

        <div className="space-y-12 lg:space-y-16">
          {faqCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIdx * 0.1 }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <category.icon className="w-4.5 h-4.5 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-light text-foreground">
                  {category.title}
                </h3>
              </div>

              <Accordion type="single" collapsible className="space-y-2">
                {category.faqs.map((faq, faqIdx) => (
                  <AccordionItem
                    key={faqIdx}
                    value={`${catIdx}-${faqIdx}`}
                    className="border border-border/50 rounded-lg px-6 bg-card data-[state=open]:bg-card/80 transition-colors"
                  >
                    <AccordionTrigger className="font-body text-sm md:text-base text-foreground hover:no-underline py-5">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="font-body text-sm text-muted-foreground leading-relaxed pb-5">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}
        </div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 lg:mt-20 text-center p-8 lg:p-12 rounded-lg border border-border/50 bg-card"
        >
          <HelpCircle className="w-6 h-6 text-primary mx-auto mb-4" />
          <h3 className="font-display text-2xl font-light text-foreground mb-3">
            Still have questions?
          </h3>
          <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-md mx-auto">
            Feel free to reach out to us directly. We'd love to help make your
            visit to Kottayam as wonderful as possible.
          </p>
        </motion.div>
      </div>
    </div>
  );
}