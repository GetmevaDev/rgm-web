import React from "react";

import { Layout } from "@/shared";
import {
  Banner,
  Block,
  BlockMap,
  BridgeBusiness,
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

    <BlockMap />
  </Layout>
);
