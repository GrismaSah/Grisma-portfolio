import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/providers/ThemeProvider";
import { PROFILE } from "@/constants";

/* ── Fonts: Inter (body) + Sora (display/headings) ── */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sora",
  display: "swap",
});

/* ── SEO / OpenGraph metadata ── */
export const metadata: Metadata = {
  // 👉 Set this to your deployed URL for correct OG/canonical links
  metadataBase: new URL("https://grisma-portfolio.vercel.app"),
  title: `${PROFILE.name} — ${PROFILE.role}`,
  description: PROFILE.intro,
  keywords: [
    "Grisma Sah",
    "Software Engineer",
    "Java Developer",
    "Computer Science",
    "Portfolio",
    "DSA",
    "Bengaluru",
  ],
  authors: [{ name: PROFILE.name }],
  openGraph: {
    type: "website",
    title: `${PROFILE.name} — ${PROFILE.role}`,
    description: PROFILE.intro,
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${PROFILE.name} — ${PROFILE.role}`,
    description: PROFILE.intro,
    images: ["/og-image.svg"],
  },
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="font-body antialiased">
        {/* Set theme before paint to avoid a flash of the wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.classList.add('light');}}catch(e){}})();`,
          }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
