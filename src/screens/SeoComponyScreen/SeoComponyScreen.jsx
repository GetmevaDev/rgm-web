import React from "react";

import { Layout } from "@/shared";
import {
  BlockMap,
  Description,
  GivingBack,
  ImageBannerText,
  Pledge,
  Price,
  Slider,
  Work,
} from "@/shared/ui";

const arr = [
  {
    id: 1,
    title: "Analysis",
    description:
      "To start, we begin with a professional review of your current website, in many cases we will introduce a business analyst to assist, to determine the most effective way to move forward.",
    image: "/svg/data.svg",
  },
  {
    id: 2,
    title: "RESEARCH",
    description:
      "Following a thorough review of your current website’s performance, we procure the desired goals based on the products and/or services you offer, your target demographic and industry competition.",
    image: "/svg/search.svg",
  },

  {
    id: 3,
    title: "Methodology",
    description:
      "Data science replaces previous guesswork regarding what the user actually wants. Based on a deep learning technology, from millions of analyzed data segments, we determine the precise user intention behind search terms.",
    image: "/svg/process.svg",
  },
];

export const SeoComponyScreen = () => (
  <Layout
    title="SEO COMPANY NYC"
    description="Behind every Google search, there is a user-intention. We leverage that user intent and place you where your product or service fits best."
    size="nolayout"
  >
    <div className="layout">
      <ImageBannerText
        transform="capitalize"
        title="SEO COMPANY NYC"
        imageLight="/images/seo.jpg"
        imageDark="/images/seo.jpg"
        description={`
						Behind every Google search, there is a <b>user-intention</b>. We leverage that user intent and place you where your product or service fits best.`}
        button="Visit Website"
      />

      <Description sub />
      <Price />
    </div>

    <Work size="three" arr={arr} />

    <div className="layout">
      <Pledge />
    </div>

    <Slider />
    <div className="layout">
      <GivingBack />
    </div>

    <BlockMap />
  </Layout>
);
