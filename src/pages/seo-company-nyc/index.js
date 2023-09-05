import { SeoComponyScreen } from "@/screens";
import { fetchAPI } from "@/shared/lib";

export async function getStaticProps() {
  const {
    data: { attributes },
  } = await fetchAPI("seo-service-page?populate=deep");

  const { data } = await fetchAPI("reviews?populate=deep");

  if (!attributes && !data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      attributes,
      data,
    },
    revalidate: 60, // In seconds
  };
}
export default function SeoCompany({ attributes, data }) {
  return <SeoComponyScreen attributes={attributes} reviews={data} />;
}
