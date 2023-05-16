import React from "react";

import { Layout } from "@/shared";
import {
  BigDescription,
  Block,
  BlockMap,
  Description,
  DevelopmentProcess,
  GivingBack,
  ImageBannerText,
  ReadyToIncrease,
  Slider,
} from "@/shared/ui";

export const AboutScreen = () => (
  <Layout
    title="We’re About You. Not Us."
    description="THE RIGHT ONLINE BUSINESS MODEL"
    size="nolayout"
  >
    <div className="layout">
      <ImageBannerText
        transform="capitalize"
        title="We’re About You. Not Us."
        imageLight="/images/about.svg"
        imageDark="/images/about.svg"
        description="THE RIGHT ONLINE BUSINESS MODEL"
        button="BOOK AN APPOINTMENT"
      />

      <Description
        weight="semi_bold"
        description={`
        <ul>
          <li>
           You're a visionary that embraces ingenuity and perseverance to build your business on values that will better the world. </li>

           <li> You're open to new ideas, new technologies and new partners. </li>
           <li>  You're a believer in the power of creativity and obsessed with results. We work with progressive leaders like you to transform business necessity into bottom line building solutions. </li>
           <li> You're the client we’ve been looking for, get in touch today!</li>
        </ul>
      `}
      />
    </div>
    <ReadyToIncrease
      width={356}
      height={492}
      image="/images/robert.png"
      title="Are you ready to increase revenue and productivity?"
    />

    <DevelopmentProcess />

    <ReadyToIncrease
      width={356}
      height={452}
      color="white"
      image="/images/robert-right.png"
      title="Are you ready to increase revenue and productivity?"
    />

    <BlockMap />
  </Layout>
);
