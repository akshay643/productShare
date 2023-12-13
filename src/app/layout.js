// import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import Script from "next/script";
// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  manifest: "/manifest.json",
  title: "Buy It Out",
  description: "Link to your favourite app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'GA_MEASUREMENT_ID');
        `}
      </Script>

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
