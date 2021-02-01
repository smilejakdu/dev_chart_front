import styled from "styled-components";
import palette from "../../util/styles/palette";

const UserPageBody = styled.div`
  border: 1px solid red;
  margin-top: 10rem;
  margin-right: auto;
  margin-left: auto;
  font-size: 28px;
  overflow: scroll;
  width: 80%;
  max-height: 200px;
`;

const UserPageTitle = styled.div`
  position: sticky;
  top: 0;
  background: ${palette.base_clor[0]};
  border: 1px solid blue;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserPageList = styled.div`
  border: 1px solid coral;
`;

export { UserPageBody, UserPageTitle, UserPageList };
