import { AboutScreen } from "@/screens";
import { fetchAPI } from "@/shared/lib";

export async function getStaticProps() {
  const {
    data: { attributes },
  } = await fetchAPI("about-page?populate=deep");

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

export default function About({ attributes }) {
  return <AboutScreen attributes={attributes} />;
}
