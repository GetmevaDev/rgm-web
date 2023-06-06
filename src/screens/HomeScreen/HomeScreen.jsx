import React, { useEffect, useState } from "react";

import { Layout } from "@/shared";
import {
  Awards,
  Banner,
  Block,
  BlockMap,
  BridgeBusiness,
  FeaturedPress,
  ImageBannerText,
  OurServices,
} from "@/shared/ui";
import { FadeInWhenVisible } from "@/widgets";

export const HomeScreen = ({ attributes }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
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
      {console.log(attributes, "attr")}
      <div className="layout">
        <ImageBannerText
          title={attributes?.banner?.title}
          subTitle={attributes?.banner?.title_color}
          description={attributes?.banner?.description}
          buttonForm
          button={attributes?.banner?.button}
          buttonLink={attributes?.banner?.button_link}
          images={attributes?.banner?.images_awards?.data}
          imageLight={attributes?.banner?.image_light?.data?.attributes?.url}
          imageDark={attributes?.banner?.image_dark?.data?.attributes?.url}
        />

        <Banner
          buttonForm
          button={attributes?.image_banner?.button}
          subTitle={attributes?.image_banner?.title_color}
          title={attributes?.image_banner?.title}
          link={attributes?.image_banner?.button_link}
          description={attributes?.image_banner?.description}
          image={attributes?.image_banner?.image?.data?.attributes?.url}
        />

        <BridgeBusiness
          subTitle={attributes?.BridgeBusiness?.title_color}
          title={attributes?.BridgeBusiness?.title}
          description={attributes?.BridgeBusiness?.description}
          items={
            attributes?.BridgeBusiness?.RightBlockBridge?.RightBlockBridgeItem
          }
          date={attributes?.BridgeBusiness?.date}
        />
      </div>

      <OurServices
        title={attributes?.OurServices?.title}
        description={attributes?.OurServices?.description}
        items={attributes?.OurServices?.OurServicesItems?.OurServiceItem}
      />

      <div className="layout">
        <Block
          items={attributes?.image_banner?.DevelopmentProcessItem}
          title={attributes?.OurDevelopmentProcess?.title}
          reverse={attributes?.OurDevelopmentProcess?.reverse}
          width={475}
          height={650}
          description={attributes?.OurDevelopmentProcess?.description}
        />
      </div>

      <Awards
        images={attributes?.Awards?.images?.data}
        title={attributes?.Awards?.title}
        subTitle={attributes?.Awards?.title_color}
      />

      <div className="layout">
        <FeaturedPress
          images={attributes?.Featured?.images?.data}
          title={attributes?.Featured?.title}
          subTitle={attributes?.Featured?.title_color}
        />
      </div>

      <BlockMap />
    </Layout>
  );
};
