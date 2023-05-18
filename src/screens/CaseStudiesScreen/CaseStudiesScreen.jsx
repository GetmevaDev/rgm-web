import React from "react";

import { Layout } from "@/shared";
import { BlockMap, Cases, ImageBannerText } from "@/shared/ui";

export const CaseStudiesScreen = ({ attributes }) => (
  <Layout title="CaseStudies" description="CaseStudies" size="nolayout">
    <div className="layout">
      <ImageBannerText
        position="center"
        transform="capitalize"
        title={attributes?.Banner?.title}
        imageLight={attributes?.Banner?.image_light?.data?.attributes?.url}
        imageDark={attributes?.Banner?.image_dark?.data?.attributes?.url}
      />

      <Cases data={attributes?.Cases?.CaseItem} />
    </div>

    <BlockMap />
  </Layout>
);
