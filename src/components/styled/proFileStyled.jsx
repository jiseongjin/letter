import styled from "styled-components";

export const ProfiileHeader = styled.header`
  width: 600px;
`;

export const MainBox = styled.main`
  height: 600px;
  width: 600px;
  display: flex;
`;

export const ProfileBox = styled.section`
  height: 400px;
  width: 500px;
  display: flex;
  justify-content: center;
  background-color: #c9c4c4;
  border-radius: 10px;
`;

export const MyProfileBox = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 10px;
`;

export const ProfileTitle = styled.h2`
  font-size: 40px;
`;

export const ProfileImg = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 100%;
`;
