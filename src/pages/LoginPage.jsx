import Login from "components/login/Login";
import Signup from "components/login/Signup";
import { LoginMain } from "components/styled/LoginStyled";
import React, { useState } from "react";

function LoginPage() {
  const [showLogin, setShowLogin] = useState(true);
  const toggleForm = () => {
    setShowLogin(!showLogin);
  };
  return (
    <LoginMain>
      {showLogin ? (
        <Login toggleForm={toggleForm} />
      ) : (
        <Signup toggleForm={toggleForm} />
      )}
    </LoginMain>
  );
}

export default LoginPage;
