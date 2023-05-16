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

export const LawyerScreen = () => (
  <Layout
    title="LAWYER WEBSITE DESIGN"
    description="Confidence Inspiring Lawyer Website Design."
    size="nolayout"
  >
    <div className="layout">
      <ImageBannerText
        transform="capitalize"
        title="LAWYER WEBSITE DESIGN"
        imageLight="/images/web.svg"
        imageDark="/images/web.svg"
        description="Confidence Inspiring Lawyer Website Design."
        button="BOOK AN APPOINTMENT"
      />

      <Block
        image="/images/lawyer.jpg"
        width={475}
        height={370}
        miniTitle="RGM’s law firm website designs give you the competitive edge through our intuitive and aggressive Lawyer Website Design."
        description="RGM will conceptualize, design, manage, and market websites for lawyers and law firms of all sizes. Every site that RGM creates is eye-catching with bold graphics, easy to navigate layouts, professional photography, and interesting well-written copy. Our lawyer website designs are no exception."
      />

      <BigDescription
        description={`
				Each medical website features stunning graphics, user-friendly layouts, professional photography, and informative and engaging content that will help you impress prospective patients and ensure that booking an appointment is simple and effortless for your current patients. With RGM’s Doctor Website Design experience, you will increase your practice’s credibility and expand your patient base.
				</br>
				</br>
				RGM knows what your patients want in their doctor’s website.
				</br>
				</br>

				Here are some of the features that are included in every RMG Doctor Website Design:
				Patient Reviews—Many patients find out about doctors through other’s reviews, and in today’s age some of the best advertisement for a medical practice comes not through the traditional word of mouth, but from online reviews. RGM will design an easy to use patient review section on your website where patients can review your services, and prospective patients can learn more about your practice.
				</br>
				</br>

				<a>	Appointment Software</a>—The ease of making an appointment can greatly affect a patient’s likelihood to visit a particular doctor. Meva’s appointment manager makes it extremely simple for patients to book an appointment, allowing you to increase your patient base.
				</br>
				</br>

				Multi-Device Compatibility—All of RGM’s Doctor websites are designed to operate at full functionality on smartphones, tablets, and computers. Your patients can add a review of your practice on their iPhone right when they leave your office, or book an appointment on their tablet.
				</br>
				</br>

				<a>Search Engine Optimization</a> – RMG will optimize your website to keep your site high on Google, Bing, and other search engines so that it’s easier for your patients to find you.
				Social Media Integration—RMG will help you create, optimize, and manage social media sites like Facebook and Twitter, and integrate them with your site.
				</br>
				</br>

				<a>Text Reminders</a> – With Our Mobile Marketing Platform you can connect with your patients via SMS, Use our mobile appointment management tools to ensure fewer no-shows, and more efficient schedule with less human resources.
				Local Internet Marketing – Doctors typically serve a specific city or region, it is crucial to target your online marketing to a local audience. RMG provides a range of local Internet marketing services. We offer display ads, search engine optimization, directory listings and social media promotion.
				Doctors’ Blog – A doctor’s blog is one of the most important features of a doctor’s website, and can help drive more visitors to your site with relevant doctor SEO today for Doctors SEO. RMG works on creating engaging content based on your area of specialty and distribute it via Social Media Marketing. This effective tool engages an audience and drives more visitors to your site.
				
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
