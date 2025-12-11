import { Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Poppins } from "next/font/google";
import ContactAndFooter from "@/components/Contact";


// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["600","700","800","900"],
});
 



export const metadata = {
  title: "CodGen - Virtual Internship Platform for Students",
  description: "Join CodGen virtual internships to learn IT skills, complete tasks, gain experience and earn a certificate. Web Development, App Development, Data Science, UI/UX & more.",
  keywords: [
    "codgen",
    "virtual internship",
    "free internship for students",
    "web development internship",
    "IT internship",
    "online internship",
    "internship with certificate",
    "work from home internship",
    "software internship",
    "coding internship beginner"
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "CodGen - Online Internships for Students",
    description: "Apply for Web Dev, App Dev, Data Science & UI/UX internships. Flexible, remote & certificate-based.",
    url: "https://codgen.in",
    siteName: "CodGen",
    images: [
      {
        url: "/og-banner.png", // add when available
        width: 1200,
        height: 630,
        alt: "CodGen Internship"
      }
    ],
    type: "website",
    locale: "en_IN"
  }
};




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${geistMono.variable}  antialiased`}
      >
      <Navbar />
        {children}
        <ContactAndFooter />
      </body>
    </html>
  );
}
