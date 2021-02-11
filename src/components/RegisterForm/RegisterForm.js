import React, { useState } from "react";
import request from "../../util/request";
import {
  Container,
  InputForm,
  Button,
  Input,
  KaKaoBtn,
} from "./RegisterForm.style";
import { useHistory } from "react-router-dom";

const RegistesrForm = () => {
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");

  const history = useHistory();

  const handleLogin = () => {
    history.push("/login");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  const handleClick = () => {
    request
      .post("/users/register", {
        email: email,
        nickname: nickname,
        password: password,
        repassword: repassword,
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
        history.push("/chart");
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
          <h1>REGISTER</h1>
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
              type="text"
              placeholder="nickname"
              name="nickname"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
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
          <div className="form-group">
            <Input
              type="password"
              placeholder="repassword"
              name="repassword"
              value={repassword}
              onChange={(e) => setRePassword(e.target.value)}
              onKeyPress={handleKeyPress}
              required
            />
          </div>
          <Button type="button" onClick={handleLogin}>
            Login
          </Button>
          <Button type="button" onClick={handleClick}>
            Register
          </Button>
          {/* </form> */}
        </InputForm>
      </Container>
    </div>
  );
};

export default RegistesrForm;
