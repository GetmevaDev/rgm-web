import React from "react";

import { Layout } from "@/shared";
import {
  Block,
  BlockMap,
  Feedback,
  ImageBannerText,
  OutComes,
  Work,
} from "@/shared/ui";
import { FadeInWhenVisible } from "@/widgets";

export const CaseYagolawScreen = ({ attributes }) => (
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
        title={attributes?.ImageBannerText?.title}
        width={475}
        height={890}
        image={attributes?.ImageBannerText?.image?.data?.attributes?.url}
        description={attributes?.ImageBannerText?.description}
      />
    </div>

    <Work
      size="two"
      arr={attributes?.Work?.WorkItem}
      title={attributes?.Work?.title}
    />

    <div className="layout">
      <OutComes
        items={attributes?.Outcomes?.OutcomeItem}
        image={attributes?.Outcomes?.image?.data?.attributes?.url}
        title={attributes?.Outcomes?.title}
      />
    </div>

    <Feedback
      title={attributes?.Feedback?.color_title}
      subTitle={attributes?.Feedback?.title}
      description={attributes?.Feedback?.description}
      user={attributes?.Feedback?.user}
    />

    <BlockMap />
  </Layout>
);
