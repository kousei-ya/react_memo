import React, { useContext } from "react";
import AuthContext from "./AuthContext.js";

const LoginButton = () => {
  const { isLoggedIn, login, logout } = useContext(AuthContext);

  return (
    <button onClick={isLoggedIn ? logout : login}>
      {isLoggedIn ? "ログアウト" : "ログイン"}
    </button>
  );
};

export default LoginButton;
