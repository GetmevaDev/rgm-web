import React from "react";

import { Layout } from "@/shared";
import { Banner, ImageBannerText } from "@/shared/ui";

export const HomeScreen = () => (
  <Layout title="Home" description="home" la>
    <ImageBannerText />
    <Banner />
  </Layout>
);
