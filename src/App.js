import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ChartPage from "./pages/ChartPage/ChartPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ProgrammingPage from "./pages/ProgrammingPage/ProgrammingPage";
import UserPage from "./pages/UserPage/UserPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import BoardPage from "./pages/BoardPage/BoardPage";
import Layout from "./Layouts/Layout";

const App = () => {
  return (
    <div>
      <Router>
        <Layout>
          <Switch>
            <Route exact="exact" path={["/chart", "/"]} component={ChartPage} />
            <Route
              exact="exact"
              path="/programming"
              component={ProgrammingPage}
            />
            <Route exact="exact" path="/user" component={UserPage} />
            <Route exact="exact" path="/login" component={LoginPage} />
            <Route exact="exact" path="/register" component={RegisterPage} />
            <Route exact="exact" path="/profile" component={ProfilePage} />
            <Route exact="exact" path="/board" component={BoardPage} />
            <Route
              render={({ location }) => (
                <div>
                  <h2>존재하지 않는 페이지 입니다.</h2>
                  <p>{location.pathname}</p>
                </div>
              )}
            />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
};
export default App;
