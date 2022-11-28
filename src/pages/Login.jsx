import React from "react";
import styled from "styled-components";
import PageContainer from "../components/layout/PageContainer";
import { colors } from "../utils/constant";

const LoginStyles = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
`;

const Login = () => {
  return (
    <LoginStyles>
      <PageContainer className="">
        <div
          className="w-full max-w-[800px] mx-auto"
          style={{ color: colors.text }}
        >
          Login
        </div>
      </PageContainer>
    </LoginStyles>
  );
};

export default Login;
