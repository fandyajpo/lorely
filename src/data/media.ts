export interface NamedItem {
  name: string;
  description: string;
}

export interface Step {
  number: string;
  title: string;
  text: string;
}

export const mediaIntro =
  "Media relations is the working relationship between a story and the people who tell it for a living. I manage journalist and industry relationships with care — the right pitch, to the right person, properly briefed and respectfully followed up.";

export const mediaSubServices: NamedItem[] = [
  {
    name: "Journalist & industry relationships",
    description:
      "Long-term relationship building — staying in touch beyond the ask, so when a story lands, the trust is already there.",
  },
  {
    name: "Media pitching",
    description:
      "Targeted pitches matched to a journalist's beat and recent work — never mass blasts. Each pitch carries a clear angle, ready assets, and a reason to care now.",
  },
  {
    name: "Media advisory",
    description:
      "Short, factual advisories that give outlets the who, what, when, and where they need to decide on coverage quickly.",
  },
  {
    name: "Interview coordination",
    description:
      "Scheduling, logistics, and briefing on both sides so the interview happens smoothly and the artist arrives prepared.",
  },
  {
    name: "Media briefing",
    description:
      "Structured briefings that align everyone on message, timing, and boundaries before cameras roll.",
  },
  {
    name: "Press conference preparation",
    description:
      "Run-of-show, Q&A preparation, holding statements, and on-site coordination for high-attention moments.",
  },
];

export const mediaProcess: Step[] = [
  {
    number: "01",
    title: "Identify",
    text: "Which media and publications are relevant?",
  },
  {
    number: "02",
    title: "Match",
    text: "Which journalists or outlets are appropriate for the story?",
  },
  {
    number: "03",
    title: "Pitch",
    text: "What makes this story worth covering?",
  },
  {
    number: "04",
    title: "Prepare",
    text: "What information, assets, and talking points do they need?",
  },
  {
    number: "05",
    title: "Coordinate",
    text: "Interview schedule · media briefing · logistics",
  },
  {
    number: "06",
    title: "Follow through",
    text: "Coverage monitoring · relationship maintenance · results",
  },
];

export const pitchSample = {
  context: "Artist comeback → media coverage",
  subject: "Subject: Amara Vale explores quiet reinvention in new single “Slow Bloom”",
  reasons: [
    {
      label: "Why this outlet?",
      text: "Their weekly emerging-artists column has covered intimate, lyric-driven releases like this one — the fit is editorial, not forced.",
    },
    {
      label: "Why this journalist?",
      text: "They wrote the profile on Amara's earlier EP and have shown sustained interest in artist-growth narratives.",
    },
    {
      label: "Why this story now?",
      text: "The single lands after a year of silence — the gap itself is the news, and the story is ready before release day.",
    },
  ],
  quote:
    "Effective media relations starts with knowing why a journalist should care.",
};
