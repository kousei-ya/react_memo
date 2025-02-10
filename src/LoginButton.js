import React from "react";
import useAuth from "./useAuth.js";

const LoginButton = () => {
  const { isLoggedIn, login, logout } = useAuth();

  return (
    <button onClick={isLoggedIn ? logout : login}>
      {isLoggedIn ? "ログアウト" : "ログイン"}
    </button>
  );
};

export default LoginButton;
