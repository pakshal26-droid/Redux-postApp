import { useState } from "react";

import "./App.css";
import PostsList from "./features/posts/PostsList.jsx";
import AddPostForm from "./features/posts/AddPostForm.jsx";

function App() {
  return (
    <>
      <AddPostForm />
      <PostsList />
    </>
  );
}

export default App;
