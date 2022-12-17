import { useEffect } from "react";
import { useState } from "react";
import AuthUser from "../config/AuthUser";
import { hashString } from "react-hash-string";

export default function useAuth() {
  const { http } = AuthUser();
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const [userImage, setUserImage] = useState({ avatar: "", cover: "" });

  useEffect(() => {
    (async () => {
      try {
        const res = await http?.get("/user");
        setUser(hashString(res?.data?.name));
        setUserId(res?.data?.id);
        setUserName(res?.data?.name);
        setUserImage((prev) => {
          return {
            ...prev,
            avatar: res?.data?.avatar,
            cover: res?.data?.cover,
          };
        });
        console.log("avatar", res?.data?.avatar);
      } catch (error) {}
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
    userName,
    userImage,
    userId,
    setUser,
    setUserId,
    setUserName,
    setUserImage,
  };
}
