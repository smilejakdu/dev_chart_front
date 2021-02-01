import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import { LoginPageBody } from "./LoginPage.style";
import { useSelector, useDispatch } from "react-redux";

const LoginPage = () => {
  const { me } = useSelector((state) => state.user);
  return <LoginPageBody>{me ? "" : <LoginForm />}</LoginPageBody>;
};

export default LoginPage;
