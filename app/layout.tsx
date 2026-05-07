import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "./components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BestQuote Commercial Finance - Business Loans & Commercial Mortgages",
  description: "Expert commercial finance solutions including business loans, commercial mortgages, bridging loans, development finance, and asset finance. Get expert advice on your commercial and domestic finance needs.",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-2PJ4CXW8FK"></script>
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-2PJ4CXW8FK');` }} />
        {/* End Google tag (gtag.js) */}
        {/* Meta Pixel Code */}
        <script dangerouslySetInnerHTML={{ __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','807045789783610');fbq('track','PageView');` }} />
        {/* End Meta Pixel Code */}
        {/* HubSpot Embed Code */}
        <script type="text/javascript" id="hs-script-loader" async defer src="//js-eu1.hs-scripts.com/147318229.js"></script>
        {/* End HubSpot Embed Code */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        {/* Meta Pixel (noscript) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <noscript><img height="1" width="1" style={{ display: 'none' }} src="https://www.facebook.com/tr?id=807045789783610&ev=PageView&noscript=1" alt="" /></noscript>
        {/* End Meta Pixel (noscript) */}
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
