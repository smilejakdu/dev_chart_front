import styled from "styled-components";
import palette from "../../util/styles/palette";
import KaKaoLogin from "react-kakao-login";

const Container = styled.div`
  height: 30rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputForm = styled.div`
  padding-top: 60px;
  margin: 0 auto;
  align-items: center;
  height: 450px;
  width: 400px;
  border-radius: 15px;
  background: #f2f3f7;
  position: relative;
  h1 {
    display: flex;
    text-align: center;
    justify-content: center;
  }
`;

const Button = styled.button`
  border: none;
  outline: none;
  background: ${palette.base_clor[2]};
  font-size: 2rem;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  width: 55%;
  margin-bottom: 1rem;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2);
    color: coral;
    transition: all 0.3s ease-out;
    background: #f2f3f7;
  }
`;

const KaKaoBtn = styled(KaKaoLogin)`
  background: #ffeb00;
  font-size: 2rem;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  font-weight: bold;
  &:hover {
    box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`;
const Input = styled.input`
  font-size: 1rem;
  display: flex;
  border: none;
  outline: none;
  border-bottom: 1px solid ${palette.base_clor[2]};
  background: #f2f3f7;
  width: 80%;
  margin: 30px;
  &:hover {
    cursor: pointer;
    border-bottom: 1px solid coral;
  }
`;

export { Container, InputForm, Button, Input, KaKaoBtn };
