import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    try {
      const res = await fetch(
        "http://localhost:10000/api/v1/user/userdetails",
        {
          credentials: "include",
        }
      );

      if (res.ok) {
        const data = await res.json();
        setUser(data || null); // Set user data if available, else set null
      } else {
        setUser(null); // Set to null if response is not OK (e.g., 401 Unauthorized)
      }
    } catch (error) {
      console.log("Error fetching user:", error);
      setUser(null); // Ensure user is null if fetch fails
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
