import React from "react";
import styled from "styled-components";

const Stheader = styled.header`
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0WTqDqVMWetycYfe-7kejdRsHoyspepQ1Vw&usqp=CAU");
  background-repeat: round;
`;

const StheaderH1 = styled.h1`
  font-size: 50px;
  color: pink;
  font-weight: bold;
`;

function Header() {
  return (
    <Stheader>
      <StheaderH1>아이브 팬레터 콜렉션</StheaderH1>
    </Stheader>
  );
}

export default Header;
