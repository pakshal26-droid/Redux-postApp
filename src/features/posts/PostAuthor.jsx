import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";

import React from "react";

function PostAuthor({ userId }) {
  const users = useSelector(selectAllUsers);
  const author = users.find((user) => user.id == userId);
  return (
    <div>
      <h3 className="font-normal text-gray-700">
        by {author ? author.name : "Unknown"}
      </h3>
    </div>
  );
}

export default PostAuthor;
