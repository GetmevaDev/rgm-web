import React from "react";

import { Layout } from "@/shared";
import {
  Banner,
  Block,
  BlockMap,
  Feedback,
  ImageBannerText,
  OutComes,
  Work,
} from "@/shared/ui";

const arr = [
  {
    id: 1,
    title: "Branding",
    description:
      "Our design team immediately began building a world class brand book including a new logo, color palette, business cards, letterhead, envelopes, pens, etc.",
  },
  {
    id: 2,
    title: "Integrated marketing",
    description:
      "We organized all her wants and needs and wrote all new content. The design team planned content placement and wireframed the website. We began to design the branding based on the 7 chakras of Buddhism. The heart chakra, or Anahata, is located near your heart, in the center of your chest; this was the logo inspiration. It comes as no surprise that the heart chakra is all about our ability to love and show compassion. We planned a complete user experience while maintaining encryption, website accessibility, content formatting, and SEO protocols.",
  },
];

export const CaseYagolawScreen = () => (
  <Layout title="Case yagolaw" description="Case yagolaw" size="nolayout">
    <div className="layout">
      <ImageBannerText
        subDescrption="Summary"
        transform="capitalize"
        title="YagoLaw.com"
        imageLight="/images/yagolaw-banner.svg"
        imageDark="/images/yagolaw-banner.svg"
        description={`
						Yago Law, wanted to build a new web presence that emulates their commitment to cut the complex legal speak in order for them to reach their audience in a new way.`}
        button="Visit Website"
      />

      <Block
        title="Overview"
        width={475}
        height={890}
        image="/images/banner-yagolaw.jpg"
        description={`
				There is no cookie cutter solution in family law and as such, we built a custom solution to simplify the first interaction for a new generation of clients. 
				<br/>
				<br/>

				Starting with branding and web design, YagoLaw wanted us to help establish them as the go-to Law Firm for a powerful, dedicated, and devoted team that will fight for each and every client. How do you reach a generation navigating one of life’s major milestones for the first time? You make things as simple as possible.
				<br/>
				<br/>

				Using our web development and SEO teams, we wanted to show how YagoLaw cuts out intimidating jargon and explains their fields of practice in a simple, human way; and then broadcast it on the web.  
				<br/>
				<br/>

				Our teams not only worked together to create an easy to navigate user interface, but also worked in conjunction with legal writers to bring it all together, with an empathetic tone in the verbiage. Empathy has long been used to make tough topics digestible - we embraced the term in every way so that we could expose YagoLaw’s capabilities in the best way possible.

			`}
      />
    </div>

    <Work size="two" arr={arr} />

    <div className="layout">
      <OutComes image="/images/out.jpg" />
    </div>
    <Feedback />

    <BlockMap />
  </Layout>
);
