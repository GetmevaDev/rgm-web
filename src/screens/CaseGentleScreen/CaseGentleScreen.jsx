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

export const CaseGentleScreen = ({ attributes }) => (
  <Layout
    title="Gentle Touch Endo"
    description="Gentle Touch Endo set out to build a new web presence in order to increase their already existing search engine ranking, and to continue to close the gap in an underserved market."
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
        title={attributes?.ImageBannerText[0]?.title}
        image={attributes?.ImageBannerText[0]?.image?.data?.attributes?.url}
        description={attributes?.ImageBannerText[0]?.description}
        width={475}
        height={690}
      />
    </div>

    <Work
      size="three"
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

    <KeywordProfile startCenter={7} numbers color="gray" />

    <BlockMap />
  </Layout>
);
