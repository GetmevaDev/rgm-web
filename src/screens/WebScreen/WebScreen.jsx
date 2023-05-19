import React from "react";

import { Layout } from "@/shared";
import {
  Block,
  BlockMap,
  Description,
  GivingBack,
  ImageBannerText,
  Info,
  Slider,
  Work,
} from "@/shared/ui";

import { arr } from "..";

export const WebScreen = ({ attributes }) => (
  <Layout
    title="WEB DEVELOPMENT"
    description="Behind every Google search, there is a user-intention. We leverage that user intent and place you where your product or service fits best."
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

      <Description description={attributes?.description} />
    </div>

    <Info slides={attributes?.Items?.SliderItem} />
    <Work
      size="three"
      color="white"
      arr={attributes?.website_succeed?.WorkItem}
      title={attributes?.website_succeed?.title}
    />

    <Block
      color="gray"
      title={attributes?.ImageBannerText?.title}
      image={attributes?.ImageBannerText?.image?.data?.attributes?.url}
      description={attributes?.ImageBannerText?.description}
      width={475}
      height={980}
    />

    <div className="layout">
      <GivingBack />
    </div>

    <BlockMap />
  </Layout>
);
