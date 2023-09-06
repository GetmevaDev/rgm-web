import Head from "next/head";

import { HomeScreen } from "@/screens";
import { fetchAPI } from "@/shared/lib";

export async function getStaticProps() {
  const {
    data: { attributes },
  } = await fetchAPI("homepage?populate=deep");

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

export default function Home({ attributes }) {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeScreen attributes={attributes} />
    </>
  );
}
