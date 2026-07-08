/** The services shown in the "What we treat" grid. Edit freely. */

export interface Service {
  title: string;
  description: string;
  /** Inline SVG markup for the card icon (40×40 viewBox). */
  icon: string;
}

export const services: Service[] = [
  {
    title: "Spinal adjustments",
    description:
      "Precise, gentle corrections for back and neck pain, stiffness, and headaches that start at the spine.",
    icon: `<circle cx="20" cy="10" r="4"/><circle cx="20" cy="20" r="4"/><circle cx="20" cy="30" r="4"/>`,
  },
  {
    title: "Sports injury care",
    description:
      "Sprains, strains, and overuse injuries — treated to get you back to training, not just back to baseline.",
    icon: `<path d="M8 26 L18 16 L24 22 L32 12" fill="none" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><circle cx="32" cy="12" r="3"/>`,
  },
  {
    title: "Prenatal chiropractic",
    description:
      "Safe, comfortable techniques that ease the low-back and pelvic pain of pregnancy, trimester by trimester.",
    icon: `<circle cx="20" cy="20" r="12" fill="none" stroke-width="3"/><circle cx="20" cy="20" r="4"/>`,
  },
  {
    title: "Posture & desk strain",
    description:
      "Relief for tech neck and desk-bound backs, plus ergonomic coaching so the pain doesn't come back Monday.",
    icon: `<path d="M12 32 V14 M12 14 Q12 8, 20 8 Q28 8, 28 14 V32" fill="none" stroke-width="3" stroke-linecap="round"/>`,
  },
  {
    title: "Soft tissue therapy",
    description:
      "Targeted muscle work that releases the tension holding your joints out of line — before and after adjustment.",
    icon: `<path d="M8 20 Q14 10, 20 20 T32 20" fill="none" stroke-width="3" stroke-linecap="round"/>`,
  },
  {
    title: "Rehab exercise plans",
    description:
      "Simple, progressive home exercises that build the strength to hold your adjustment between visits.",
    icon: `<path d="M10 30 L10 18 M20 30 L20 12 M30 30 L30 22" stroke-width="3" stroke-linecap="round"/>`,
  },
];
