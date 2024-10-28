import React from "react";
import { selectAllPosts } from "./postSlices.js";
import { useSelector, useDispatch } from "react-redux";
import PostAuthor from "./PostAuthor.jsx";
import PostAgo from "./PostAgo.jsx";
import RectionButtons from "./RectionButtons.jsx";

function PostsList() {
  //bringing all posts from the store
  const posts = useSelector(selectAllPosts);

  //For putting the new posts on top
  const ordererdPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <h2 className="text-4xl  w-11/12 mx-auto mt-10 font-semibold">
        Your Posts
      </h2>
      <div className="flex flex-row flex-wrap mx-auto justify-center gap-5 mt-5">
        {ordererdPosts.map((post) => {
          return (
            <div
              className="h-44 rounded-lg w-11/12 flex flex-col justify-center items-start px-5 bg-slate-200  "
              key={post.id}
            >
              <h3 className="text-xl font-semibold">Title: {post.title}</h3>
              <PostAuthor userId={post.userId} />
              <PostAgo timestamp={post.date} />
              <p className="">Content: {post.content.substring(0, 50)} ...</p>
              <RectionButtons post={post} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default PostsList;
