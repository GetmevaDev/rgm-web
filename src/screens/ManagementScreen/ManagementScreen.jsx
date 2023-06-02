import React from "react";

import { Layout } from "@/shared";
import {
  Block,
  BlockMap,
  Description,
  GivingBack,
  ImageBannerText,
} from "@/shared/ui";

export const ManagementScreen = ({ attributes }) => (
  <Layout
    title={attributes?.seo?.title}
    description={attributes?.seo?.description}
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
      <GivingBack />
    </div>

    <BlockMap />
  </Layout>
);
