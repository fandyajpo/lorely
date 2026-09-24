export interface QueueItem {
  number: string;
  title: string;
  type: string;
  status: "In Motion" | "Upcoming" | "In Progress" | "Ongoing";
  description: string;
}

export const queue: QueueItem[] = [
  {
    number: "01",
    title: "Debut EP Rollout",
    type: "Artist Relations",
    status: "In Motion",
    description:
      "Full-cycle communications for an independent artist's first EP — narrative, press assets, and interview strategy.",
  },
  {
    number: "02",
    title: "Season Press Day",
    type: "Media Campaign",
    status: "Upcoming",
    description:
      "Coordinating a multi-brand press day with editors, stylists, and talent for the coming season.",
  },
  {
    number: "03",
    title: "Culture Brand Collaboration",
    type: "Brand Collaboration",
    status: "In Progress",
    description:
      "Positioning a creative brand collaboration at the intersection of music and fashion for regional media.",
  },
  {
    number: "04",
    title: "Showcase Week Communications",
    type: "Event Communication",
    status: "Ongoing",
    description:
      "Event narrative, guest communications, and post-show press for a week of live showcases.",
  },
];
