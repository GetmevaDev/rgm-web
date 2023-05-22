import { PrivacyPolicyScreen } from "@/screens";
import { fetchAPI } from "@/shared/lib";

export async function getStaticProps() {
  const {
    data: { attributes },
  } = await fetchAPI("privacy-policy-page?populate=deep");

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

export default function PrivacyPolicy({ attributes }) {
  return <PrivacyPolicyScreen attributes={attributes} />;
}
