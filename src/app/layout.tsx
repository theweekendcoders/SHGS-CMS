import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "../app/animations/SmoothScrolling";
import NavBar from "./components/NavBar";

const inter = Inter({ subsets: ["latin"] });
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "SHGS Admin Page",
  description: "Powered by theweekendcoders",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className} bg-white mx-auto h-screen md:max-w-screen-md lg:max-w-screen-lg xl:max-w-full p-6 mx-auto xl:max-w-screen-2xl`}
      >
        <SmoothScrolling>
          <NavBar />
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
