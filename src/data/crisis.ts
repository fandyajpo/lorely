export interface CrisisStep {
  label: string;
  text: string;
  points?: string[];
}

export const crisisIntro =
  "Crisis PR isn't just writing an apology. It's protect the artist → protect credibility → maintain trust → recover reputation.";

export const crisisScenario =
  "An artist's interview response is interpreted negatively online.";

export const crisisSteps: CrisisStep[] = [
  {
    label: "Situation",
    text: "An artist's interview response is interpreted negatively online.",
  },
  {
    label: "Immediate priority",
    text: "Verify what happened before responding.",
  },
  {
    label: "Stakeholders",
    text: "",
    points: ["Artist", "Management", "Fans", "Media", "General public"],
  },
  {
    label: "Response",
    text: "Assess → align → respond → monitor.",
  },
];

export const holdingStatement =
  "“We're aware of the discussion around the artist's recent interview. The comments are being reviewed in full context, and we will share a considered response once verified. We appreciate the patience of fans and media alike.”";

export const artistGuidance = {
  do: [
    "Pause and let the team verify the full context first",
    "Keep communication with management open",
    "Stay off further commentary until a direction is agreed",
  ],
  dont: [
    "Don't argue with users or subtweet the situation",
    "Don't issue a personal apology before alignment",
    "Don't delete or edit the original material quietly",
  ],
};

export const recoveryItems = [
  {
    name: "Reputation recovery",
    description:
      "After the immediate crisis: reflect internally, correct the narrative gradually through consistent action, and rebuild attention with work rather than words.",
  },
  {
    name: "Holding statement",
    description:
      "A short, factual first word — what is known, what is being verified, and when more will follow.",
  },
  {
    name: "Artist & media guidance",
    description:
      "Clear do-and-don't direction for the artist and coordinated guidance for media while the situation develops.",
  },
];
