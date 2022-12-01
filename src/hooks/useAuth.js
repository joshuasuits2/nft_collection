import { useEffect } from "react";
import { useState } from "react";
import AuthUser from "../config/AuthUser";

export default function useAuth() {
  const { http } = AuthUser();

  useEffect(() => {
    (async () => {
      const res = await http.get("/user");
      setUser(res.data.name);
    })();
  }, []);
  const getUser = () => {
    const userString = sessionStorage.getItem("user");
    const user_detail = JSON.parse(userString);
    return user_detail;
  };
  const [user, setUser] = useState(getUser);
  sessionStorage.setItem("user", JSON.stringify(user));
  return {
    user,
    setUser,
  };
}
