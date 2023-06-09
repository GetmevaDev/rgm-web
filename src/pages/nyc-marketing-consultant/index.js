import { NycMarketingScreen } from "@/screens";
import { fetchAPI } from "@/shared/lib";

export async function getStaticProps() {
  const {
    data: { attributes },
  } = await fetchAPI("nyc-marketing-consultant-page?populate=deep");

  if (!attributes) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      attributes,
    },
    revalidate: 60, // In seconds
  };
}

export default function NycMarketing({ attributes }) {
  return <NycMarketingScreen attributes={attributes} />;
}
