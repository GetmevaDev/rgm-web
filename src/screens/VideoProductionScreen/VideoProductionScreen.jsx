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
    height: 330,
    image: "/images/corporate.jpg",
    color: "white",
    position: "left",
    description: `
		My studio hub’s are conveniently available nation-wide and equipped with sound stages, photography studios, audio-mixing equipment, a color-grading suite, an animation and visual effects areas, workstations, cameras, offices, truck parking, and dedicated spaces for clients, hair and makeup, post-production, equipment, and prop storage.
`,
  },

  {
    id: 2,
    miniTitle: "EDITORIAL",
    reverse: true,
    width: 475,
    height: 330,
    image: "/images/corporate.jpg",
    color: "gray",
    position: "right",

    description:
      "My forward-thinking team of storytellers, featuring industry veterans and digital natives, nurture digital and broadcast productions through all phases of development—from research to post-production to launch.",
  },

  {
    id: 3,
    miniTitle: "MOTION & VISUAL EFFECTS",
    reverse: false,
    width: 475,
    height: 330,
    image: "/images/corporate.jpg",
    color: "white",
    position: "right",

    description:
      "Storyboards. Motion design. Animation. Visual effects. Our group of expert artists and animators armed with top-tier tools and software to bring imaginative concepts to life and win over clients.",
  },
];

export const VideoProductionScreen = ({ attributes }) => (
  <Layout
    title="VIDEO PRODUCTION STUDIO"
    description="Whether you want to animate, sell, explain, or inspire – we can help."
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
      <div className="border" />

      <GivingBack />
    </div>

    <BlockMap />
  </Layout>
);
