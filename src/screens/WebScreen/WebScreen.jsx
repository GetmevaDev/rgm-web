import React from "react";

import { Layout } from "@/shared";
import {
  Block,
  BlockMap,
  Description,
  GivingBack,
  ImageBannerText,
  Info,
  Slider,
  Work,
} from "@/shared/ui";

import { arr } from "..";

export const WebScreen = () => (
  <Layout
    title="WEB DEVELOPMENT"
    description="Behind every Google search, there is a user-intention. We leverage that user intent and place you where your product or service fits best."
    size="nolayout"
  >
    <div className="layout">
      <ImageBannerText
        transform="capitalize"
        title="WEB DEVELOPMENT"
        imageLight="/images/web.svg"
        imageDark="/images/web.svg"
        description={`
						A REVOLUTIONARY DIGITAL DEVELOPMENT AGENCY BASED IN TIMES SQUARE`}
        button="Visit Website"
      />

      <Description description="Design never stands still, and any brand investing in a new website or application wants it to look and feel contemporary. The philosophy behind your design should stand the test of time." />
    </div>

    <Info />
    <Work size="three" arr={arr} color="white" title="WHY WEBSITES SUCCEED" />

    <Block
      color="gray"
      image="/images/africa.jpg"
      title="A PARTNERSHIP MENTALITY"
      width={475}
      height={980}
      description={`
				ROBERTGEROV started out in web design many years ago, and designed websites for big brands and rising startups alike. Seeing the evolution towards more audience-focused websites – and helped brands move with these changes as they happen.
				<br/>
				<br/>
				Whether you’re building a website for a new business or you’re ready for a transformation, his team of web designers  and brand specialists can help you show off your brand. We live in a mobile-first world, and we wouldn’t dream of starting a website without responsive designs for all devices. Redesigning a website is a big step for many businesses.
				<br/>
				<br/>

				There are big design decisions to make and many stakeholders’ views to consider. How you’re guided through the process is almost as important as what’s ultimately designed. We take an iterative, dialogue-based approach to design, exploring ideas and directions and leaving ample time and space for feedback and refinement.
				<br/>
				<br/>

				You’ll get a clear sense of what your options are and how they affect the overall design. And we’ll help guide the conversation to generate the most valuable, relevant feedback possible from your wider team. A true digital partner who helps brands make deeper connections with audiences and accelerates growth.
			`}
    />

    <div className="layout">
      <GivingBack />
    </div>

    <BlockMap />
  </Layout>
);
