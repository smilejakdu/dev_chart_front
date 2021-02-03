import styled from "styled-components";
import palette from "../../util/styles/palette";

const UserPageBody = styled.div`
  border: 1px solid ${palette.base_clor[0]};
  margin-top: 10rem;
  margin-right: auto;
  margin-left: auto;
  font-size: 28px;
  overflow: scroll;
  width: 80%;
  height: 400px;
  max-height: 400px;
`;

export { UserPageBody };
