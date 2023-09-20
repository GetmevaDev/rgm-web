import React from "react";

import { Layout } from "@/shared";
import {
  BlockMap,
  BuildStrategy,
  Description,
  DescriptionSeo,
  GivingBack,
  ImageBannerText,
  Pledge,
  Price,
  Slider,
  Work,
} from "@/shared/ui";

export const SeoComponyScreen = ({ attributes, reviews }) => (
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

      <DescriptionSeo
        // sub={attributes?.Description?.sub_description}
        description={attributes?.Description?.description}
        title={attributes?.Description?.title}
        text={attributes?.Description?.text}
        image={attributes?.Description?.image?.data?.attributes?.url}
        alt={attributes?.Description?.alt}
      />

      {/* <BuildStrategy
        reviews={reviews}
        addons={attributes?.addons}
        items={attributes?.PricingItemsss}
        packageItems={attributes?.packageItems}
        packageList={attributes?.PackageItemList}
        list={attributes?.PricingItemList}
      /> */}

      {console.log(attributes, "attr")}

      {/* <Price
        items={attributes?.PricingItemsss}
        list={attributes?.PricingItemList}
      /> */}
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
