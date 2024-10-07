//import localFont from "next/font/local";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
////////////////////////////
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
////////////////////////////////////
{/*
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
*/}
const jetbrainsMono = JetBrains_Mono ({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800"],
  variable: '--font-jetbrainsMono'
});

export const metadata = {
  title: "MADGER",
  description: "Portfolio by MADGER",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        //className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={jetbrainsMono.variable}
      >
        <Header />
        <StairTransition />
        <PageTransition>
          {children}
        </PageTransition>
        
      </body>
    </html>
  );
}
