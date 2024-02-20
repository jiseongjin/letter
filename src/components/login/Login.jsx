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
import { useNavigate } from "react-router-dom";

function Login({ toggleForm }) {
  const navigate = useNavigate();
  const [isLoggedin, setIsLoggedin] = useState({
    id: "",
    password: "",
  });

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        "https://moneyfulpublicpolicy.co.kr/login",
        isLoggedin
      );
      localStorage.setItem("accessToken", result.data.accessToken);
      alert("로그인 되었습니다");
      navigate("/home");
    } catch (error) {
      alert("아이디,비밀번호를 확인 해 주세요");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setIsLoggedin({
      ...isLoggedin,
      [name]: value,
    });
  };
  return (
    <LoginSection>
      <LoginText>로그인</LoginText>
      <article>
        <LoginBox onSubmit={onSubmitHandler}>
          <LoginInputText
            name="id"
            value={isLoggedin.id}
            onChange={handleInputChange}
            type="text"
            placeholder="아이디 (4~10글자)"
          />
          <LoginInputText
            name="password"
            value={isLoggedin.password}
            onChange={handleInputChange}
            type="password"
            placeholder="비밀번호 (4~15글자)"
          />
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
