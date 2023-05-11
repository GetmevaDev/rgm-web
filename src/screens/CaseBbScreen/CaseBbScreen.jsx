import React from "react";

import { Layout } from "@/shared";
import {
  Banner,
  Blanks,
  Block,
  BlockMap,
  Feedback,
  GivingBack,
  ImageBannerText,
  KeywordProfile,
  OutComes,
  Slider,
  Work,
} from "@/shared/ui";

const arr = [
  {
    id: 1,
    title: "Strategy",
    description:
      "We organized all her wants and needs and wrote all new content. The design team planned content placement and wireframed the website. We began to design the branding based on the 7 chakras of Buddhism. The heart chakra, or Anahata, is located near your heart, in the center of your chest; this was the logo inspiration. It comes as no surprise that the heart chakra is all about our ability to love and show compassion. We planned a complete user experience while maintaining encryption, website accessibility, content formatting, and SEO protocols.",
  },
];

export const CaseBbScreen = () => (
  <Layout
    title="BB Tax & Advisory"
    description="Gentle Touch Endo set out to build a new web presence in order to increase their already existing search engine ranking, and to continue to close the gap in an underserved market."
    size="nolayout"
  >
    <div className="layout">
      <ImageBannerText
        subDescrption="Summary"
        transform="capitalize"
        title="BB Tax & Advisory"
        imageLight="/images/bb-banner.svg"
        imageDark="/images/bb-banner.svg"
        description={`
						BB Tax & Advisory is a full service bookkeeping, accounting and financial advisory firm specializing in the complex needs of small businesses owners and middle-class families. Our goal was to create a well organized User Experience to showcase the clients various specialties in a clean, sophisticated way. Our targets were middle class families, small businesses and retired couples.`}
        button="Visit Website"
      />

      <Block
        title="Overview"
        width={475}
        height={420}
        image="/images/bb.jpg"
        description={`
			We set out to create a well organized user experience and sophisticated-looking website that showcases the client’s wide spectrum of specialities. Creating a UX that efficiently organized the large amount of information, graphs, statistics and specialities offered by the client. We art directed and produced the website and graphics. We designed the wireframes which were crucial in organizing the site’s content.
			`}
      />
    </div>

    <Work size="one" arr={arr} />

    <Blanks />

    <OutComes image="/images/bb-screen.jpg" color="gray" />

    <Slider />
    <BlockMap />
  </Layout>
);
