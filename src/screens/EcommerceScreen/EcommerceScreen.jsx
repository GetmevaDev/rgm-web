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

export const EcommerceScreen = () => (
  <Layout
    title="ECOMMERCE"
    description="We are a fast growing eCommerce giant with offices across the globe. With strategists, consultants, designers, and developers with decades of experience."
    size="nolayout"
  >
    <div className="layout">
      <ImageBannerText
        transform="capitalize"
        title="ECOMMERCE"
        imageLight="/images/web.svg"
        imageDark="/images/web.svg"
        description={`
						We are a fast growing eCommerce giant with offices across the globe. With strategists, consultants, designers, and developers with decades of experience.`}
        button="BOOK AN APPOINTMENT"
      />

      <Block
        width={551}
        height={825}
        miniTitle="Many sites give customers a way to make a
					purchase. What’s harder to deliver is a great
					experience across the entire digital journey,
					from discovery to purchasing decision."
        image="/images/ecommerce.jpg"
        description={`
				As online competition <b>increases</b>, margin pressures grow, and your audience becomes more and more discriminating, making effective eCommerce website design even more critical.
					</br>
					</br>
				There are best practices in <b>eCommerce</b>, but no magic formulas. Success requires a delicate balance of business savvy, brand strategy, user experience, content, and intuitive design. Getting it right means finding your “sweet spot” – as well as a willingness to test constantly, so you can iterate and learn.
					</br>
					</br>

				When you partner with us, years of eCommerce experience are just a starting point. we apply an <b>in-depth</b>, problem-solving approach to your brand and business challenges. We don’t just check boxes to deliver a digital storefront – we create <b>experiences</b> that drive your brand forward.
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
