import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sanjay | AI Research Engineer",
  description: "Portfolio of Sanjay – AI Research Engineer specializing in GenAI, R&D, and production-grade ML systems.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Sanjay | AI Research Engineer",
    description: "AI Research Engineer specializing in GenAI, R&D, and ML systems.",
    url: "https://example.com",
    siteName: "Sanjay Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanjay | AI Research Engineer",
    description: "Portfolio of Sanjay – AI Research Engineer specializing in GenAI and ML.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
