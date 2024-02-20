const { default: styled } = require("styled-components");

export const LoginMain = styled.main`
  display: flex;
  margin-top: 50%;
`;

export const LoginSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  height: 300px;
  width: 500px;
`;

export const LoginText = styled.p`
  font-size: 30px;
  margin-bottom: 20px;
`;

export const LoginBox = styled.article`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const LoginInputText = styled.input`
  width: 450px;
  height: 40px;
  font-size: 18px;
`;

export const LoginButton = styled.button`
  height: 60px;
  font-size: 25px;
`;

export const SignupButton = styled.button`
  height: 30px;
  width: 100px;
  font-size: 18px;
`;
