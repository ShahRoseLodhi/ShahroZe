import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nilly — Turn your content into a business",
  description:
    "Learn to build a personal brand, grow your audience, and turn your content into a real business.",
  openGraph: {
    title: "Nilly — Turn your content into a business",
    description: "Resources to help creators build their next chapter.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
