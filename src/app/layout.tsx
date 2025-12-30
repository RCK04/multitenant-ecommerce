import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Sellix",
    template: "%s | Sellix",
  },
  description: "Create and manage your online store with ease.",
  keywords: ["ecommerce", "online store", "SaaS", "Sellix"],
  authors: [{ name: "Erick Roberto" }],
  openGraph: {
    title: "Sellix",
    description: "Create and manage your online store with ease.",
    type: "website",
    locale: "en_US",
    siteName: "Sellix",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
