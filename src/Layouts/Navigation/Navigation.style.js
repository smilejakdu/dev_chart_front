import styled from "styled-components";
import palette from "../../util/styles/palette";
import { NavLink } from "react-router-dom";

const CategoryLink = styled.div`
  position: relative;
  width: 85%;
  display: flex;
  top: 0;
  right: 0;
  left: 0;
  margin-left: auto;
  margin-right: auto;
  z-index: 1;
  min-width: 160px;
  position: fixed;
  background-color: white;
  border-bottom: 1px solid #0660e9;
  overflow-x: hidden;
  padding-top: 40px;

  a:hover {
    text-decoration: none;
    transition: all 0.3s ease-out;
  }

  .logout {
    position: absolute;
    margin-right: 10px;
    right: 0;
  }

  @media (max-width: 1000px) {
    width: 800px;
    columns: 2;
  }

  @media (max-width: 600px) {
    overflow-x: scroll;
  }
`;

const CategoryLinkItem = styled(NavLink)`
  padding: 6px 8px 6px 16px;
  margin-right: 3px;
  text-decoration: none;
  font-size: 25px;
  color: white;
  display: block;
  background: linear-gradient(45deg, #0660e9 0%, #276afb 100%);
  border: 1px solid #0660e9;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  &.active {
    background: linear-gradient(45deg, #0660e9 0%, #276afb 100%);
    color: black;
  }
  @media (max-width: 850px) {
    font-size: 20px;
  }
`;

const CategoryLinkNicknameItem = styled(NavLink)`
  position: absolute;
  padding: 6px 8px 6px 16px;
  margin-right: 3px;
  text-decoration: none;
  right: 0;
  font-size: 25px;
  color: white;
  display: block;
  background: linear-gradient(45deg, #0660e9 0%, #276afb 100%);
  border: 1px solid #0660e9;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  &.active {
    background: linear-gradient(45deg, #0660e9 0%, #276afb 100%);
    color: black;
  }
  @media (max-width: 850px) {
    font-size: 20px;
  }
`;

const LogoutBtnItem = styled.button`
  padding: 6px 8px 6px 16px;
  margin-right: 3px;
  text-decoration: none;
  font-size: 25px;
  color: coral;
  display: block;
  background: linear-gradient(45deg, #0660e9 0%, #276afb 100%);
  border: 1px solid #0660e9;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  &:hover {
    cursor: pointer;
    color: coral;
  }

  &.active {
    background: linear-gradient(45deg, #0660e9 0%, #276afb 100%);
    color: ${palette.base_clor[0]};
  }
  @media (max-width: 850px) {
    font-size: 20px;
  }
`;

const CategoryUserLinkItem = styled(NavLink)`
  position: absolute;
  right: 0;
  padding: 6px 8px 6px 16px;
  margin-right: 3px;
  float: right;
  text-decoration: none;
  font-size: 25px;
  color: ${palette.base_clor[3]};
  display: block;
  background: linear-gradient(45deg, #0660e9 0%, #276afb 100%);
  border: 1px solid #0660e9;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  &.active {
    background: linear-gradient(45deg, #0660e9 0%, #276afb 100%);
    color: ${palette.base_clor[3]};
  }

  @media (max-width: 850px) {
    font-size: 20px;
  }
  @media (max-width: 600px) {
    position: relative;
    display: flex;
    font-size: 20px;
  }
`;

const UserNickname = styled.div`
  border: 1px solid red;
`;

const ImageLogo = styled.div`
  right: 0;
  top: 0;
  position: absolute;
  float: right;

  @media (max-width: 1300px) {
    display: none;
  }
`;

export {
  CategoryLinkItem,
  CategoryLink,
  ImageLogo,
  UserNickname,
  CategoryUserLinkItem,
  CategoryLinkNicknameItem,
  LogoutBtnItem,
};
