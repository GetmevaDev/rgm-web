import React from "react";

import { Layout } from "@/shared";
import { Contact, ImageBannerText } from "@/shared/ui";

export const ContactScreen = ({ attributes }) => (
  <Layout
    title={attributes?.seo?.title}
    description={attributes?.seo?.description}
    image={attributes?.seo?.image}
    twitterCard={attributes?.seo?.twitter_card}
    twitterDescription={attributes?.seo?.twitter_description}
    twitterDomain={attributes?.seo?.twitter_domain}
    twitterImage={attributes?.seo?.twitter_image}
    twitterTitle={attributes?.seo?.twitter_title}
    twitterUrl={attributes?.seo?.twitter_url}
    size="nolayout"
  >
    <div className="layout">
      <ImageBannerText
        subDescrption={attributes?.Banner?.title_color}
        transform="capitalize"
        title={attributes?.Banner?.title}
        buttonLink={attributes?.Banner?.button_link}
        imageLight={attributes?.Banner?.image_dark?.data?.attributes?.url}
        imageDark={attributes?.Banner?.image_dark?.data?.attributes?.url}
        description={attributes?.Banner?.description}
        button={attributes?.Banner?.button}
      />
    </div>

    <Contact
      title={attributes?.Info?.title}
      address={attributes?.Info?.address}
      email={attributes?.Info?.email}
      phoneLeft={attributes?.Info?.phone_number_left}
      phoneRight={attributes?.Info?.phone_number_right}
    />
  </Layout>
);
