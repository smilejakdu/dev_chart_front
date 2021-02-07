import styled from "styled-components";
import palette from "../../util/styles/palette";

const Container = styled.div`
  width: 1200px;
  margin: 0px auto;
  columns: 4;
  column-gap: 10px;

  @media (max-width: 1200px) {
    width: 800px;
    columns: 2;
  }
`;

const Box = styled.div`
  width: 230px;
  padding: 20px;
  background: ${palette.base_clor[1]};
  border: 1px solid gray;
  margin-bottom: 10px;
  break-inside: avoid;
  border-radius: 10px;

  h2 {
    color: ${palette.base_clor[3]};
  }

  img {
    width: 230px;
    height: 150px;
    object-fit: contain;
  }

  @media (max-width: 1200px) {
    width: 300px;
    padding: 20px;
  }
`;

export { Container, Box };
