import React from "react";

import { Layout } from "@/shared";
import {
  BigDescription,
  Block,
  BlockMap,
  GivingBack,
  ImageBannerText,
  Slider,
} from "@/shared/ui";

export const BusinessScreen = () => (
  <Layout
    title="BUSINESS WEBSITE DESIGN"
    description="We understand the importance of creating a professional business web design that inspires your audience and generates clientele."
    size="nolayout"
  >
    <div className="layout">
      <ImageBannerText
        transform="capitalize"
        title="BUSINESS WEBSITE DESIGN"
        imageLight="/images/busines.jpg"
        imageDark="/images/busines.jpg"
        description="We understand the importance of creating a professional business web design that inspires your audience and generates clientele."
        button="BOOK AN APPOINTMENT"
      />

      <Block
        image="/images/bus.jpg"
        width={475}
        height={370}
        miniTitle="We have worked with clients in a wide array of industries and understand that each brand is unique, so we develop highly individualized business web design that are visually-appealing and reflect your company and brand’s personality."
        description="To create these unique business web designs we focus on understanding your brand’s story and objectives and analyzing your target audience’s behaviors and interests."
      />

      <BigDescription
        description={`
		With this information, we create a business website design that reflects your brand narrative and provides a seamless and enjoyable user experience.
		</br>
		</br>

		Your website is the core of your digital presence and presents itself as the face of your particular brand and business. Our professional business web design team creates a personal and direct connection to your brand’s audience through stunning visual designs that reflect your brand’s image and colors, and compelling copy written in your brand voice. Every RGM business web design is completely search engine optimized, ensuring that your page is prominently ranked so that your audience can easily find you. All content is written to be engaging as well as highly optimized for competitive keywords. All images, tags, and meta data are also fully optimized, and all of our business web designs are error-free with quick load times.
		</br>
		</br>

		During our initial analysis of your brand’s target audience, we devise business web design plan that will be optimized for each specific user’s experience. Our designers work hand in hand with developers to create an intuitive layout and page sequence that provides the viewer with a pleasant and engaging experience, all while leading them toward a call to action. No matter what the goal of your website, our professional business web design staff focuses on encouraging your viewers to take action. The viewer will see visual as well as written cues to make a purchase, ask for more information, make an appointment, or any other goal. Your business web design will also be fully integrated with Social Media, allowing viewers to transition seamlessly between your pages, widening your brand’s digital reach.
		</br>
		</br>

		All RGM business web designs are designed for full functionality on mobile, further extending your digital presence and allowing your audience to view your website from anywhere. Depending on your brand’s goals and audience, RGM can also create mobile versions of any business web design for easier browsing or purchasing on a smartphone or tablet.
	`}
      />
    </div>

    <Slider />

    <div className="layout">
      <GivingBack />
    </div>

    <BlockMap />
  </Layout>
);
