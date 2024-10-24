import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { handleSuccess } from "../utils/Toast.jsx";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await fetch("http://localhost:10000/api/v1/auth/login", {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      const data = await res.json();
      console.log(data);

      setEmail("");
      setPassword("");

      if (res.ok) {
        handleSuccess(data.message);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex min-h-[80vh] items-center justify-center ">
        <div className="bg-white shadow-lg rounded-lg flex w-4/5 max-w-4xl overflow-hidden">
          <div className="w-1/2 bg-black text-white flex flex-col justify-center items-center p-8">
            <h2 className="text-2xl font-bold mb-4">Don't have an account?</h2>
            <p className="mb-6">Click below to create a new account</p>
            <Link
              to="/register"
              className="bg-white text-black py-2 px-4 rounded-md transition duration-300"
            >
              Register
            </Link>
          </div>

          <div className="w-1/2 p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 mt-10">
              Login
            </h2>

            <div className="mb-4 mt-10">
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
                placeholder="Enter your email"
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
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
