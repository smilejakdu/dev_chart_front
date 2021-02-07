import styled from "styled-components";
import palette from "../../util/styles/palette";

const ChartPageBody = styled.div`
  margin-top: 10rem;
  margin-right: auto;
  margin-left: auto;
  font-size: 28px;
  width: 80%;
  margin-bottom: 100px;
`;

const CircleBorder = styled.div`
  ::after {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    -o-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    background: #000;
  }
  @media (max-width: 1500px) {
    width: 100%;
    border: none;
    display: block;
    text-align: center;
    margin-top: 3rem;
    justify-content: center;
  }
`;

const BarBorder = styled.div`
  margin-left: 20px;
  @media (max-width: 1500px) {
    width: 100%;
    display: block;
    border: none;
    float: none;
    margin: auto;
  }
`;

export { ChartPageBody, CircleBorder, BarBorder };
