import { PostScreen } from "@/screens";
import { fetchAPI } from "@/shared/lib";

export async function getStaticProps({ params }) {
  const { data } = await fetchAPI(
    `blog-posts-pages/find-by-slug/${params.id}?populate=*`
  );

  const { data: data1 } = await fetchAPI("blog-posts-pages?populate=deep");
  const {
    data: { attributes },
  } = await fetchAPI("blog-page?populate=deep");

  if (!data && !data1 && !attributes) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
      data1,
      attributes,
    },
    revalidate: 60, // In seconds
  };
}
export async function getStaticPaths() {
  const { data } = await fetchAPI("blog-posts-pages?populate=deep");

  const paths = data?.map((post) => ({
    params: { id: post.attributes.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export default function BlogsPage({ data, data1, attributes }) {
  console.log(data, "data");
  return <PostScreen {...data} data1={data1} attr={attributes} />;
}
