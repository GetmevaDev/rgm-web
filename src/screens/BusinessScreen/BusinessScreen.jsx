import React from "react";

import { Layout } from "@/shared";
import {
  BigDescription,
  Block,
  BlockMap,
  GivingBack,
  ImageBannerText,
  Slider,
} from "@/shared/ui";

export const BusinessScreen = ({ attributes }) => (
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
      <Block
        width={475}
        height={370}
        miniTitle={attributes?.ImageBannerText?.title}
        description={attributes?.ImageBannerText?.description}
        image={attributes?.ImageBannerText?.image?.data?.attributes?.url}
      />
      <BigDescription description={attributes?.description} />
    </div>

    <Slider items={attributes?.Slider?.SliderItem} />

    <div className="layout">
      <GivingBack />
    </div>

    <BlockMap />
  </Layout>
);
