import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import Script from "next/script";
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
  const router = useRouter();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={router.route}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          duration: 0.75,
        }}
        variants={{
          initialState: {
            opacity: 0,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          },
          animateState: {
            opacity: 1,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          },
          exitState: {
            clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
          },
        }}
        className="base-page-size"
      >
        <main className={`${mont.variable} ${inter.variable}`}>
          <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-D8LMD1Y3RJ"
          />

          <Script id="google-analytics" strategy="afterInteractive">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-D8LMD1Y3RJ');
        `}
          </Script>

          <Component {...pageProps} />
        </main>
      </motion.div>
    </AnimatePresence>
  );
}
