/**
 * Practice details used across the site.
 * This is the ONLY file you need to edit to update contact info,
 * hours, or the practice name. Everything marked PLACEHOLDER
 * should be replaced with your real details.
 */

export interface OpeningHours {
  days: string;
  hours: string;
}

export interface SiteConfig {
  practiceName: string;
  doctorName: string;
  city: string;
  address: string[];
  mapsUrl: string;
  /** E.164 format, used for the tel: link */
  phone: string;
  /** Human-readable, shown on the button */
  phoneDisplay: string;
  email: string;
  openingHours: OpeningHours[];
  goodToKnow: string[];
  credentials: string[];
}

export const site: SiteConfig = {
  practiceName: "JF Chiropractic",
  doctorName: "Teddy", // PLACEHOLDER: your name
  city: "Bournemouth", // PLACEHOLDER: your city
  address: ["Bournemouth", "United Kingdom"], // PLACEHOLDER
  mapsUrl: "https://maps.google.com/?q=JF+Chiropractic+Bournemouth+UK", // PLACEHOLDER: your Maps listing
  phone: "+447700900000", // PLACEHOLDER
  phoneDisplay: "07700 900000", // PLACEHOLDER
  email: "hello@jfchiropractic.com", // PLACEHOLDER
  openingHours: [
    { days: "Mon – Thu", hours: "8:00 – 18:00" },
    { days: "Friday", hours: "8:00 – 14:00" },
    { days: "Saturday", hours: "9:00 – 12:00" },
    { days: "Sunday", hours: "Closed" },
  ], // PLACEHOLDER: your hours
  goodToKnow: [
    "No referral needed",
    "Most insurance plans accepted",
    "Free parking behind the building",
  ], // PLACEHOLDER: your details
  credentials: [
    "Doctor of Chiropractic, Palmer College",
    "Certified in prenatal (Webster) technique",
    "12+ years in practice",
  ], // PLACEHOLDER: your credentials
};
