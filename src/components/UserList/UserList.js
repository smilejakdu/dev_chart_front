import React, { useState, useEffect } from "react";
import { Container, Box } from "./UserList.style";
import { useSelector, useDispatch } from "react-redux";
import { USER_LIST_REQUEST } from "../../reducers/user";
import request from "../../util/request";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const UserList = () => {
  const [userList, setUserList] = useState([]);
  const { userlist, userListLoading } = useSelector((state) => state.user);

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
    <Container>
      {userList.map((user) => (
        <Box>
          <h2>{user.nickname}</h2>
          <p>
            <div>{user.python ? <div>python</div> : <div></div>}</div>
            <div>{user.javascript ? <div>javascript</div> : <div></div>}</div>
            <div>{user.java ? <div>java</div> : <div></div>}</div>
            <div>{user.c ? <div>c</div> : <div></div>}</div>
            <div>{user.c_plus ? <div>c++</div> : <div></div>}</div>
            <div>{user.spring ? <div>spring</div> : <div></div>}</div>
            <div>{user.django ? <div>django</div> : <div></div>}</div>
            <div>{user.flask ? <div>flask</div> : <div></div>}</div>
            <div>{user.express ? <div>express</div> : <div></div>}</div>
            <div>{user.react ? <div>react</div> : <div></div>}</div>
            <div>{user.vue ? <div>vue</div> : <div></div>}</div>
            <div>{user.laravel ? <div>laravel</div> : <div></div>}</div>
          </p>
        </Box>
      ))}
    </Container>
  );
};

export default UserList;
