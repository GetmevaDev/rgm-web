import React from "react";

import { Layout } from "@/shared";
import { BlockMap, Cases, ImageBannerText } from "@/shared/ui";

export const CaseStudiesScreen = () => (
  <Layout title="CaseStudies" description="CaseStudies" size="nolayout">
    <div className="layout">
      <ImageBannerText
        position="center"
        transform="capitalize"
        title="Case Studies"
        imageLight="/images/case-light.svg"
        imageDark="/images/case-dark.svg"
      />

      <Cases />
    </div>

    <BlockMap />
  </Layout>
);
