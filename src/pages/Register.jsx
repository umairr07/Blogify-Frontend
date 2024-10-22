import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { URL } from "../utils/url";
import { handleSuccess } from "../utils/Toast";
import { ToastContainer } from "react-toastify";

const Register = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // console.log(username, email, password);

  const handleRegisteration = async () => {
    try {
      const response = await fetch(
        "http://localhost:10000/api/v1/auth/register",
        {
          method: "POST",
          body: JSON.stringify({
            username,
            email,
            password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();

      setUserName(data.user.username);
      setEmail(data.user.email);
      setPassword(data.user.password);

      console.log(data);

      setUserName("");
      setEmail("");
      setPassword("");

      if (response.ok) {
        handleSuccess(data.message);

        setTimeout(() => {
          navigate("/login");
        }, 1500);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex min-h-[80vh] items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg flex w-4/5 max-w-4xl overflow-hidden">
          <div className="w-1/2 p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Register</h2>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter your username"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter your email (original)"
              />
            </div>

            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black border-2 text-white py-2 px-4 rounded-md hover:bg-white hover:text-black hover:border-black transition duration-300"
              onClick={handleRegisteration}
            >
              Sign Up
            </button>
          </div>

          <div className="w-1/2 bg-black text-white flex flex-col justify-center items-center p-8">
            <h2 className="text-2xl font-bold mb-4">
              Already have an account?
            </h2>
            <p className="mb-6">
              Click below to login if you already have an account
            </p>
            <Link
              to="/login"
              className="bg-white text-black py-2 px-4 rounded-md hover:bg-gray-200 transition duration-300"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Register;
