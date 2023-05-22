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

export const CaseSmilesScreen = ({ attributes }) => (
  <Layout
    title="All Smiles Dental Spa "
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

    <KeywordProfile startCenter={13} startRight={25} />

    <BlockMap />
  </Layout>
);
