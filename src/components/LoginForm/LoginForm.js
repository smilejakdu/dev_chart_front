import React, { useState, useEffect, useCallback } from "react";
import request from "../../util/request";
import {
  Container,
  InputForm,
  Input,
  Button,
  KaKaoBtn,
} from "./LoginForm.style";
import useInput from "../hooks/useInput";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginRequestAction } from "../../reducers/user";

const LoginForm = () => {
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");
  const history = useHistory();
  const dispatch = useDispatch();

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSubmitForm();
    }
  };

  const onSubmitForm = useCallback(() => {
    dispatch(loginRequestAction({ email, password }));
    history.push("/chart");
  }, [email, password]);

  return (
    <div>
      <div style={{ textAlign: "center" }}></div>
      <Container>
        <InputForm>
          <h1>LOGIN</h1>
          <div className="form-group">
            <Input
              type="text"
              placeholder="Email"
              name="email"
              value={email}
              onChange={onChangeEmail}
              onKeyPress={handleKeyPress}
              required
            />
          </div>
          <div className="form-group">
            <Input
              type="password"
              placeholder="password"
              name="password"
              value={password}
              onChange={onChangePassword}
              onKeyPress={handleKeyPress}
              required
            />
          </div>

          <Button type="button" onClick={onSubmitForm}>
            Login
          </Button>
          <Button type="button" onClick={() => history.push("/register")}>
            Registesr
          </Button>
          {/* </form> */}
        </InputForm>
      </Container>
    </div>
  );
};

export default LoginForm;
