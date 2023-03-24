import { useLoaderData } from "react-router-dom";

import Posts from "../components/Posts";
import { getPosts } from "../util/api";

function BlogPostsPage() {
  const { posts } = useLoaderData();
  const reverse = Array.from(posts).reverse();

  return (
    <>
      <h1>Our Blog Posts</h1>
      <Posts blogPosts={reverse} />
    </>
  );
}

async function loader() {
  const posts = await getPosts();
  return { posts };
}

export { loader };
export default BlogPostsPage;
