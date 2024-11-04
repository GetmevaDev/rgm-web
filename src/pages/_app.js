import { AnimatePresence, motion } from "framer-motion";
import Head from 'next/head';
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
      <Head>
        <script>{"(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-KCWFCDNT');"}
        </script>
      </Head>
      <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KCWFCDNT"
                        height="0" width="0" style="display:none;visibility:hidden">
          </iframe>
      </noscript>
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
          <ToastContainer />

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
