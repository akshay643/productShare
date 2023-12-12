// import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  manifest: "/manifest.json",
  title: "Buy It Out",
  description: "Link to your favourite app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" />

      <body
      //  className={`${inter.className}bg-slate-950 `}
      >
        <Navigation />

        {children}
        <Footer />
      </body>
    </html>
  );
}
