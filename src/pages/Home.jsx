import { useContext, useEffect, useState } from "react";
import HomePosts from "../components/HomePosts";
import Loader from "../loader/Loader";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";

const Home = () => {
  const [postData, setPostData] = useState([]);
  const { user } = useContext(UserContext);

  const fetchPosts = async () => {
    try {
      const res = await fetch("http://localhost:10000/api/v1/posts/");
      const data = await res.json();
      setPostData(data.posts);
      // console.log(postData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="px-8 md:px-[200px] min-h-[80vh] mt-20">
      {/* <div className="flex justify-center items-center m-auto">
        <Loader />
      </div> */}
      {postData?.map((post, idx) => {
        return (
          <div key={idx}>
            <Link to={user ? `post/posts/${post._id}` : "/login"}>
              <HomePosts key={post._id} post={post} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
