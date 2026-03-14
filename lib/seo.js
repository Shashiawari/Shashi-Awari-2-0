const defaultSiteUrl = "https://shashipreetham.netlify.app";
const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || defaultSiteUrl;

export const siteUrl = rawSiteUrl ? rawSiteUrl.replace(/\/$/, "") : "";
export const personName = "Shashi Preetham Awari";
export const displayName = "Shashi Awari";

export const alternateNames = [
  "Shashi Awari",
  "Shashi Preetham",
  "Shashi Preetham Awari",
  "Awari Shashi Preetham",
  "AwariShashiPreetham",
];

export const siteDescription =
  "Portfolio of Shashi Preetham Awari, also known as Shashi Awari and Awari Shashi Preetham, a full-stack developer building modern websites, AI projects, machine learning solutions, and interactive digital experiences.";

export const siteKeywords = [
  "Shashi Preetham Awari",
  "Shashi Awari",
  "Shashi Preetham",
  "Awari Shashi Preetham",
  "AwariShashiPreetham",
  "full stack developer portfolio",
  "AI developer portfolio",
  "machine learning developer",
  "web developer portfolio",
  "Next.js developer",
];

export const socialLinks = [
  "https://github.com/Shashiawari",
  "https://www.instagram.com/shashi__awari/",
];

export const rootMetadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: {
    default: `${personName} | Full-Stack Developer Portfolio`,
    template: `%s | ${personName}`,
  },
  description: siteDescription,
  keywords: siteKeywords,
  authors: [{ name: personName }],
  creator: personName,
  publisher: personName,
  applicationName: `${displayName} Portfolio`,
  category: "portfolio",
  ...(siteUrl ? { alternates: { canonical: "/" } } : {}),
  openGraph: {
    title: `${personName} | Full-Stack Developer Portfolio`,
    description: siteDescription,
    type: "website",
    locale: "en_US",
    siteName: `${displayName} Portfolio`,
    ...(siteUrl ? { url: siteUrl } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: `${personName} | Full-Stack Developer Portfolio`,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? {
        verification: {
          google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
        },
      }
    : {}),
};

export const createPageMetadata = ({ title, description, path, keywords = [] }) => ({
  title,
  description,
  keywords: [...siteKeywords, ...keywords],
  ...(siteUrl ? { alternates: { canonical: path } } : {}),
  openGraph: {
    title: `${title} | ${personName}`,
    description,
    type: "website",
    ...(siteUrl ? { url: `${siteUrl}${path}` } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | ${personName}`,
    description,
  },
});

export const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personName,
  alternateName: alternateNames,
  givenName: "Shashi Preetham",
  familyName: "Awari",
  description: siteDescription,
  jobTitle: "Full-Stack Developer",
  knowsAbout: [
    "Full-Stack Development",
    "Web Development",
    "Next.js",
    "React",
    "Machine Learning",
    "Deep Learning",
    "Artificial Intelligence",
  ],
  sameAs: socialLinks,
  ...(siteUrl ? { url: siteUrl } : {}),
};

export const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: `${displayName} Portfolio`,
  alternateName: alternateNames,
  description: siteDescription,
  ...(siteUrl ? { url: siteUrl } : {}),
};
