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
      "Our plan was to pull off the SEO migration of the century, afterall we planned a platform change and complete user experience update while maintaining website domain, encryption, content formatting, URL structure.",
  },
  {
    id: 2,
    title: "Integrated marketing",
    description:
      "Our 40 years of combined experience enables us to improve upon the search traffic this client was already receiving",
  },
  {
    id: 3,
    title: "Campaign",
    description:
      "We created additional Google Ads campaigns to capitalize and truly dominate the search results in the area.",
  },
];

export const CaseSmilesScreen = () => (
  <Layout
    title="All Smiles Dental Spa "
    description="Gentle Touch Endo set out to build a new web presence in order to increase their already existing search engine ranking, and to continue to close the gap in an underserved market."
    size="nolayout"
  >
    <div className="layout">
      <ImageBannerText
        subDescrption="Summary"
        transform="capitalize"
        title="All Smiles Dental Spa"
        imageLight="/images/smiles-banner.svg"
        imageDark="/images/smiles-banner.svg"
        description={`
						All Smiles Dental Spa set out to build a new website presence to increase their already existing search engine ranking and continue to close the gap in an underserved market.`}
        button="Visit Website"
      />

      <Block
        title="Overview"
        width={551}
        subTitle="Every Family is Unique."
        height={825}
        image="/images/smile.jpg"
        description={`
		All Smiles Dental Spa started in 2016 in East Meadow,NY as a luxurious dental spa. All Smiles had at the time hired RGM to build their first website and achieved extraordinary success overtaking top of page results on all their most valuable keywords and phrases. 
		<br/>
		<br/>

		In late 2020, All Smiles decided to rebuild with a new high end user experience, photography and videography. There was 1 caveat - we can’t lose our search engine rankings! Our experience in website migration makes this very attainable but a challenge none-the-less. 
		All Smiles Dental Spa offers something special to customers: a personal connection to patients, and it was our job to broadcast that message.
		<br/>
		<br/>

		We chose to build the websites on Strapi, a headless CMS, to provide a more powerful, more responsive and more secure experience for the user. The result was a cleaner, luxurious design and an over increase in organic search engine traffic.

			`}
      />
    </div>

    <Work size="three" arr={arr} title="work" />

    <OutComes image="/images/smiles-screen.jpg" title=" Outcomes" />

    <OutComes
      image="/images/smiles.jpg"
      color="gray"
      outcomes={false}
      description="Eastmeadowdentists.com Years of continuous growth displayed in the graph below."
      title="SEO Outcomes"
    />

    <KeywordProfile startCenter={13} startRight={25} />

    <BlockMap />
  </Layout>
);
