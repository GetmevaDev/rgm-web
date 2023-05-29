import React from "react";

import { Layout } from "@/shared";
import { Markdown } from "@/shared/ui";

export const AccessibilityScreen = ({ attributes }) => (
  <Layout
    title="Accessibility Policy Commitment Statement"
    description="Whether you want to animate, sell, explain, or inspire – we can help."
    size="layout"
  >
    <Markdown>{attributes?.description}</Markdown>
  </Layout>
);
