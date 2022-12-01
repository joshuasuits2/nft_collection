import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SignUpHookForm from "../components/form/SignupHookForm";
import PageContainer from "../components/layout/PageContainer";
import AuthCreate from "../config/AuthCreate";

const SignUpStyles = styled.div`
  width: 100%;
  height: 110vh;
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

const SignUp = () => {
  const { http } = AuthCreate();
  return (
    <SignUpStyles className="body-style">
      <PageContainer>
        <div className="mt-[60px] w-full max-w-[560px]  mx-auto rounded-2xl bg-[#2C2C35] zz flex flex-col p-10 items-center">
          <Link
            to="/"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            <div className="w-[200px]">
              <img
                srcSet="./logo.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </Link>
          <SignUpHookForm http={http}></SignUpHookForm>
        </div>
      </PageContainer>
      <div className="h-10"></div>
    </SignUpStyles>
  );
};

export default SignUp;
