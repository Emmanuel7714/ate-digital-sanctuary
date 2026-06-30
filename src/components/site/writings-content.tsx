import hoodedImg from "@/assets/hooded-window.jpg.asset.json";
import nightWatchmanImg from "@/assets/night-watchman.jpg.asset.json";
import introvertImg from "@/assets/introvert-growth.jpg.asset.json";
import twelveMonthsImg from "@/assets/twelve-months.jpg.asset.json";
import prayerImg from "@/assets/prayer-fellowship.jpg.asset.json";
import destinyImg from "@/assets/destiny-victim.jpg.asset.json";
import darknessImg from "@/assets/darkness-to-light.jpg.asset.json";
import heartImg from "@/assets/heart-conscience.jpg.asset.json";
import truthVoiceImg from "@/assets/truth-voice.jpg.asset.json";
import cyberThrillImg from "@/assets/cyber-thrill.jpg.asset.json";
import interviewPortraitImg from "@/assets/interview-portrait.jpg.asset.json";
import interviewScreenImg from "@/assets/interview-screen.jpg.asset.json";

export type WritingParagraph =
  | string
  | { quote: string }
  | { heading: string }
  | { verse: string; ref?: string }
  | { stanza: string[] }
  | { image: { url: string; alt: string } };

export interface Writing {
  slug: string;
  title: string;
  kicker: string;
  excerpt: string;
  date: string;
  image?: { url: string; alt: string };
  paragraphs: WritingParagraph[];
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
    image: { url: introvertImg.url, alt: "A pensive young man by a window, reflecting on growth beyond introversion" },
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
    image: { url: hoodedImg.url, alt: "A hooded figure at a desk by a window, quietly watching" },
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
    image: { url: nightWatchmanImg.url, alt: "Late-night focus before glowing monitors — the work behind ambition" },
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
  {
    slug: "twelve-months-of-becoming",
    title: "Twelve Months of Becoming",
    kicker: "Poetry · Faith",
    date: "2026",
    excerpt: "This year did not just make me strong — it taught me where I truly belong.",
    image: { url: twelveMonthsImg.url, alt: "A lone figure walking a lantern-lit path through changing seasons" },
    paragraphs: [
      { stanza: ["This year came heavy, no warning sign,", "Questions loud, peace hard to find.", "I walked in hope but guarded too,", "Afraid of pain, afraid of \u201Cnew.\u201D"] },
      { stanza: ["I learned that faith is more than sound,", "It\u2019s standing still on shaking ground.", "When prayers felt dry, when fire was low,", "I stayed with God \u2014 and He stayed close."] },
      { stanza: ["I fell, I rose, I checked my heart,", "Learned grace is not a perfect start.", "Freedom grew where truth was faced,", "Not in speed, but steady pace."] },
      { stanza: ["Books and tests, late nights alone,", "Dreams of futures yet unknown.", "I doubted strength, I feared delay,", "Still showed up day by day."] },
      { stanza: ["I learned to lead with trembling hands,", "To intercede, to take my stand.", "To carry others while unsure", "If I myself was fully sure."] },
      { stanza: ["Some voices stayed, some walked away,", "Some taught me what not to say.", "I learned not all goodbyes mean loss,", "Some are paths that gently cross."] },
      { stanza: ["I danced in praise, I cried in prayer,", "Found God faithful everywhere.", "Not in noise, not in the flame,", "But quiet strength that knew my name."] },
      { stanza: ["Now at the edge of closing time,", "I look back healed, though marked by signs.", "Not all I hoped, not all I planned,", "But more than I could understand."] },
      { stanza: ["I step ahead, not rushed, not late,", "Aligned with God, not chasing fate.", "This year did not just make me strong\u2014", "It taught me where I truly belong."] },
    ],
  },
  {
    slug: "my-quote-on-prayer",
    title: "On Prayer",
    kicker: "Reflection",
    date: "2026",
    excerpt: "The moment you can willfully and effortlessly stop praying, it means that you have not yet journeyed deeply enough.",
    image: { url: prayerImg.url, alt: "Hands clasped in prayer beneath a shaft of golden light" },
    paragraphs: [
      { quote: "The moment you can willfully and effortlessly stop praying, it means that you have not yet journeyed deeply enough." },
      "Prayer is an addictive journey of fellowship with God. It often requires a deliberate detachment because true encounters in prayer rarely end with complete satisfaction.",
      "Instead, they leave holy burdens, fresh desires, and a yearning in your heart that pulls you back to His presence at the nearest opportunity.",
    ],
    closing: "Adeniji Taiwo Emmanuel · 2026 A.D.",
  },
  {
    slug: "destiny-the-victim",
    title: "Destiny — The Victim",
    kicker: "Reflection",
    date: "2026",
    excerpt: "People have painted a false picture of destiny. Poor Destiny — white, yet painted black by humanity.",
    image: { url: destinyImg.url, alt: "A lone figure standing under a shaft of divine light breaking through dark clouds" },
    paragraphs: [
      "People have painted a false picture of destiny.",
      "Humans, imperfect and often unwilling to take responsibility, quickly blame their flaws on anything but themselves. And so, poor Destiny becomes the victim.",
      "Oh, poor \u201CDestiny,\u201D wishing it was never a word in the first place\u2014white, yet painted black by humanity.",
      { heading: "Destiny says:" },
      { quote: "I am a structured pathway, ordained by the Creator (God) for mankind." },
      "Man replies, \u201COh, okay\u2026\u201D",
      { heading: "Destiny continues:" },
      { quote: "But even though I am divinely designed, I am still influenced and determined by the choices or will of men. Yet when people choose something different from God\u2019s plan (ME), and face the consequences of their own decisions, they still blame me. How hateful!" },
    ],
  },
  {
    slug: "from-darkness-to-light",
    title: "From Darkness to Light",
    kicker: "Testimony",
    date: "2026",
    excerpt: "I was a slave to sin. Then I met God in late August of 2024 — and everything began to change.",
    image: { url: darknessImg.url, alt: "A chained figure stepping out of darkness toward a radiant cross of light" },
    paragraphs: [
      "I was a child \u2014 innocent, but sinful. Yes, I knew the difference between good and bad, between right and wrong, but I had no urge to always choose good or right.",
      "Like everyone else, I was born a sinner:",
      { verse: "Behold, I was shapen in iniquity; and in sin did my mother conceive me.", ref: "Psalm 51:5 (KJV)" },
      "The attachment between my soul and the world was well-defined. I was a slave to sin \u2014 known for lies. My parents would beat and scold me, but it always amounted to nothing. From a very tender age, I was already into immorality. I loved the world; I was so vulnerable to the devil, and yes, he used me while he had the chance.",
      "He was set on destroying my life, to kill me \u2014 and yes, he stole from me:",
      { verse: "The thief cometh not, but for to steal, and to kill, and to destroy\u2026", ref: "John 10:10a (KJV)" },
      "I was a slave to lust. Womanizing was my zeal, goal, and talent. Watching pornography was my hobby, which led me into masturbation. I was so intimate with these acts. It wasn\u2019t long before I discovered how deeply I was in these things. Yet my innocent soul kept on crying and hoping I\u2019d conquer the demonic possessions and oppressions in my life.",
      "Sometimes I\u2019d think deeply and realize how doomed my life was, but just before I could think a little deeper, the devil would steal my consciousness from me.",
      "My obsession with worldly/secular music didn\u2019t help me either. I idolized some singers, made them my gods, and embraced their music like it was all I had. Yes, not all secular songs speak immorally, but I tell you the truth \u2014 any song that is not a vessel of God or doesn\u2019t preach God's holiness can definitely be used by the devil. The devil roams around looking for vessels to use:",
      { verse: "Be sober, be vigilant; because your adversary the devil, as a roaring lion, walketh about, seeking whom he may devour.", ref: "1 Peter 5:8 (KJV)" },
      "Music is followed by a spirit \u2014 either of God or of the devil. These songs quenched the fading ashes of fire I received from house fellowships, church, and parental advice.",
      "My life was so messed up \u2014 oh, so messed up. I got into things I couldn\u2019t recover from. The devil was so determined to kill God\u2019s will in my life.",
      "But then I met God in late August of 2024. I accepted Christ. I started growing urges to worship Him. Like magic, I started losing interest in worldly attachments. That process was glorious and miraculous. As the devil fought back and tried to control me, so did I get loosed from him again.",
      "The devil would cause me to have immoral chats today; I\u2019d lose interest in them and rebuke them tomorrow. That\u2019s how I conquered each and every evil act I was into.",
      "The devil took certain vessels personally \u2014 pornography and masturbation were the strongest. Even when I said no to lust, these two still pulled me back to the devil.",
      "But God is God. He helped me conquer all of these things. It was never by my own power or might:",
      { verse: "For if ye live after the flesh, ye shall die: but if ye through the Spirit do mortify the deeds of the body, ye shall live.", ref: "Romans 8:13 (KJV)" },
      { verse: "Not by might, nor by power, but by my spirit, saith the Lord of hosts.", ref: "Zechariah 4:6b (KJV)" },
      "His Spirit was \u2014 and is \u2014 indeed bestowed upon my life.",
      "I never deserved salvation. He granted it through His love and grace:",
      { verse: "For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: Not of works, lest any man should boast.", ref: "Ephesians 2:8\u20139 (KJV)" },
      "I owe Him my whole life. I will worship Him forever and ever. All the glory must be unto the Lord of Hosts.",
      { heading: "The Call" },
      "Remember how the devil found all means to destroy me \u2014 and remember how God saved me from the devil. He is ready to save every soul that is a slave to the devil or addicted to the devil\u2019s vessels.",
      "I\u2019d be a fool to worship God and ignore how the world is suffering in the devil\u2019s hands.",
      "The truth is that people are crying in pain, waiting for God\u2019s masterpiece \u2014 like me \u2014 to arise:",
      { verse: "For we are his workmanship, created in Christ Jesus unto good works, which God hath before ordained that we should walk in them.", ref: "Ephesians 2:10 (KJV)" },
      "They are waiting for someone to go into the world and obey the Great Commission:",
      { verse: "Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost: Teaching them to observe all things whatsoever I have commanded you\u2026", ref: "Matthew 28:19\u201320 (KJV)" },
      "Yes, I love God, and I\u2019m ready to work for Him. In fact, I\u2019ve been working for Him for a year now. But all I\u2019ve come to realize is how the devil has been plotting \u2014 even when I\u2019m saved, he tries to frustrate me by the things I see in the world.",
      "When I see and think about how the thief has manifested in souls, I cry in pain and plead with the Most High to grant me the grace to be used to save this generation.",
      "That I shall be a powerful tool of His \u2014 a vessel of light in this dark generation:",
      { verse: "Ye are the light of the world. A city that is set on an hill cannot be hid.", ref: "Matthew 5:14 (KJV)" },
      "We are in a generation where \u201Cgood\u201D is now regarded as \u201Cweird,\u201D and \u201Cbad\u201D is seen as the \u201Cnorm.\u201D How do I bring people\u2019s minds into the realization and consciousness of truth?",
      "Then I learned this: no man can be saved by just his fellow man \u2014 but only by God.",
      { verse: "I, even I, am the Lord; and beside me there is no saviour.", ref: "Isaiah 43:11 (KJV)" },
      { verse: "Neither is there salvation in any other: for there is none other name under heaven given among men, whereby we must be saved.", ref: "Acts 4:12 (KJV)" },
      "If the world was too bad to be saved or revived, God wouldn\u2019t bother raising men \u2014 or even sending His Son to die for us. But He did. All, that we might believe and be saved.",
      "I am a vessel of God. I love my neighbor \u2014 but God loves them more. So I trash all my ideas and tactics, and I wait to hear and be led by the One who created us all.",
      "This motive has been helping me \u2014 and I keep on being used by God.",
      { heading: "Final Words" },
      "Jesus still saves.",
      "The Spirit still empowers.",
      "The Father still loves.",
      { quote: "If He did it for me, He can do it for you too." },
    ],
    closing: "~ Adeniji Taiwo Emmanuel",
  },
  {
    slug: "right-and-wrong-live-in-the-heart",
    title: "Right and Wrong Live in the Heart",
    kicker: "Faith · Reflection",
    date: "2026",
    excerpt: "Truth has been written on man\u2019s heart since Eden. You already know what\u2019s right. Just do it.",
    image: { url: heartImg.url, alt: "A glowing heart radiating light in darkness — conscience as inner witness" },
    paragraphs: [
      "You don\u2019t need to flip through Exodus 20 before you know lying is wrong\u2026 or that envy poisons the soul.",
      "Why? Because conscience exists. That silent judge within \u2014 it speaks. Loudly.",
      "So when someone says: \u201CI didn\u2019t know yahoo was bad \u2014 it\u2019s not clearly in the Bible,\u201D or, \u201CWhere did the Bible say guys shouldn\u2019t wear female dresses?\u201D \u2014 let\u2019s be honest\u2026",
      "You knew. You know. They all know.",
      "Truth has been written on man\u2019s heart since Eden. Ever since Adam and Eve ate from the tree of the knowledge of good and evil \u2014 man has known.",
      "So when people argue: \u201CWhere is it in the Bible that says don\u2019t drink, smoke, club, or vibe to worldly music?\u201D \u2014 the truth is, deep down, they\u2019re not looking for answers. They\u2019re looking for excuses. To justify darkness. To silence their own conscience.",
      { heading: "But hear this" },
      "Evolution is no excuse. Sins don\u2019t evolve \u2014 they originate.",
      "Yahoo is simply theft. No matter how digital or flashy it looks. Sin is sin, and truth is truth.",
      { quote: "Before you argue, before you twist Scriptures for convenience\u2026 search your heart. You already know what\u2019s right. Just do it." },
    ],
  },
  {
    slug: "when-truth-loses-her-voice",
    title: "When Truth Loses Her Voice",
    kicker: "Poetry",
    date: "2025",
    excerpt: "For in the end, it's love that stays, long after pride has had its days.",
    image: { url: truthVoiceImg.url, alt: "Two silhouettes meeting in soft mist with a dove of light between them" },
    paragraphs: [
      { stanza: ["In the garden where truth was meant to grow,", "We plant our pride and let it show.", "What once was talk to seek the light,", "Turns battlefield in darkest night."] },
      { stanza: ["A voice speaks soft, a thought laid bare,", "But egos rise and fill the air.", "Instead of yielding to what's right,", "We armor up and start to fight."] },
      { stanza: ["Some truths are clear, yet hearts resist,", "They'd rather clench a stubborn fist.", "Not every clash should birth a war,", "But silence knocks on reason's door."] },
      { stanza: ["What use is winning, if we fall,", "And leave behind no peace at all?", "To chase a crown and lose the way,", "Is not a price the wise will pay."] },
      { stanza: ["So let us speak with calmer tone,", "And seek the truth, not thrones alone.", "For in the end, it's love that stays,", "Long after pride has had its days."] },
    ],
    closing: "Adeniji Taiwo Emmanuel · 2025",
  },
  {
    slug: "what-thrills-me-about-cybersecurity",
    title: "What Thrills Me About Cybersecurity",
    kicker: "Cybersecurity",
    date: "2026",
    excerpt: "I used to dream of being in the military. Dreams evolved \u2014 now I fight in the digital realm.",
    image: { url: cyberThrillImg.url, alt: "A focused analyst at a wall of glowing blue monitors deep at work" },
    paragraphs: [
      "Many may ask what thrills me about cybersecurity.",
      "How I can sit 8+ hours on my laptop, diving into courses, practicing ethical hacking, and hunting for internships \u2014 time disappears, focus sharpens, adrenaline rises. It\u2019s an interest words can\u2019t capture.",
      "I used to dream of being in the military \u2014 of catching the bad guys, being the hero, and using my \u201Cdetective superpower\u201D to expose them. I always imagined I was the One Main Man for the mission.",
      "But dreams evolve. I discovered I could be all I wanted \u2014 not on a battlefield, but in the digital realm.",
      "Now, I fight cyber fraud, malware, and online threats. I aim to restore broken systems, protect the innocent, and make a global impact.",
      { quote: "The thrill is real. The mission is set. The time? Now." },
    ],
  },
  {
    slug: "my-first-cybersecurity-interview",
    title: "My First Cybersecurity Interview: From Tension to Confidence",
    kicker: "Cybersecurity · Personal",
    date: "2026",
    excerpt: "Preparation, persistence, and focus under pressure can turn nervous energy into performance.",
    image: { url: interviewPortraitImg.url, alt: "Adeniji Taiwo Emmanuel \u2014 portrait before the interview" },
    paragraphs: [
      "I won\u2019t lie \u2014 when my first online cybersecurity interview started, I was tense, a little sweaty, and full of butterflies. My heart was racing, and I had to take a deep breath to steady myself.",
      { image: { url: interviewScreenImg.url, alt: "The live interview screen \u2014 Mercor assessment in progress" } },
      "But as the conversation progressed, I gained confidence, stayed focused, and didn\u2019t lose my gaze. Each question was a chance to showcase what I\u2019ve learned in ethical hacking, network analysis, and threat defense, and I gave it my all.",
      "By the end, I realized something important: preparation, persistence, and keeping your focus even under pressure can turn nervous energy into performance. Today, I stepped out of my comfort zone and into growth.",
      { quote: "This is just the beginning, and I\u2019m more motivated than ever to defend digital spaces and keep learning." },
    ],
  },
];

export function getWriting(slug: string): Writing | undefined {
  return WRITINGS.find((w) => w.slug === slug);
}