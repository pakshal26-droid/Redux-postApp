import { parseISO, formatDistanceToNow } from "date-fns";
import React from "react";

function PostAgo({ timestamp }) {
  let timeAgo = "";
  if (timestamp) {
    const date = parseISO(timestamp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;
  }
  return (
    <div>
      <span title={timestamp}>
        &nbsp;<i>{timeAgo}</i>
      </span>
    </div>
  );
}

export default PostAgo;
