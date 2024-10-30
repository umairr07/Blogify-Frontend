import React from "react";
import PropTypes from "prop-types";

const Comment = ({ cmt, posts }) => {
  console.log(cmt, posts);
  console.log(cmt?.author, "author");

  return (
    <div className="px-2 py-2 bg-gray-200 rounded-lg my-2">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-gray-600">@{cmt.author}</h3>
        <div className="flex justify-center items-center space-x-4">
          <p>{new Date(cmt.updatedAt).toString().slice(0, 15)}</p>
          <p>{new Date(cmt.updatedAt).toString().slice(16, 24)}</p>
        </div>
      </div>
      <p className="px-4 mt-2">{cmt.comment}</p>
    </div>
  );
};

Comment.propTypes = {
  cmt: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    updatedAt: PropTypes.string.isRequired,
    profileImage: PropTypes.string, // Optional if a default image is used
  }).isRequired,
  posts: PropTypes.array, // Define further if needed
};

export default Comment;
