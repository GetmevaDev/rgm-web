import React from "react";

import { Layout } from "@/shared";
import {
  Blanks,
  Block,
  BlockMap,
  ImageBannerText,
  OutComes,
  Work,
} from "@/shared/ui";

export const CaseBbScreen = ({ attributes }) => (
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
        subDescrption={attributes?.Banner?.title_color}
        transform="capitalize"
        title={attributes?.Banner?.title}
        buttonLink={attributes?.Banner?.button_link}
        imageLight={attributes?.Banner?.image_dark?.data?.attributes?.url}
        imageDark={attributes?.Banner?.image_dark?.data?.attributes?.url}
        description={attributes?.Banner?.description}
        button={attributes?.Banner?.button}
      />

      <Block
        width={475}
        height={420}
        title={attributes?.ImageBannerText?.title}
        image={attributes?.ImageBannerText?.image?.data?.attributes?.url}
        description={attributes?.ImageBannerText?.description}
      />
    </div>

    <Work
      size="one"
      arr={attributes?.Work?.WorkItem}
      title={attributes?.Work?.title}
    />

    <Blanks blanks={attributes?.Blanks} />

    <OutComes
      color="gray"
      items={attributes?.Outcomes?.OutcomeItem}
      image={attributes?.Outcomes?.image?.data?.attributes?.url}
      title={attributes?.Outcomes?.title}
    />

    <BlockMap />
  </Layout>
);
