export interface NamedItem {
  name: string;
  description: string;
}

export interface Phase {
  label: string;
  items: string[];
}

export const eventsIntro =
  "Events are communication moments with a clock on them. I handle the narrative before, the coordination during, and the follow-up after — so the event keeps working long after the room clears.";

export const eventTypes: NamedItem[] = [
  {
    name: "Concerts",
    description:
      "Announcement timing, press and guest coordination, and on-site media handling for live shows.",
  },
  {
    name: "Fan meets",
    description:
      "Attendance communications, controlled media access, and key messages that protect the artist–fan relationship.",
  },
  {
    name: "Busking / exhibits",
    description:
      "Grassroots visibility — turning a pop-up moment into a pitchable story.",
  },
  {
    name: "Award / industry events",
    description:
      "Red-carpet preparation, nominations narrative, and acceptance and backstage coordination.",
  },
  {
    name: "Press conferences",
    description:
      "Full preparation — run-of-show, Q&A, holding statements, and logistics.",
  },
  {
    name: "Media briefings",
    description:
      "Pre-event alignment for the journalists covering the moment.",
  },
  {
    name: "Partnerships / collaborations",
    description:
      "Shared narratives that serve both parties' audiences without diluting either.",
  },
  {
    name: "Internal events / communications",
    description:
      "Staff and stakeholder messaging that keeps everyone on the same page.",
  },
];

export const eventPhases: Phase[] = [
  {
    label: "Before",
    items: [
      "Media invitation",
      "Event announcement",
      "Artist preparation",
      "Key messages",
      "Media coordination",
    ],
  },
  {
    label: "During",
    items: [
      "Media briefing",
      "Interview coordination",
      "Artist support",
      "Real-time communication",
    ],
  },
  {
    label: "After",
    items: [
      "Press coverage",
      "Photo / media distribution",
      "Social amplification",
      "Sentiment monitoring",
      "Relationship follow-up",
    ],
  },
];

export const opportunityFlow = [
  "Event",
  "Story",
  "Media coverage",
  "Audience connection",
];

export const opportunityQuestion =
  "How can the event become more than an event?";
