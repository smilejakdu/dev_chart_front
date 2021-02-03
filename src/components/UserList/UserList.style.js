import styled from "styled-components";
import palette from "../../util/styles/palette";

const TableHeader = styled.thead`
  position: sticky;
  top: 0;
  background: ${palette.base_clor[2]};
  color: white;
  th {
    font-size: 13.5px;
    padding-left: 5px;
    padding-right: 5px;
    text-align: center;
    background: ${palette.base_clor[2]};
    color: ${palette.base_clor[0]};
    position: sticky;
    top: 0;
  }
`;

const TableBody = styled.tbody`
  td {
    font-size: 13.5px;
    padding-left: 5px;
    padding-right: 5px;
    border: 1px solid #e7e4de;
    text-align: center;
  }
`;

export { TableHeader, TableBody };
