import {
  LoginBox,
  LoginButton,
  LoginInputText,
  LoginSection,
  LoginText,
  SignupButton,
} from "components/styled/LoginStyled";
import React from "react";

function Signup({ toggleForm }) {
  return (
    <LoginSection>
      <LoginText>회원가입</LoginText>
      <article>
        <LoginBox>
          <LoginInputText type="text" placeholder="아이디 (4~10글자)" />
          <LoginInputText type="password" placeholder="비밀번호 (4~15글자)" />
          <LoginInputText type="password" placeholder="닉네임 (1~10글자)" />
          <LoginButton>회원가입</LoginButton>
        </LoginBox>
      </article>
      <article>
        <SignupButton onClick={toggleForm}>로그인</SignupButton>
      </article>
    </LoginSection>
  );
}

export default Signup;
