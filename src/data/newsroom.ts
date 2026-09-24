export interface NewsroomSample {
  type: string;
  content: string;
  points?: string[];
}

export const newsroomCampaign = "One campaign → multiple PR materials";
export const newsroomCampaignName = "Amara Vale — “Slow Bloom” (fictional campaign)";

export const newsroomIntro =
  "A working PR newsroom: the written materials a campaign runs on — press release, artist statement, media copy, talking points, captions — all speaking with one voice.";

export const newsroomSamples: NewsroomSample[] = [
  {
    type: "Press release",
    content:
      "Headline: Amara Vale returns with “Slow Bloom,” a study in patient growth\n\nNaga City — Independent artist Amara Vale today announces “Slow Bloom,” her first single in a year, arriving September 12 across all streaming platforms. Written between silence and return, the track marks a new chapter in Vale's songwriting — quieter, clearer, and fully her own.",
  },
  {
    type: "Artist statement",
    content:
      "“I spent a long time waiting to be ready. ‘Slow Bloom’ is about realizing growth doesn't announce itself — it just happens, quietly, until you notice. This song is me noticing.”",
  },
  {
    type: "Media copy",
    content:
      "After a year away, Amara Vale returns with “Slow Bloom” — a soft-spoken single about growing into yourself on your own timeline. Out September 12.",
  },
  {
    type: "Talking points",
    content: "",
    points: [
      "Why silence was part of the creative process",
      "What “slow growth” means to Amara personally",
      "The sonic shift toward a more stripped-back sound",
      "What she wants listeners to take away",
    ],
  },
  {
    type: "Social / media caption",
    content:
      "no rush. just roots. — “Slow Bloom,” out September 12. — Amara Vale",
  },
];
