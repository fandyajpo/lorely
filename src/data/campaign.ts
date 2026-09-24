export interface CampaignStep {
  label: string;
  text: string;
  points?: string[];
}

export const campaignIntro =
  "Strategic planning is how I think out loud before anything goes public — research, objectives, target publics, strategy, tactics, and evaluation, in that order.";

export const campaignCaseLabel =
  "Case study: Building anticipation for an artist's comeback";

export const campaignSteps: CampaignStep[] = [
  {
    label: "Situation",
    text: "Artist has a strong existing fanbase but needs broader public awareness.",
  },
  {
    label: "Objective",
    text: "Increase awareness beyond existing fans while strengthening the artist's positioning.",
  },
  {
    label: "Target publics",
    text: "",
    points: [
      "Existing fans",
      "Casual listeners",
      "Entertainment media",
      "Potential new audiences",
    ],
  },
  {
    label: "Strategy",
    text: "Position the comeback around the artist's specific story and theme, rather than relying solely on promotional content.",
  },
  {
    label: "Tactics",
    text: "",
    points: [
      "Media interviews",
      "Behind-the-scenes content",
      "Press release",
      "Creator / media outreach",
      "Artist talking points",
    ],
  },
  {
    label: "Measurement",
    text: "",
    points: [
      "Media mentions",
      "Reach",
      "Engagement",
      "Interview pickup",
      "Audience sentiment",
    ],
  },
];
