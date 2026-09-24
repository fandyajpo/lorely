export interface FeaturedService {
  number: string;
  name: string;
  tagline: string;
  overview: string;
  funnel: string[];
  messageDevelopment: {
    flow: string[];
    bullets: string[];
  };
  example: {
    caseLabel: string;
    steps: {
      label: string;
      text: string;
      points?: string[];
    }[];
  };
  interviewPrep: {
    deliverables: string[];
    scenario: string;
    question: string;
    steps: { label: string; title: string; text: string; points?: string[] }[];
  };
  contrast: { wrong: string; right: string };
}

export const featuredService: FeaturedService = {
  number: "01",
  name: "My PR Direction",
  tagline: "Helping artists find their voice — without rewriting it.",
  overview:
    "Artists have the tendency to shy away from the mic, shy away from the question, and even shy away from their own answers — not because they don't have something to say, but because sometimes the challenge is translating what they already think and feel into an answer they can confidently communicate. That is the gap which I strive to bridge.",
  funnel: ["Awareness", "Credibility", "Action"],
  messageDevelopment: {
    flow: ["Creative concept", "Message", "Talking points", "Audience"],
    bullets: [
      "Artist positioning",
      "Key-message development",
      "Concept-to-language showcase",
    ],
  },
  example: {
    caseLabel: "Case: Artist preparing for a comeback interview",
    steps: [
      {
        label: "Raw idea",
        text: "“This comeback is about growing and being more confident.”",
      },
      {
        label: "PR message",
        text: "“This comeback represents the artist's transition from seeking approval to becoming comfortable with their own identity.”",
      },
      {
        label: "Key message",
        text: "Growth doesn't mean becoming someone new — it means becoming more confident in who you already are.",
      },
      {
        label: "Talking points",
        text: "",
        points: [
          "What changed since the previous era?",
          "What did the artist learn?",
          "What do they want fans to take away?",
          "How does the concept reflect their growth?",
        ],
      },
    ],
  },
  interviewPrep: {
    deliverables: [
      "Interview brief",
      "Key messages",
      "Talking points",
      "Likely / difficult questions",
      "Answer directions",
      "Media preparation",
    ],
    scenario: "Comeback press interview",
    question: "“What makes this comeback different from your previous work?”",
    steps: [
      {
        label: "01 — Interview brief",
        title: "",
        text: "Purpose: introduce the comeback's concept and artistic growth.",
      },
      {
        label: "02 — Key message",
        title: "",
        text: "This comeback represents a new stage of confidence.",
      },
      {
        label: "03 — Talking points",
        title: "",
        text: "",
        points: [
          "Personal growth",
          "Musical development",
          "Concept inspiration",
          "Connection with fans",
        ],
      },
      {
        label: "04 — Difficult follow-up",
        title: "",
        text: "“So are you saying you weren't confident before?”",
      },
      {
        label: "05 — Answer direction",
        title: "",
        text: "Don't give the artist a robotic scripted answer. Instead: acknowledge → clarify → redirect → then show an example answer.",
      },
    ],
  },
  contrast: {
    wrong: "Memorize this exact answer.",
    right: "Understand the message → know the talking points → respond naturally.",
  },
};
