import React, { useState, useEffect } from "react";
import { TableHeader, TableBody, TableBorder } from "./UserList.style";
import { useSelector, useDispatch } from "react-redux";
import { USER_LIST_REQUEST } from "../../reducers/user";
import request from "../../util/request";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

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
    <div>
      <Table>
        <TableHeader>
          <tr>
            <th>nickname</th>
            <th>date</th>
            <th>python</th>
            <th>javascript</th>
            <th>java</th>
            <th>c</th>
            <th>c_plus</th>

            <th>spring</th>
            <th>django</th>
            <th>flask</th>
            <th>express</th>
            <th>react</th>
            <th>vue</th>
            <th>laravel</th>
          </tr>
        </TableHeader>
        <TableBody>
          {userList.map((user) => (
            <tr>
              <td>{user.nickname}</td>
              <td>{user.date}</td>
              <td>{`${user.python}`}</td>
              <td>{`${user.javascript}`}</td>
              <td>{`${user.java}`}</td>
              <td>{`${user.c}`}</td>
              <td>{`${user.c_plus}`}</td>
              <td>{`${user.spring}`}</td>
              <td>{`${user.django}`}</td>
              <td>{`${user.flask}`}</td>
              <td>{`${user.express}`}</td>
              <td>{`${user.react}`}</td>
              <td>{`${user.vue}`}</td>
              <td>{`${user.laravel}`}</td>
            </tr>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default UserList;
