import React from "react";
import { reactionAdded } from "./postSlices";
import { useDispatch } from "react-redux";
import thumbsUp from "../../../public/assets/thumbsup.png";

function RectionButtons({ post }) {
  const dispatch = useDispatch();
  const reactionEmoji = {
    thumbsUp: thumbsUp,
  };
  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        className="mt-1"
        onClick={() => {
          dispatch(reactionAdded({ postId: post.id, reaction: name }));
        }}
      >
        <span className="flex size-1/2 items-start text-md gap-x-1">
          <img src={emoji} alt="" /> {post.reactions[name]}
        </span>
      </button>
    );
  });

  return <div>{reactionButtons}</div>;
}

export default RectionButtons;
