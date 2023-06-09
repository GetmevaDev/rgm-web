import { PostsScreen } from "@/screens";
import { fetchAPI } from "@/shared/lib";

export async function getStaticProps() {
  const { data } = await fetchAPI("blog-posts-pages?populate=deep");
  const {
    data: { attributes },
  } = await fetchAPI("blog-page?populate=deep");

  if (!data) {
    return {
      notFound: true,
    };
  }

  if (!attributes) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
      attributes,
    },
    revalidate: 60, // In seconds
  };
}

export default function Blog({ data, attributes }) {
  return <PostsScreen data={data} attributes={attributes} />;
}
