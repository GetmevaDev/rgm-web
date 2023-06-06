import React from "react";

import { Layout } from "@/shared";
import {
  Block,
  BlockMap,
  Description,
  GivingBack,
  ImageBannerText,
} from "@/shared/ui";

export const VideoProductionScreen = ({ attributes }) => (
  <Layout
    title={attributes?.seo?.title}
    description={attributes?.seo?.description}
    image={attributes?.seo?.image}
    twitterCard={attributes?.seo?.twitter_card}
    twitterDescription={attributes?.seo?.twitter_description}
    twitterDomain={attributes?.seo?.twitter_domain}
    twitterImage={attributes?.seo?.twitter_image}
    twitterTitle={attributes?.seo?.twitter_title}
    twitterUrl={attributes?.seo?.twitter_url}
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

      <Description
        weight="semi_bold"
        description={attributes?.description?.description}
      />
    </div>
    {attributes?.ImageBannerText.map((item) => (
      <Block
        color={item.color}
        key={item.id}
        width={item.image?.data?.attributes?.width}
        position={item.position}
        height={item.image?.data?.attributes?.height}
        miniTitle={item.title}
        reverse={item.reverse}
        image={item.image?.data?.attributes?.url}
        description={item.description}
      />
    ))}
    <div className="layout">
      <div className="border" />

      <GivingBack />
    </div>

    <BlockMap />
  </Layout>
);
