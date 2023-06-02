import React from "react";

import { Layout } from "@/shared";
import { Markdown } from "@/shared/ui";

export const PrivacyPolicyScreen = ({ attributes }) => (
  <Layout
    title={attributes?.seo?.title}
    description={attributes?.seo?.description}
    size="layout"
  >
    <Markdown>{attributes?.description}</Markdown>
  </Layout>
);
