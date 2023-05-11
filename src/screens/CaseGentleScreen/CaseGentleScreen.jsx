import React from "react";

import { Layout } from "@/shared";
import {
  Banner,
  Block,
  BlockMap,
  Feedback,
  ImageBannerText,
  KeywordProfile,
  OutComes,
  Work,
} from "@/shared/ui";

const arr = [
  {
    id: 1,
    title: "Strategy",
    description:
      "We organized all her wants and needs and wrote all new content. The design team planned content placement and wireframed the website. We began to design the branding based on the 7 chakras of Buddhism. The heart chakra, or Anahata, is located near your heart, in the center of your chest; this was the logo inspiration. It comes as no surprise that the heart chakra is all about our ability to love and show compassion. We planned a complete user experience while maintaining encryption, website accessibility, content formatting, and SEO protocols.",
  },
  {
    id: 2,
    title: "Integrated marketing",
    description:
      "40 years of combined experience enabled us to create a search presence to rival competitors in her niche that were years ahead.",
  },
  {
    id: 3,
    title: "Campaign",
    description:
      "We created additional Google Ads campaigns to capitalize and truly dominate the search results in the area.",
  },
];

export const CaseGentleScreen = () => (
  <Layout
    title="Gentle Touch Endo"
    description="Gentle Touch Endo set out to build a new web presence in order to increase their already existing search engine ranking, and to continue to close the gap in an underserved market."
    size="nolayout"
  >
    <div className="layout">
      <ImageBannerText
        subDescrption="Summary"
        transform="capitalize"
        title="Gentle Touch Endo"
        imageLight="/images/gentle-banner.svg"
        imageDark="/images/gentle-banner.svg"
        description={`
						Gentle Touch Endo set out to build a new web presence in order to increase their already existing search engine ranking, and to continue to close the gap in an underserved market.`}
        button="Visit Website"
      />

      <Block
        title="Overview"
        width={475}
        height={690}
        image="/images/meditation.jpg"
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

    <Work size="three" arr={arr} />

    <div className="layout">
      <OutComes image="/images/out-2.jpg" />
    </div>

    <KeywordProfile startCenter={7} numbers color="gray" />

    <BlockMap />
  </Layout>
);
