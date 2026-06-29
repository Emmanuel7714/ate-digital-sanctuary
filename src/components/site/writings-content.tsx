import hoodedImg from "@/assets/hooded-window.jpg.asset.json";
import nightWatchmanImg from "@/assets/night-watchman.jpg.asset.json";

export interface Writing {
  slug: string;
  title: string;
  kicker: string;
  excerpt: string;
  date: string;
  image?: { url: string; alt: string };
  paragraphs: (string | { quote: string } | { heading: string })[];
  closing?: string;
}

export const WRITINGS: Writing[] = [
  {
    slug: "is-being-an-introvert-real",
    title: "Is \"being an introvert\" real, or is it just a limiting mindset?",
    kicker: "Personal Growth",
    date: "2026",
    excerpt:
      "I held tightly to the label \"introvert.\" It gave me comfort — until it became a limitation I had to outgrow.",
    image: { url: hoodedImg.url, alt: "A quiet, contemplative portrait by a window" },
    paragraphs: [
      "When I first got admitted into the University of Benin last year, I struggled a lot with social interaction. I found it difficult to relate with people or even start conversations.",
      "The interesting thing was—if someone managed to get past my quiet and unresponsive nature, I would eventually become very free, friendly, and expressive. Only those close to me really knew that I actually loved talking, addressing issues, and could even be quite playful and outspoken at times.",
      "Back then, I held tightly to the label \"introvert.\"",
      "It gave me comfort. It made me feel like I wasn't alone—that there were others like me.",
      "But over time, that label stopped being a description and became a limitation.",
      "Even in moments where I could speak up, I would hold back and tell myself, \"I'm an introvert, this isn't for me.\"",
      "It gradually became a lifestyle.",
      "Everything changed when I became a leader in my fellowship.",
      "I realized something important: leadership demands expression, communication, and connection. Staying silent no longer made sense.",
      "That experience forced me to confront the limits I had placed on myself.",
      "And I began to grow.",
      "I started learning how to socialize intentionally. I stepped out of my comfort zone. I spoke more, engaged more, and connected more.",
      "And the truth is—I've gained so much from it.",
      "Now I see things differently.",
      "Maybe being an introvert is real, but it should never be used as an excuse to stay small or avoid growth.",
      { quote: "Sometimes, what we call \"personality\" is actually just a mindset we've outgrown." },
    ],
  },
  {
    slug: "the-digital-night-watchman",
    title: "The Digital Night Watchman",
    kicker: "Cybersecurity",
    date: "2026",
    excerpt:
      "The best security doesn't always look like a high-tech control room. Most of the time, it looks a lot like sitting in the quiet, watching, and waiting.",
    image: { url: nightWatchmanImg.url, alt: "A hooded figure at a desk before glowing monitors at night" },
    paragraphs: [
      "The best security doesn't always look like a high-tech control room with glowing green code. Most of the time, it looks a lot like this: sitting in the quiet, watching, and waiting.",
      "When I first started diving into cybersecurity, I realized it's a lot like being a digital night watchman. While everyone else is sleeping or scrolling, someone has to be the one looking out the window, checking the locks, and making sure the shadows stay where they belong. It's a strange mix of patience and sudden, intense focus.",
      "You don't need to know how to write a script or understand a firewall to know the feeling of wanting to keep your space safe. We all have things worth protecting—whether it's a photo, a bank account, or just a private conversation.",
      "In a world that's moving faster than we can sometimes keep up with, I've chosen to be the guy who stays back a bit, keeps his head down, and makes sure the doors are bolted. It's not about being \"techy\" for the sake of it; it's about making sure that the digital world stays a safe place for the rest of us to live in.",
    ],
  },
  {
    slug: "the-urge-to-pursue-success",
    title: "The Powerful Urge That Drives One to Pursue Success",
    kicker: "Ambition",
    date: "2026",
    excerpt:
      "When do you see yourself accomplishing all that you've always envisioned? Whatever your answer is, it depends on how big your vision is — and how much work you're willing to put in.",
    paragraphs: [
      "Let me ask you a brief but ambitious question:",
      { quote: "When do you see yourself accomplishing all that you've always envisioned?" },
      "Whatever your answer is, it is determined by two major things: how big your vision is, and how much work you are willing to put into it.",
      "I may not know how large your vision is, but I can speak about the work required.",
      "A few weeks ago, I was studying the Introduction to Cybersecurity course on Cisco before earning my certificate. The course was designed to take an average of 30–35 hours of study — typically 2 to 3 weeks for a student like me.",
      "But I completed it thoroughly in just 4 days.",
      { heading: "How?" },
      "I invested more hours than usual. I sacrificed sleep. I gave it focused attention.",
      "We're talking about ambition here. It would be abnormal to claim ambition without feeling that mighty urge pushing your entire system to comply with discipline and hard work.",
      "Many students say: \"My plans are big.\" \"I'll establish a large firm.\" \"I'll become a successful business owner.\"",
      "But without action, these words remain dreams — or become achievements that arrive late.",
      { heading: "If you truly want it" },
      "Burn the candle at night. Make sacrifices. Network. Study deeply. Spend hours refining your craft.",
      "See tomorrow as your day of accomplishment — so you work today like it depends on it.",
      "I hope this helped. God bless my listeners 😌🤲✨",
    ],
    closing: "~ Emmanuel ✨",
  },
];

export function getWriting(slug: string): Writing | undefined {
  return WRITINGS.find((w) => w.slug === slug);
}