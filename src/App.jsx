import { createBrowserRouter, RouterProvider } from "react-router-dom";

import BlogLayout from "./pages/BlogLayout";
// import BlogPostsPage, { loader as blogPostsLoader } from "./pages/BlogPosts";
import NewPostPage, { action as newPostAction } from "./pages/NewPost";
import PostDetailPage, { loader as postDetailLoader } from "./pages/PostDetail";
import RootLayout from "./components/RootLayout";
import WelcomePage from "./pages/Welcome";
import ErrorPage from "./pages/errorPage";
import DeferredBlogPostsPage, {
  loader as deferedBlogLoader,
} from "./components/DeferredBlogPostsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <WelcomePage /> },
          {
            path: "blog",
            element: <BlogLayout />,
            children: [
              {
                index: true,
                element: <DeferredBlogPostsPage />,
                loader: deferedBlogLoader,
              },
              {
                path: ":id",
                element: <PostDetailPage />,
                loader: postDetailLoader,
              },
            ],
          },
          { path: "blog/new", element: <NewPostPage />, action: newPostAction },
          { path: "*", element: <div>Not Found page</div> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
