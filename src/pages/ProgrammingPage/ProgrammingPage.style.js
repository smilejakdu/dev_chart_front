import styled from "styled-components";
import palette from "../../util/styles/palette";

const ProgrammingPageBody = styled.div`
  margin-top: 10rem;
  margin-right: auto;
  margin-left: auto;
  font-size: 28px;
  width: 80%;
`;

const ProgrammingPageTitle = styled.div`
  margin: 0 auto;
  margin-bottom: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputBorder = styled.div`
  display: flex;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 40px;
  margin-top: 20px;
  justify-content: center;
  align-items: center;

  @media (max-width: 1100px) {
    display: inline-block;
  }
`;

const CheckBoxBorder = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
`;

const Button = styled.button`
  color: ${palette.base_clor[0]};
  background: ${palette.base_clor[2]};
  padding: 10px;
  border-radius: 5px;
  margin: 0 auto;
  margin-top: 5rem;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2);
    color: ${palette.base_clor[1]};
  }
`;

const CheckBoxInput = styled.div`
  margin-right: 10px;
`;

export {
  ProgrammingPageBody,
  ProgrammingPageTitle,
  CheckBoxBorder,
  Button,
  CheckBoxInput,
};
