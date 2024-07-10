import { Inter } from "next/font/google";
import "./globals.css";
import Banner from "@/components/sections/999 - banner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio Template - FOYM",
  description: "A portfolio template for developers, designers, and creators. Free to use and customize.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
                    
      <body className={inter.className}>
        
        {/* This is the banner for the FOYM website. Feel free to delete this! */}
          <Banner />
        
        {children}</body>
    </html>
  );
}
