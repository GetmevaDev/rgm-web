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
      <ImageBannerText />
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
