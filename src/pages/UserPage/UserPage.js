import React from "react";
import { UserPageBody, UserPageTitle, UserPageList } from "./UserPage.style";
import UserList from "../../components/UserList/UserList";

const UserPage = () => {
  return (
    <UserPageBody>
      <UserPageTitle>User List</UserPageTitle>
      <UserPageList>
        <UserList />
      </UserPageList>
    </UserPageBody>
  );
};

export default UserPage;
