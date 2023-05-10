import React from "react";

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

export const HomeScreen = () => (
  <Layout title="Home" description="home" size="nolayout">
    <div className="layout">
      <ImageBannerText
        title="Robert Gerov"
        subTitle="Media"
        description="An award-winning Digital Agency based in New York"
        button
        images
        imageLight="/images/banner-home-light.svg"
        imageDark="/images/banner-home-dark.svg"
      />
      <Banner />
      <BridgeBusiness />
    </div>

    <OurServices />
    <div className="layout">
      <Block />
    </div>

    <Awards />
    <div className="layout">
      <FeaturedPress />
    </div>

    <BlockMap />
  </Layout>
);
