import React from "react";

import { Layout } from "@/shared";
import {
  Block,
  BlockMap,
  Description,
  GivingBack,
  ImageBannerText,
  Info,
  Work,
} from "@/shared/ui";

export const WebScreen = ({ attributes }) => (
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
