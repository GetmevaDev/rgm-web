import React from "react";

import { Layout } from "@/shared";
import {
  Block,
  BlockMap,
  ImageBannerText,
  KeywordProfile,
  OutComes,
  Work,
} from "@/shared/ui";
import { FadeInWhenVisible } from "@/widgets";

export const CaseSmilesScreen = ({ attributes }) => (
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
        subDescrption={attributes?.banner?.title_color}
        transform="capitalize"
        title={attributes?.banner?.title}
        imageLight={attributes?.banner?.image_dark?.data?.attributes?.url}
        imageDark={attributes?.banner?.image_dark?.data?.attributes?.url}
        description={attributes?.banner?.description}
        button={attributes?.banner?.button}
        buttonLink={attributes?.banner?.button_link}
      />

      <Block
        width={551}
        subTitle={attributes?.ImageBannerText?.title_color}
        height={825}
        title={attributes?.ImageBannerText?.title}
        image={attributes?.ImageBannerText?.image?.data?.attributes?.url}
        description={attributes?.ImageBannerText?.description}
      />
    </div>

    <Work
      size="three"
      arr={attributes?.Work?.WorkItem}
      title={attributes?.Work?.title}
    />

    <OutComes
      items={attributes?.OutComes?.OutcomeItem}
      image={attributes?.OutComes?.image?.data?.attributes?.url}
      title={attributes?.OutComes?.title}
    />

    <OutComes
      image={attributes?.SeeOutComes?.image?.data?.attributes?.url}
      color="gray"
      outcomes={false}
      description={attributes?.SeeOutComes?.description}
      title={attributes?.SeeOutComes?.title}
    />

    <KeywordProfile
      grid="three"
      items={attributes?.KeywordProfile?.KeywordItem}
    />

    <BlockMap />
  </Layout>
);
