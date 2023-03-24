import { redirect, useActionData } from "react-router-dom";

import NewPostForm from "../components/NewPostForm";
import { savePost } from "../util/api";

function NewPostPage() {
  const data = useActionData();

  return (
    <>
      {data && data.status && <p>{data.message}</p>}
      <NewPostForm />
    </>
  );
}

async function action({ request }) {
  const formData = await request.formData();
  const { title, "post-text": postText } = Object.fromEntries(formData);
  const post = { title, body: postText };
  try {
    await savePost(post);
  } catch (error) {
    if (error.status === 422) {
      return error;
    }
  }
  return redirect(`/blog`);
}

export { action };
export default NewPostPage;
