import { Inter } from "next/font/google";
import "./globals.css";

// Delete this import below when you are ready to remove the banner
import Banner from "@/components/sections/999 - banner";

const inter = Inter({ subsets: ["latin"] });


// This is the metadata for the website. Change the values to match your website. Upload the openGraph.png to your public folder
export const metadata = {
  metadataBase: new URL('https://portfolio.foym.org/'),
  title: "Portfolio Template - FOYM",
  description: "This is a portfolio template for developers, designers, and creators. It is entirely free to use and customize. FOYM, a project by Ruslan Mukhamedvaleev, created this website under the MIT license.",
  openGraph: {
    title: "Portfolio Template - FOYM",
    description: "This is a portfolio template for developers, designers, and creators. It is entirely free to use and customize. FOYM, a project by Ruslan Mukhamedvaleev, created this website under the MIT license.",
    url: 'https://portfolio.foym.org/',
    siteName: 'Portfolio Template - FOYM',
    images: [
      {
        url: '/openGraph.png',
        width: 1600,
        height: 900,
        alt: 'An image with the website\s name "The Portfolio - An FOYM Template" and star like characters in the background pointing at the name',
      },
    ], 
    locale: 'en_US',
    type: 'website',
  },
}

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
