import React from "react";
import { selectAllPosts } from "./postSlices.js";
import { useSelector, useDispatch } from "react-redux";
import PostAuthor from "./PostAuthor.jsx";
function PostsList() {
  const posts = useSelector(selectAllPosts);

  return (
    <>
      <h2 className="text-4xl  w-11/12 mx-auto mt-10 font-semibold">
        Your Posts
      </h2>
      <div className="flex flex-row flex-wrap mx-auto justify-center gap-5 mt-5">
        {posts.map((post) => {
          return (
            <div
              className="h-44 rounded-lg w-11/12 flex flex-col justify-center items-start px-5 bg-slate-200  "
              key={post.id}
            >
              <h3 className="text-xl font-semibold">Title: {post.title}</h3>
              <PostAuthor userId={post.userId} />
              <p className="">Content: {post.content.substring(0, 50)} ...</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default PostsList;
