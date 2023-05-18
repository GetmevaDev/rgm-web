import { CaseSmilesScreen } from "@/screens";
import { fetchAPI } from "@/shared/lib";

export async function getStaticProps() {
  const {
    data: { attributes },
  } = await fetchAPI("case-smiles-page?populate=deep");

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

export default function CaseSmiles({ attributes }) {
  console.log(attributes, "attr");

  return <CaseSmilesScreen attributes={attributes} />;
}
