import React from "react";

import { Layout } from "@/shared";
import {
  BigDescription,
  Block,
  BlockMap,
  Description,
  DevelopmentProcess,
  DevelopTeam,
  GivingBack,
  ImageBannerText,
  ReadyToIncrease,
  Slider,
} from "@/shared/ui";

export const AboutScreen = ({ attributes }) => (
  <Layout
    title="We’re About You. Not Us."
    description="THE RIGHT ONLINE BUSINESS MODEL"
    size="nolayout"
  >
    <div className="layout">
      <ImageBannerText
        transform="capitalize"
        title={attributes?.banner?.title}
        description={attributes?.banner?.description}
        button={attributes?.banner?.button}
        buttonLink={attributes?.banner?.button_link}
        imageLight={attributes?.banner?.image_light?.data?.attributes?.url}
        imageDark={attributes?.banner?.image_dark?.data?.attributes?.url}
      />

      <Description weight="semi_bold" description={attributes?.description} />
    </div>
    <ReadyToIncrease
      width={356}
      height={492}
      image={attributes?.ReadyToIncrease?.image?.data?.attributes?.url}
      title={attributes?.ReadyToIncrease?.title}
    />

    <div className="layout">
      <DevelopTeam
        items={attributes?.Technologies?.TechnologiesItem}
        title={attributes?.Development?.title}
        description={attributes?.Development?.description}
      />
    </div>

    <DevelopmentProcess
      items={attributes?.DevProcessItems?.DevProcessItem}
      title={attributes?.DevProcess?.title}
      description={attributes?.DevProcess?.description}
    />

    <ReadyToIncrease
      width={356}
      height={452}
      color="white"
      image={attributes?.ReadyToIncreasebottom?.image?.data?.attributes?.url}
      title={attributes?.ReadyToIncreasebottom?.title}
    />

    <BlockMap />
  </Layout>
);
