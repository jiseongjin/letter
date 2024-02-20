import { LayoutHeader, UserBox } from "components/styled/Styled";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Layout() {
  const userData = useSelector((state) => {
    return state.authSlice;
  });
  return (
    <LayoutHeader>
      <Link to={"/home"}>
        <p>HOME</p>
      </Link>
      <UserBox>
        <Link to={`/profile/${userData.id}`}>
          <p>내 프로필</p>
        </Link>
        <p>로그아웃</p>
      </UserBox>
    </LayoutHeader>
  );
}

export default Layout;
