import React, { useState, useEffect } from "react";
import request from "../../util/request";
import {
  Container,
  InputForm,
  Input,
  Button,
  KaKaoBtn,
} from "./LoginForm.style";
import { Redirect } from "react-router-dom";

const LoginForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  const handleClick = () => {
    request
      .post("/user/signin", {
        email: email,
        password: password,
      })
      .then((res) => {
        setEmail(email);
        setPassword(password);

        if (res.data || res) {
          let {
            data: { access },
          } = res;
          console.log(access);
          localStorage.setItem("token", access);
        }
        props.history.push("/");
      })
      .catch((err) => {
        console.log(err);
        setEmail("");
        setPassword("");
      });
  };

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
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={handleKeyPress}
              required
            />
          </div>

          <Button type="button" onClick={handleClick}>
            Login
          </Button>
          <center>
            <KaKaoBtn />
          </center>
          {/* </form> */}
        </InputForm>
      </Container>
    </div>
  );
};

export default LoginForm;
