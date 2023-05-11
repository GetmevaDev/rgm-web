import React from "react";

import { Layout } from "@/shared";
import {
  Awards,
  Banner,
  Block,
  BlockMap,
  BridgeBusiness,
  FeaturedPress,
  ImageBannerText,
  OurServices,
} from "@/shared/ui";

export const HomeScreen = () => (
  <Layout title="Home" description="home" size="nolayout">
    <div className="layout">
      <ImageBannerText
        title="Robert Gerov"
        subTitle="Media"
        description="An award-winning Digital Agency based in New York"
        button="BOOK A FREE REVIEW"
        images
        imageLight="/images/banner-home-light.svg"
        imageDark="/images/banner-home-dark.svg"
      />
      <Banner />
      <BridgeBusiness />
    </div>

    <OurServices />
    <div className="layout">
      <Block
        image="/images/hacker.jpg"
        title="Our Development Process"
        reverse
        width={475}
        height={650}
        description={`
        As soon as you get in touch with us, we’ll shortly connect with you to hear all about your business, needs, and what your goals are. Once our customer service team has shared a brief with you, we’ll pass it on to the analytics team who’ll assess what solutions we can come up with for you before the real work happens.
        <br/>
        <br/>

        Working closely together, our award-winning team of UX/UX designers, software developers, and marketing strategists will proceed to creating your custom product. Before its final release, we’ll go through rounds of beta testing to get your feedback & refine everything to perfection. 
        <br/>
        <br/>

        But even when it’s ready—we don’t just leave it at that. From analytics to maintenance, we’re just as committed to supporting after to make sure you’re seeing the results & evolving your systems as you continue to grow.
        `}
      />
    </div>

    <Awards />
    <div className="layout">
      <FeaturedPress />
    </div>

    <BlockMap />
  </Layout>
);
