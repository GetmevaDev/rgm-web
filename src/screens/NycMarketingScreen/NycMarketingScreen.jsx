import React from "react";

import { Layout } from "@/shared";
import {
  BlockMap,
  DescriptionTitle,
  GivingBack,
  ImageBannerText,
  Work,
} from "@/shared/ui";

export const NycMarketingScreen = ({ attributes }) => (
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
      <DescriptionTitle
        description={attributes?.description}
        title={attributes?.title}
      />
    </div>

    <Work size="four" arr={attributes?.cards} color="gray" />

    <div className="layout">
      <GivingBack />
    </div>

    <BlockMap />
  </Layout>
);
