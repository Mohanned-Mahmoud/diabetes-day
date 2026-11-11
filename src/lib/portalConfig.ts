/**
 * Configuration for the embedded external website portal.
 * Linked to the Tawazonha BMI Application.
 */
export const PORTAL_CONFIG = {
  defaultUrl:
    process.env.NEXT_PUBLIC_PORTAL_URL ||
    'https://bmi-app-link.vercel.app/',
  defaultTitle:
    process.env.NEXT_PUBLIC_PORTAL_TITLE ||
    'حاسبة مؤشر كتلة الجسم — توازنها صح',
  fallbackUrls: [
    'https://bmi-app-link.vercel.app/',
    'https://tawazonha.com',
  ],
};
