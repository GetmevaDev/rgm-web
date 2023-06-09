import React from "react";

import { Layout } from "@/shared";
import {
  BlockMap,
  GivingBack,
  ImageBannerText,
  MainPost,
  Post,
} from "@/shared/ui";

export const PostScreen = ({ attr, attributes, id, data1 }) => (
  <Layout
    title={attr?.seo?.title}
    description={attr?.seo?.description}
    image={attr?.seo?.image}
    twitterCard={attr?.seo?.twitter_card}
    twitterDescription={attr?.seo?.twitter_description}
    twitterDomain={attr?.seo?.twitter_domain}
    twitterImage={attr?.seo?.twitter_image}
    twitterTitle={attr?.seo?.twitter_title}
    twitterUrl={attr?.seo?.twitter_url}
    size="nolayout"
  >
    <div className="layout">
      <ImageBannerText
        transform="capitalize"
        title={attr?.banner?.title}
        description={attr?.banner?.description}
        button={attr?.banner?.button}
        buttonLink={attr?.banner?.button_link}
        imageLight={attr?.banner?.image_light?.data?.attributes?.url}
        imageDark={attr?.banner?.image_dark?.data?.attributes?.url}
      />

      <MainPost
        data1={data1}
        title={attributes?.title}
        description={attributes?.description}
        image={attributes?.image?.data?.attributes?.url}
        alt={attributes?.image?.data?.attributes?.name}
        date={attributes?.createdAt}
        id={id}
      />
    </div>
    <div className="layout">
      <GivingBack />
    </div>

    <BlockMap />
  </Layout>
);

// {
//   reverseData?.slice(0, 3).map((post) => {
//     const resDate = new Date(post?.attributes?.createdAt);
//     const resFormDate = format(resDate, "d MMMM yyyy", {
//       locale: en,
//     });
//     return (
//       <Link href={post?.id.toString()}>
//         <div className={styles.latest_post}>
//           <div className={styles.latest_title}>{post?.attributes?.title}</div>
//           <div className={styles.latest_date}>{resFormDate}</div>
//         </div>
//       </Link>
//     );
//   });
// }
