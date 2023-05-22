import React from "react";
import ReactMarkdown from "react-markdown";

import { Layout } from "@/shared";
import { Markdown } from "@/shared/ui";

export const PrivacyPolicyScreen = ({ attributes }) => (
  <Layout
    title="Privacy policy"
    description="Whether you want to animate, sell, explain, or inspire – we can help."
    size="layout"
  >
    <Markdown>{attributes?.description}</Markdown>
  </Layout>
);
