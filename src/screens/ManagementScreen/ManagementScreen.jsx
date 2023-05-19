import React from "react";

import { Layout } from "@/shared";
import {
  Block,
  BlockMap,
  Description,
  GivingBack,
  ImageBannerText,
} from "@/shared/ui";

const texts = [
  {
    id: 1,
    miniTitle: "PUBLIC RELATIONS SERVICES",
    reverse: false,
    width: 475,
    height: 600,
    image: "/images/corporate.jpg",
    color: "white",
    position: "left",
    description: `
 There is certainly no shortage of public relations firms and if you live in a metropolitan area there are likely hundreds from which to choose. Most will accomplish at least some of the necessary and conventional work in promoting your products and services, but today most businesses are looking for an edge and way to rise above the traditional marketing techniques of the past. Customers now get their very first impressions of any <a href=""> business online</a>. RGM gets it and knows how to bring it all together for you and your company. RGM has mastered the art of exploiting both local and national media outlets so that journalists and other online actors will be drawn to click on your site and to then discover both eye-catching and informative content once they do. We have the know-how to effectively respond to what is being said about your business, whether it is on social networks or onsite reviews.

`,
  },

  {
    id: 2,
    miniTitle: "REPUTATION MANAGEMENT SERVICES",
    reverse: true,
    width: 475,
    height: 360,
    image: "/images/corporate.jpg",
    color: "gray",
    position: "right",

    description: `
All businesses are different and, like the individuals who run them, each will have their own histories. As a consequence, each entrepreneur will require different reputation management strategies should they seek such invaluable help.
RGM provides various solutions tailored to their individual needs. Our services include removal of negative commentary and even downright slander and libel.

`,
  },
];

export const ManagementScreen = ({ attributes }) => (
  <Layout
    title="PUBLIC RELATIONS MANAGEMENT NYC"
    description="RGM offers a powerful complement of Internet, TV, Billboard and Print PR services in New York City."
    size="nolayout"
  >
    <div className="layout">
      <ImageBannerText
        transform="capitalize"
        title={attributes?.banner?.title}
        description={attributes?.banner?.description}
        button={attributes?.banner?.button}
        buttonLink={attributes?.banner?.button_link}
        imageLight={attributes?.banner?.image_light?.data?.attributes?.url}
        imageDark={attributes?.banner?.image_dark?.data?.attributes?.url}
      />

      <Description
        weight="semi_bold"
        description={attributes?.description?.description}
      />
    </div>
    {attributes?.ImageBannerText.map((item) => (
      <Block
        color={item.color}
        key={item.id}
        width={item.image?.data?.attributes?.width}
        position={item.position}
        height={item.image?.data?.attributes?.height}
        miniTitle={item.miniTitle}
        reverse={item.reverse}
        image={item.image?.data?.attributes?.url}
        description={item.description}
      />
    ))}

    <div className="layout">
      <GivingBack />
    </div>

    <BlockMap />
  </Layout>
);
