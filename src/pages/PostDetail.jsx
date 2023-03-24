import { useLoaderData } from "react-router-dom";

import BlogPost from "../components/BlogPost";
import { getPost } from "../util/api";

function PostDetailPage() {
  const { post } = useLoaderData();

  return <BlogPost title={post.title} text={post.body} />;
}

async function loader({ params }) {
  const post = await getPost(params.id);
  return { post };
}

export { loader };
export default PostDetailPage;
