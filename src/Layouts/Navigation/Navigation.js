import React from "react";
import { withRouter } from "react-router-dom";
import {
  CategoryLinkItem,
  CategoryUserLinkItem,
  CategoryLink,
} from "./Navigation.style";
import { useDispatch, useSelector } from "react-redux";

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
  const { me } = useSelector((state) => state.user);
  console.log(me);
  // Header 부분
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

        <CategoryLinkItem to={"/login"}>Login</CategoryLinkItem>
        {me && (
          <CategoryUserLinkItem to={"/profile"}>
            {me.nickname}
          </CategoryUserLinkItem>
        )}
      </CategoryLink>
    </div>
  );
};

export default withRouter(Navigation);
