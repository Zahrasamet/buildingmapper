import { DM_Sans, Barlow } from "next/font/google";
import "@/styles/globals.css";

// تعریف فونت‌ها
const dmSans = DM_Sans({
  variable: "--font-dmSans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${dmSans.variable} ${barlow.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
