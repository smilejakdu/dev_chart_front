import styled from "styled-components";
import palette from "../../util/styles/palette";

const TableBorder = styled.div`
  display: flex;
  top: 0;
`;
const TableHeader = styled.thead`
  font-size: 15px;
  text-align: center;
  position: sticky;
  th {
    border: 1px solid ${palette.base_clor[2]};
  }
`;

const TableBody = styled.tbody`
  font-size: 15px;
  text-align: center;

  td {
    border: 1px solid ${palette.base_clor[2]};
  }
`;

export { TableHeader, TableBody, TableBorder };
