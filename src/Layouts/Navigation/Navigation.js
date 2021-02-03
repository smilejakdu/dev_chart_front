import React, { useCallback, useEffect } from "react";
import { withRouter } from "react-router-dom";
import {
  CategoryLinkItem,
  CategoryUserLinkItem,
  CategoryLink,
  LogoutBtnItem,
} from "./Navigation.style";
import { useDispatch, useSelector } from "react-redux";
import { logoutRequestAction } from "../../reducers/user";
import { useHistory } from "react-router-dom";

const categories = [
  {
    name: "chart",
    text: "Chart",
  },
  {
    name: "programming",
    text: "Programming",
  },
  {
    name: "user",
    text: "User",
  },
];
const Navigation = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { me, logInDone } = useSelector((state) => state.user);
  // Header 부분

  const LogOutBtn = useCallback(() => {
    dispatch(logoutRequestAction());
    history.push("/login");
  }, []);

  return (
    <div>
      <CategoryLink>
        {categories.map((c) => (
          <CategoryLinkItem
            key={c.name}
            exact={c.name}
            to={c.name === "Login" ? "/compoundinfo" : `/${c.name}`}
          >
            {c.text}
          </CategoryLinkItem>
        ))}
        {localStorage.getItem("token") || me ? (
          <LogoutBtnItem onClick={LogOutBtn}>Logout</LogoutBtnItem>
        ) : (
          <div>
            <CategoryLinkItem to={"/login"}>Login</CategoryLinkItem>
          </div>
        )}
      </CategoryLink>
    </div>
  );
};

export default withRouter(Navigation);
