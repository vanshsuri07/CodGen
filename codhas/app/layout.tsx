import { Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Poppins } from "next/font/google";


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
  title: "CodGen",
  description: "Learn by building real projects. Gain experience and get certified.",
  icons: {
    icon: '/favicon.ico',
    // apple: '/apple-icon.png',
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
        className={`${poppins.variable} ${geistMono.variable}  antialiased`}
      >
      <Navbar />
        {children}
      </body>
    </html>
  );
}
