import { ToastContainer } from "react-toastify";

import { ThemeProvider } from "@/providers";
// eslint-disable-next-line import/order
import { Inter, Montserrat } from "@next/font/google";

import "swiper/css";
import "swiper/css/pagination";

import "react-widgets/styles.css";
import "boxicons/css/boxicons.min.css";
import "@/styles/globals.scss";
import "react-toastify/dist/ReactToastify.css";

export const mont = Montserrat({
  weight: ["100", "200", "300", "500", "700", "800", "900"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-mont",
});

export const inter = Inter({
  weight: ["100", "200", "300", "500", "700", "800", "900"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${mont.variable} ${inter.variable}`}>
      <ThemeProvider>
        <Component {...pageProps} />
        <ToastContainer />
      </ThemeProvider>
    </main>
  );
}
