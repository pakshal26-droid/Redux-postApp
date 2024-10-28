import React from "react";
import { reactionAdded } from "./postSlices";
import { useDispatch } from "react-redux";

function RectionButtons({ post }) {
  const dispatch = useDispatch();
  const reactionEmoji = {
    thumbsUp: "👍🏻",
  };
  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        onClick={() => {
          dispatch(reactionAdded({ postId: post.id, reaction: name }));
        }}
      >
        {emoji} {post.reactions[name]}
      </button>
    );
  });

  return <div>{reactionButtons}</div>;
}

export default RectionButtons;
