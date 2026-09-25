export type AchievementType = "Achievement" | "Certificate";

export interface AchievementItem {
  label: string;
  type: AchievementType;
  issuer?: string;
  year?: string;
  description?: string;
  // File name inside client/public/achievements/. Omit to show a placeholder icon.
  image?: string;
}

// Add new achievements or certificates here; drop the image in client/public/achievements/.
export const achievements: AchievementItem[] = [
  {
    label: "Sirius Award for Best Techie 2023",
    type: "Achievement",
    issuer: "XEBIA IT Architects",
    year: "2023",
    description:
      "Honored for outstanding technical contributions, leadership excellence, and innovative solutions in mobile application development.",
  },
  {
    label: "Claude X-AI Practitioner",
    type: "Certificate",
    issuer: "SkillXpert × Xebia",
    description:
      "Completed the first milestone of the Quantum Shift - Claude X-AI Practitioner+ Program, recognizing practitioner-level competency in AI-native software engineering using Claude.",
    image: "cert.jpeg",
  },
];
