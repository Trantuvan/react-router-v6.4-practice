import { Suspense } from "react";
import { Await, defer, useLoaderData } from "react-router-dom";

import { getSlowPosts } from "../util/api";
import Posts from "./Posts";

const DeferredBlogPostsPage = () => {
  const { posts } = useLoaderData();

  return (
    <>
      <h1>Our Blog Post</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={posts}>
          {(resolvedPosts) => <Posts blogPosts={resolvedPosts} />}
        </Await>
      </Suspense>
    </>
  );
};

export async function loader() {
  const posts = getSlowPosts();
  return defer({ posts });
}

export default DeferredBlogPostsPage;
