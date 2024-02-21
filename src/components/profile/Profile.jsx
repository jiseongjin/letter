import {
  MainBox,
  MyProfileBox,
  ProfileBox,
  ProfileImg,
  ProfileTitle,
} from "components/styled/proFileStyled";
import React from "react";
import { useParams } from "react-router-dom";

function Profile() {
  const params = useParams();
  console.log(params);
  return (
    <MainBox>
      <ProfileBox>
        <MyProfileBox>
          <ProfileTitle>프로필관리</ProfileTitle>
          <ProfileImg src="" alt="" />
          <p>닉네임</p>
          <p>유저 아이디</p>
          <button>수정하기</button>
        </MyProfileBox>
      </ProfileBox>
    </MainBox>
  );
}

export default Profile;
