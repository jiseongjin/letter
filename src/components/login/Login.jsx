import {
  LoginBox,
  LoginButton,
  LoginInputText,
  LoginSection,
  LoginText,
  SignupButton,
} from "components/styled/LoginStyled";
import React from "react";

function Login({ toggleForm }) {
  return (
    <LoginSection>
      <LoginText>로그인</LoginText>
      <article>
        <LoginBox>
          <LoginInputText type="text" placeholder="아이디 (4~10글자)" />
          <LoginInputText type="password" placeholder="비밀번호 (4~15글자)" />
          <LoginButton>로그인</LoginButton>
        </LoginBox>
      </article>
      <article>
        <SignupButton onClick={toggleForm}>회원가입</SignupButton>
      </article>
    </LoginSection>
  );
}

export default Login;
