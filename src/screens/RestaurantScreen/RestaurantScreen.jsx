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

export const RestaurantScreen = () => (
  <Layout
    title="RESTAURANT WEBSITE DESIGN"
    description="Effective, Flavorful Restaurant Web Design"
    size="nolayout"
  >
    <div className="layout">
      <ImageBannerText
        transform="capitalize"
        title="RESTAURANT WEBSITE DESIGN"
        imageLight="/images/restaurant.svg"
        imageDark="/images/restaurant.svg"
        description="Effective, Flavorful Restaurant Web Design"
        button="BOOK AN APPOINTMENT"
      />

      <Block
        image="/images/rest.jpg"
        width={475}
        height={370}
        miniTitle="The RGM restaurant web design team creates visually stimulating and fully functional restaurant websites. RGM recognizes that the most important elements of a successful restaurant include an easy to read menu, online ordering functionality, and engaging writing that makes the viewers of your site eager to try your food. RGM’s web design, copywriting, and creative team will work together to create the perfect website for your restaurant."
      />

      <BigDescription
        description={`
			Your RGM Restaurant Website Design will include the following elements:
			<br/>
			Visually Appealing Design
			</br>
			</br>

			People will judge your restaurant on how good your website looks. RGM’s stunning graphics, meticulous color schemes, and beautiful design will help your restaurant stand out above the rest. RGM will also ensure that the layout of your site is easy for users to navigate.
			</br>
			</br>

		<h6>	Detailed Menu</h6>
			The most important part of any restaurant’s website is their menu. RGM will work with you to add the appropriate menus so that it’s easy for viewers to find and engaging to read.
			</br>
			</br>

		<h6>	Online Ordering</h6>
			RGM will include online ordering functionality on all restaurant websites, making it easy for your customers to purchase your food from the comfort of their home or business. Making it easy for viewers to purchase your food makes it easier for you to sell it.
			Multi-Device Functionality
			Your RGM restaurant website will be fully functional on mobile devices and tablets so that your customers can view your menu or order online no matter where they are.
			</br>
			</br>

			<h6>Compelling Content</h6>
			The beautifully written copy edited by the RGM copywriting team will inspire confidence in your restaurant and make your customer’s mouths water in anticipation of eating your food.
			</br>
			</br>

			<h6><a>Search Engine Optimization</a></h6>
			<br/>
			All RGM restaurant sites will be fully optimized for Google, Bing, and other search engines to keep your restaurant at the top of page results, making it easier for your customers to find you.
			</br>

			Social Media Integration
			All RGM restaurant websites will be integrated with your social media sites, including Facebook, Twitter, Yelp, and more.

			Local Internet Marketing
			RGM’s Local Internet Marketing services will utilize local online marketing strategies including local SEO, directories, and more, to reach customers in your community.
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
