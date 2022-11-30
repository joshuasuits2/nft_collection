import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import LoginHookForm from "../components/form/LoginHookForm";
import PageContainer from "../components/layout/PageContainer";
import AuthUser from "../config/AuthUser";

const LoginStyles = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  .subtitle {
    background: linear-gradient(180deg, #ddb9ff 0%, #a749f8 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const Login = () => {
  const { http, setToken, token } = AuthUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (token) return navigate("/");
  }, [navigate, token]);
  return (
    <LoginStyles className="body-style">
      <PageContainer>
        <div className="mt-[60px] w-full max-w-[560px]  mx-auto rounded-2xl bg-[#2C2C35]   flex flex-col p-10 items-center">
          <Link
            to="/"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            <div className="w-[200px] mb-10">
              <img
                srcSet="./logo.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </Link>
          <LoginHookForm http={http} setToken={setToken}></LoginHookForm>
        </div>
      </PageContainer>
    </LoginStyles>
  );
};

export default Login;
