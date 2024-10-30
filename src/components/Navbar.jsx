import blogify from "../utils/blog-app.png";
import { Link } from "react-router-dom";
// import { CgProfile } from "react-icons/cg";
// import { CiMenuKebab } from "react-icons/ci";
import { useContext, useState } from "react";
// import Menu from "./Menu.jsx";
// import { SlOptionsVertical } from "react-icons/sl";
import { UserContext } from "../context/UserContext.jsx";
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  // const user = true;
  const [menu, setMenu] = useState(false);

  // const handleMenu = () => {
  //   setMenu(!menu);
  // };

  return (
    <div>
      <div className="flex items-center justify-between mt-2 p-4 shadow-lg">
        <Link to={"/"}>
          <img
            src={blogify}
            alt="Blogify"
            className="lg:w-[100px] sm:w-[100px] lg:ml-24"
          />
        </Link>

        {user && (
          <div className="flex items-center w-full max-w-[500px] mx-auto border border-gray-300 rounded-full p-2">
            <input
              type="text"
              name="text"
              id="text"
              className="flex-grow px-4 py-2 text-sm text-gray-800 focus:outline-none rounded-full "
              placeholder="Search for blogs"
            />
            <button
              type="submit"
              className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition"
            >
              <IoSearchOutline className="text-gray-600 text-lg" />
            </button>
          </div>
        )}

        <div className="lg:flex lg:items-center md:flex gap-10 sm:hidden ">
          {user ? (
            <button className="text-xl">
              <Link to={"/create"}>Create Post</Link>
            </button>
          ) : (
            <button className="text-xl">
              <Link to={"/login"}>Login</Link>
            </button>
          )}

          <div className="flex items-center gap-5">
            {/* <div className=" cursor-pointer lg:hidden" onClick={handleMenu}>
              <SlOptionsVertical />
              {menu && <Menu />}
            </div> */}

            {user ? (
              <button className="text-xl">
                <Link to={`/userdetails`}>
                  <p className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white w-[35px] h-[35px] flex items-center justify-center rounded-full border-2 border-transparent shadow-lg transform transition-transform duration-300 hover:scale-110">
                    {user ? (
                      user?.user?.username?.toUpperCase()?.slice(0, 1)
                    ) : (
                      <button className="text-xl">
                        <Link to={"/register"}>Register</Link>
                      </button>
                    )}
                  </p>
                </Link>
              </button>
            ) : (
              <button className="text-xl">
                <Link to={"/register"}>Register</Link>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
