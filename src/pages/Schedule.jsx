import SectionHeading from "../components/wedding/SectionHeading";
import TimelineEvent from "../components/wedding/TimelineEvent";
import DecorativeDivider from "../components/wedding/DecorativeDivider";

const events = [
  {
    date: "May 4, 2026",
    title: "The Engagement",
    description:
      "A joyful celebration as Ajay and Dona exchange rings and receive blessings from family and friends.",
    time: "Morning Ceremony",
    venue: "Kottayam, Kerala",
  },
  {
    date: "May 8, 2026",
    title: "Pre-Wedding Celebrations",
    description:
      "An evening of prayer, music, and togetherness as we prepare for the wedding day.",
    time: "Evening",
    venue: "Kottayam, Kerala",
  },
  {
    date: "May 9, 2026",
    title: "The Wedding Ceremony",
    description:
      "The holy matrimony of Ajay P Oommen and Dona Rachel Abey at the beautiful Manganam St. Peter's Mar Thoma Syrian Church. A sacred moment witnessed by our beloved community.",
    time: "Morning Ceremony",
    venue: "Manganam St. Peter's Mar Thoma Syrian Church, Kottayam",
    featured: true,
  },
  {
    date: "May 9, 2026",
    title: "Wedding Reception",
    description:
      "A grand celebration of love with food, music, and the warmth of family and friends.",
    time: "Afternoon",
    venue: "Kottayam, Kerala",
  },
];

export default function Schedule() {
  return (
    <div className="pt-24 lg:pt-32 pb-16 lg:pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="The Schedule"
          subtitle="A timeline of celebrations as we journey toward forever together"
        />

        <div className="mt-8">
          {events.map((event, i) => (
            <TimelineEvent
              key={i}
              event={event}
              index={i}
              isLast={i === events.length - 1}
            />
          ))}
        </div>

        <DecorativeDivider className="mt-12" />

        <p className="text-center font-display text-lg italic text-muted-foreground">
          "For where your treasure is, there your heart will be also."
        </p>
        <p className="text-center font-body text-xs text-muted-foreground/60 mt-2 tracking-widest uppercase">
          Matthew 6:21
        </p>
      </div>
    </div>
  );
}