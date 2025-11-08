import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Contact Us | Career Advice Consultancy",
  description:
    "Get in touch with the Career Advice Consultancy team for personalised guidance and support.",
  openGraph: {
    title: "Contact Career Advice Consultancy",
    description:
      "Reach out to the Career Advice Consultancy team for expert guidance tailored to your career goals.",
    type: "website",
    url: "https://example.com/contact",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
