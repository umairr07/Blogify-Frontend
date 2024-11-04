import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comment from "../components/Comment";
import { UserContext } from "../context/UserContext";
import { handleSuccess } from "../utils/Toast.jsx";

const PostDetails = () => {
  const [posts, setPosts] = useState(null);
  const [comments, setComments] = useState([]);
  const [inputComment, setInputComment] = useState("");
  const { user } = useContext(UserContext);
  console.log(user, "from postsdetails");

  const postId = useParams().id;

  const fetchPostDetails = async () => {
    try {
      const res = await fetch(`http://localhost:10000/api/v1/posts/${postId}`, {
        credentials: "include",
      });
      const data = await res.json();
      console.log(data, "data");
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPostDetails();
  }, []);

  const fetchComments = async () => {
    try {
      const res = await fetch(
        `http://localhost:10000/api/v1/comments/post/${postId}`,
        { credentials: "include" }
      );
      const data = await res.json();
      setComments(data.comments);
      console.log(comments, "comments");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const postComment = async () => {
    try {
      const res = await fetch("http://localhost:10000/api/v1/comments/add", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          comment: inputComment,
          author: user.user.username,
          postId: postId,
          userId: user.user._id,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        // Add new comment to the comments array
        setComments((prevComments) => [
          ...prevComments,
          {
            _id: data.comment._id,
            comment: inputComment,
            author: user.user.username,
            updatedAt: data.comment.updatedAt,
          },
        ]);
        setInputComment("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="flex flex-col border-2 border-black p-5 justify-center items-center gap-5 m-auto">
        <div>
          <p>{posts?.postDetails?.title}</p>
        </div>

        <div>
          <img
            src={posts?.postDetails?.photo}
            alt=""
            className=" w-[900px] h-[400px] rounded-lg object-cover"
          />
        </div>

        {/* description */}
        <div className=" w-[900px] ">
          <p>{posts?.postDetails?.desc}</p>
        </div>

        {/* categories */}
        <div className="flex">
          <h1>Categoires : </h1>
          <div className="flex gap-4 ">
            {posts?.postDetails?.categories?.map((cat, idx) => {
              return <p key={idx}>{cat}</p>;
            })}
          </div>
        </div>

        {/* comments */}
        <div>
          <div className="w-full flex flex-col mt-4 md:flex-row">
            <input
              value={inputComment}
              onChange={(e) => setInputComment(e.target.value)}
              type="text"
              placeholder="Write a comment"
              className="md:w-[80%] outline-none py-2 px-4 mt-4 md:mt-0"
            />
            <button
              onClick={postComment}
              className="bg-black text-sm text-white px-2 py-2 md:w-[20%] mt-4 md:mt-0"
            >
              Add Comment
            </button>
          </div>
          <h1>Comments : </h1>
          {comments.map((cmt) => {
            return (
              <div
                className="px-2 py-2 bg-gray-200 rounded-lg my-2"
                key={cmt._id}
              >
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
          })}
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
