import { Form, useNavigate, useNavigation } from "react-router-dom";
import classes from "./NewPostForm.module.css";

function NewPostForm() {
  const navigate = useNavigate();
  const navigation = useNavigation();

  return (
    <Form className={classes.form} method="post" action="/blog/new">
      <fieldset>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" required minLength={5} />
      </fieldset>
      <fieldset>
        <label htmlFor="text">Post Text</label>
        <textarea
          id="text"
          name="post-text"
          required
          minLength={10}
          rows={5}
        ></textarea>
      </fieldset>
      <button
        type="button"
        disabled={navigation.state === "submitting"}
        onClick={() => navigate("/blog")}
      >
        Cancel
      </button>
      <button>
        {navigation.state === "idle" ? "Create Post" : "Submitting..."}
      </button>
    </Form>
  );
}

export default NewPostForm;
