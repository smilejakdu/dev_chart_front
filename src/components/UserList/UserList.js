import React, { useState, useEffect } from "react";
import { TableHeader, TableBody, TableBorder } from "./UserList.style";
import { useSelector, useDispatch } from "react-redux";
import { USER_LIST_REQUEST } from "../../reducers/user";
import request from "../../util/request";

const UserList = () => {
  const [userList, setUserList] = useState([]);
  const dispatch = useDispatch();
  const { userlist, userListLoading } = useSelector((state) => state.user);
  console.log(userlist);

  useEffect(() => {
    request
      .get("/users/userlist")
      .then((res) => {
        let {
          data: { data },
        } = res;
        console.log(data);
        setUserList(data);
      })
      .catch((error) => {
        console.log("err_log", error);
      });
  }, []);

  //   useEffect(() => {
  //     function onScroll() {
  //       if (
  //         window.pageYOffset + document.documentElement.clientHeight >
  //         document.documentElement.scrollHeight - 300
  //       ) {
  //         if (!userListLoading) {
  //           const lastId = userlist[userlist.length - 1]?.id;
  //           dispatch({
  //             type: USER_LIST_REQUEST,
  //             lastId,
  //           });
  //         }
  //       }
  //     }
  //     window.addEventListener("scroll", onScroll);
  //     return () => {
  //       window.removeEventListener("scroll", onScroll);
  //     };
  //   }, [userListLoading, userlist]);

  return (
    <TableBorder>
      <table>
        <TableHeader>
          <tr>
            <th>nickname</th>
            <th>date</th>
          </tr>
        </TableHeader>
        <TableBody>
          {userList.map((user) => (
            <tr>
              <td>{user.nickname}</td>
              <td>{user.date}</td>
            </tr>
          ))}
        </TableBody>
      </table>
    </TableBorder>
  );
};

export default UserList;
