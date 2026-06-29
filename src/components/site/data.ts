export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/journey", label: "Journey" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/reflections", label: "Reflections" },
  { to: "/writings", label: "Writings" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export const IDENTITY = [
  "Believer.",
  "Cybersecurity Analyst.",
  "Technology Enthusiast.",
  "Leader.",
  "Geomatics Student.",
];

export const ABOUT_TOPICS = [
  { slug: "faith", title: "Faith", icon: "cross", body: "My identity in Christ comes first. Every value, decision, and relationship is rooted in the gospel." },
  { slug: "cybersecurity", title: "Cybersecurity", icon: "shield", body: "I protect what matters — analyzing threats, hardening systems, and pursuing security as stewardship." },
  { slug: "leadership", title: "Leadership", icon: "users", body: "I lead by serving — building people up, communicating clearly, and modeling integrity in every room." },
  { slug: "education", title: "Education", icon: "grad", body: "Studying Geomatics — mastering geospatial science, mapping technologies, and the data behind decisions." },
  { slug: "personal-growth", title: "Personal Growth", icon: "heart", body: "I pursue continuous learning, character formation, and the long, patient work of becoming." },
] as const;

export type AboutSlug = (typeof ABOUT_TOPICS)[number]["slug"];