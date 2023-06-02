import React from "react";

import { Layout } from "@/shared";
import {
  BlockMap,
  Description,
  DevelopmentProcess,
  DevelopTeam,
  ImageBannerText,
  ReadyToIncrease,
} from "@/shared/ui";
import { FadeInWhenVisible } from "@/widgets";

export const AboutScreen = ({ attributes }) => (
  <Layout
    title={attributes?.seo?.title}
    description={attributes?.seo?.description}
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
