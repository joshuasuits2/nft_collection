import React from "react";
import { useNavigate } from "react-router-dom";
import AuthUser from "../config/AuthUser";

const Profile = () => {
  const { token } = AuthUser();
  const navigate = useNavigate();
  if (!token) return navigate("/error");
  return <div>Profile</div>;
};

export default Profile;
