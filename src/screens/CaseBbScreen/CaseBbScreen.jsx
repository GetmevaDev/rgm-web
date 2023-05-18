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
    title="BB Tax & Advisory"
    description="Gentle Touch Endo set out to build a new web presence in order to increase their already existing search engine ranking, and to continue to close the gap in an underserved market."
    size="nolayout"
  >
    <div className="layout">
      <ImageBannerText
        subDescrption={attributes?.Banner?.title_color}
        transform="capitalize"
        title={attributes?.Banner?.title}
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
