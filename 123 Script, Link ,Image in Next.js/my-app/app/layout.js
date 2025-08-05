import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Facebook-Connect with the world",
  description: "This is a Facebook clone built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <Navbar />
        <div className="container mx-w-[60rem] mx-auto min-h-screen">{children}</div>
        <Footer/>
      </body>
    </html>
  );
}
