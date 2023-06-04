import React from "react";

import { Layout } from "@/shared";
import {
  BlockMap,
  Description,
  GivingBack,
  ImageBannerText,
  Pledge,
  Price,
  Slider,
  Work,
} from "@/shared/ui";

export const SeoComponyScreen = ({ attributes }) => (
  <Layout
    title={attributes?.seo?.title}
    description={attributes?.seo?.description}
    size="nolayout"
  >
    <div className="layout">
      <ImageBannerText
        transform="capitalize"
        title={attributes?.banner?.title}
        subTitle={attributes?.banner?.title_color}
        description={attributes?.banner?.description}
        button={attributes?.banner?.button}
        buttonLink={attributes?.banner?.button_link}
        images={attributes?.banner?.images_awards?.data}
        imageLight={attributes?.banner?.image_light?.data?.attributes?.url}
        imageDark={attributes?.banner?.image_dark?.data?.attributes?.url}
      />

      <Description
        sub={attributes?.Description?.sub_description}
        description={attributes?.Description?.description}
      />
      <Price items={attributes?.PricingItemsss} />
    </div>

    <Work
      size="three"
      arr={attributes?.Block?.WorkItem}
      title={attributes?.Block?.title}
    />

    <div className="layout">
      <Pledge
        title={attributes?.PledgeToYou?.title}
        description={attributes?.PledgeToYou?.description}
        items={attributes?.PledgeToYou?.PledgeToYouItem}
      />
    </div>

    <Slider items={attributes?.Slider?.SliderItem} />
    <div className="layout">
      <GivingBack />
    </div>

    <BlockMap />
  </Layout>
);
