import axios from "axios";
import {
  LoginBox,
  LoginButton,
  LoginInputText,
  LoginSection,
  LoginText,
  SignupButton,
} from "components/styled/LoginStyled";
import React, { useState } from "react";

function Signup({ toggleForm }) {
  const [user, setUser] = useState({
    id: "",
    password: "",
    nicknickname: "",
  });

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    try {
      const result = await axios.post(
        "https://moneyfulpublicpolicy.co.kr/register",
        user
      );
      alert(result.data.message);
      toggleForm();
    } catch (error) {
      alert("회원가입 오류:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const validateForm = () => {
    if (user.id.length < 4 || user.id.length > 10) {
      alert("아이디는 4~10글자여야 합니다.");
      return false;
    }
    if (user.password.length < 4 || user.password.length > 15) {
      alert("비밀번호는 4~15글자여야 합니다.");
      return false;
    }
    if (user.nickname.length < 1 || user.nickname.length > 10) {
      alert("닉네임은 1~10글자여야 합니다.");
      return false;
    }
    return true;
  };
  return (
    <LoginSection>
      <LoginText>회원가입</LoginText>
      <article>
        <LoginBox onSubmit={onSubmitHandler}>
          <LoginInputText
            name="id"
            value={user.id}
            onChange={handleInputChange}
            type="text"
            placeholder="아이디 (4~10글자)"
          />
          <LoginInputText
            name="password"
            value={user.password}
            onChange={handleInputChange}
            type="password"
            placeholder="비밀번호 (4~15글자)"
          />
          <LoginInputText
            name="nickname"
            value={user.nickname}
            onChange={handleInputChange}
            type="text"
            placeholder="닉네임 (1~10글자)"
          />
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
