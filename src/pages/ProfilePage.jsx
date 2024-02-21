import Layout from "components/layout/Layout";
import Profile from "components/profile/Profile";
import { ProfiileHeader } from "components/styled/proFileStyled";
import React from "react";

function ProfilePage() {
  return (
    <>
      <ProfiileHeader>
        <Layout />
      </ProfiileHeader>
      <Profile />
    </>
  );
}

export default ProfilePage;
