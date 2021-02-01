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

const InputCustom = styled.div`
  margin-right: 20px;
  label {
    display: flex;
    align-items: center;
    cursor: pointer;
    height: 13px;

    input {
      display: none;
    }

    span {
      display: inline-block;
      width: 20px;
      height: 20px;
      border: 1px solid ${palette.base_clor[2]};
      border-radius: 3px;
      background: white;
    }

    input:checked ~ span {
      background: ${palette.base_clor[0]};
    }

    h4 {
      margin-left: 10px;
    }
    @media (max-width: 1100px) {
      margin-bottom: 20px;
      margin-top: 20px;
    }
  }
`;

export { ProgrammingPageBody, ProgrammingPageTitle, InputCustom, InputBorder };
