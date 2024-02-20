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
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { liginData } from "shared/redux/modules/authSlice";

function Login({ toggleForm }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    id: "",
    password: "",
  });

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        "https://moneyfulpublicpolicy.co.kr/login",
        login
      );
      console.log(result);
      dispatch(liginData(result.data));
      localStorage.setItem("token", result.data.accessToken);
      alert("로그인 되었습니다");
      navigate(`home/${result.data.userId}`);
    } catch (error) {
      alert(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLogin({
      ...login,
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
            value={login.id}
            onChange={handleInputChange}
            type="text"
            placeholder="아이디 (4~10글자)"
          />
          <LoginInputText
            name="password"
            value={login.password}
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
