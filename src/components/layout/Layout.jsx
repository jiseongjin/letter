import { LayoutHeader, LogoutText, UserBox } from "components/styled/Styled";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function Layout() {
  const navigate = useNavigate();
  const userData = useSelector((state) => {
    return state.authSlice;
  });

  const onClickLogout = () => {
    localStorage.removeItem("accessToken");
    navigate("/");
  };
  return (
    <LayoutHeader>
      <Link to={"/home"}>
        <p>HOME</p>
      </Link>
      <UserBox>
        <Link to={`/profile/${userData.id}`}>
          <p>내 프로필</p>
        </Link>
        <LogoutText onClick={onClickLogout}>로그아웃</LogoutText>
      </UserBox>
    </LayoutHeader>
  );
}

export default Layout;
