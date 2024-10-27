import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postSlices";
import { selectAllUsers } from "../users/usersSlice.js";

function AddPostForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const users = useSelector(selectAllUsers);

  const onTitleChanged = (e) => {
    setTitle(e.target.value);
  };
  const onContentChanged = (e) => {
    setContent(e.target.value);
  };
  const onAuthorChanged = (e) => {
    setUserId(e.target.value);
  };

  const onPostSaveClick = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId));

      setContent("");
      setTitle("");
    }
  };

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const userOptions = users.map((user) => (
    <option value={user.id} key={user.id}>
      {user.name}
    </option>
  ));

  // console.log(
  //   users.map((user) => {
  //     console.log(user.name);
  //     console.log(user.id);
  //   })
  // );

  return (
    <div className="w-11/12 mx-auto">
      <h2 className="text-3xl mt-10 font-semibold">Add Post</h2>
      <form className="mt-3 flex flex-col gap-y-1">
        <label className="text-xl font-medium" htmlFor="postTitle">
          Post Title:
        </label>
        <input
          className="bg-gray-200 rounded-md p-2 font-medium text-lg"
          type="text"
          name="postTitle"
          id="postTitle"
          value={title}
          onChange={onTitleChanged}
        />

        <label className="text-xl font-medium" htmlFor="postAuthor">
          Author:
        </label>
        <select
          className="bg-gray-200"
          id="postAuthor"
          value={userId}
          onChange={onAuthorChanged}
        >
          <option value=""></option>
          {userOptions}
        </select>

        <label className="text-xl font-medium" htmlFor="postContent">
          Content:
        </label>
        <textarea
          className="bg-gray-200 p-2 rounded-md font-medium text-lg"
          name="postContent"
          id="postContent"
          value={content}
          onChange={onContentChanged}
        />

        <button
          className="rounded-md bg-gray-600 h-11 text-white font-medium hover:bg-slate-700 transition-colors duration-300 ease-in-out mt-1"
          type="button"
          onClick={onPostSaveClick}
          disabled={!canSave}
        >
          Save Idea
        </button>
      </form>
    </div>
  );
}

export default AddPostForm;
