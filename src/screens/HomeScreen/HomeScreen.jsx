import React from "react";

import { Layout } from "@/shared";
import {
  Banner,
  BridgeBusiness,
  ImageBannerText,
  OurServices,
} from "@/shared/ui";

export const HomeScreen = () => (
  <Layout title="Home" description="home" la>
    <ImageBannerText />
    <Banner />
    <BridgeBusiness />

    <OurServices />
  </Layout>
);
