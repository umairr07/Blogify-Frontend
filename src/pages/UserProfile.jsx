import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { handleSuccess } from "../utils/Toast";

const UserProfile = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await fetch("http://localhost:10000/api/v1/auth/logout", {
        credentials: "include",
      });
      const data = await res.json();
      console.log(data);
      setUser(null);
      if (res.ok) {
        handleSuccess(data.message);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserProfile;
