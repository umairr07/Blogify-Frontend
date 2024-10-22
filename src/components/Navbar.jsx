import blogify from "../utils/blogify.avif";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const user = false;
  return (
    <div>
      <div className="flex items-center justify-between px-6 md:px-[200px] py-4">
        <Link to={"/"}>
          <img src={blogify} alt="Blogify" className="h-24" />
        </Link>

        <div className="hidden md:flex items-center justify-center space-x-2 md:space-x-4">
          {user ? (
            <button className="text-xl font-medium">
              <Link to={"/create"}>Create Post</Link>
            </button>
          ) : (
            <button className="text-xl font-medium w-[100px]">
              <Link to={"/login"}>Login</Link>
            </button>
          )}

          {user ? (
            <button className="text-xl font-medium w-[100px]">
              <Link to={"/profile"}>
                <CgProfile />
              </Link>
            </button>
          ) : (
            <button className="text-xl font-medium w-[100px]">
              <Link to={"/register"}>Register</Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
