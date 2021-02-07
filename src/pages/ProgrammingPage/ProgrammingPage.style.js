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

const CheckBoxBorder = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
`;

const Button = styled.button`
  color: ${palette.base_clor[0]};
  background: ${palette.base_clor[2]};
  padding: 5px 20px;
  font-size: 24px;
  border-radius: 5px;
  margin: auto auto;
  margin-top: 5rem;
  color: white;
  border: none;

  &:hover {
    cursor: pointer;
    transition: all 0.3s ease-out;
    box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2);
    color: ${palette.base_clor[1]};
    background: #f2f3f7;
  }
`;

const CheckBoxInput = styled.div`
  margin-right: 10px;
`;

const ContainerSection = styled.div`
  padding: 100px 50px;
  display: flex;
  justify-content: center;
  border-radius: 5px;

  /* @media (max-width: 850px) {
    font-size: 20px;
  }  */
`;

const ContainerCardInfo = styled.div`
  background: linear-gradient(45deg, #0660e9 0%, #276afb 100%);
  display: flex;
  flex-direction: column;
  height: 500px;
  width: 300px;
  margin: 0 10px;
  padding: 24px;
  align-items: center;
  color: #fff;
  border-radius: 5px;

  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }

  button {
    background: black;
    border: none;
    border-radius: 10px;
    color: white;
    font-size: 15px;
    margin: auto auto;
    padding: 10px 50px;

    &:hover {
      transform: scale(1.06);
      transition: all 0.3s ease-out;
      color: #0660e9;
      background: white;
    }
  }

  h3 {
    margin-bottom: 5px;
    font-size: 24px;
    color: coral;
  }

  h4 {
    font-size: 40px;
  }
  p {
    font-size: 14px;
    margin-bottom: 24px;
  }

  .icon {
    margin: 24px 0;
  }
`;

const ContainerFeatures = styled.div`
  list-style: none;
  align-items: center;
  justify-content: center;
  margin: auto auto;
  font-size: 24px;

  li {
    margin-bottom: 10px;
  }

  a {
    color: black;
    &:hover {
      color: white;
      text-decoration: none;
    }
  }
`;

export {
  ProgrammingPageBody,
  ProgrammingPageTitle,
  CheckBoxBorder,
  Button,
  CheckBoxInput,
  ContainerSection,
  ContainerCardInfo,
  ContainerFeatures,
};
