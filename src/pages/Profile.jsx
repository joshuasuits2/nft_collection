import React from "react";
import { useNavigate } from "react-router-dom";
import PageContainer from "../components/layout/PageContainer";
import AuthUser from "../config/AuthUser";

const Profile = () => {
  const { token } = AuthUser();
  const navigate = useNavigate();
  if (!token) return navigate("/error");
  return (
    <div>
      <PageContainer></PageContainer>
    </div>
  );
};

export default Profile;
