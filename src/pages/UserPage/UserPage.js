import React from "react";
import { UserPageBody } from "./UserPage.style";
import UserList from "../../components/UserList/UserList";
import "bootstrap/dist/css/bootstrap.min.css";

const UserPage = () => {
  return (
    <div>
      <UserPageBody>
        <UserList />
      </UserPageBody>
    </div>
  );
};

export default UserPage;
