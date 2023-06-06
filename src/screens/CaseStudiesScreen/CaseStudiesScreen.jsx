import React from "react";

import { Layout } from "@/shared";
import { BlockMap, Cases, ImageBannerText } from "@/shared/ui";

export const CaseStudiesScreen = ({ attributes }) => (
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
        position="center"
        transform="capitalize"
        title={attributes?.Banner?.title}
        imageLight={attributes?.Banner?.image_light?.data?.attributes?.url}
        imageDark={attributes?.Banner?.image_dark?.data?.attributes?.url}
      />

      <Cases data={attributes?.Cases?.CaseItem} />
    </div>

    <BlockMap />
  </Layout>
);
