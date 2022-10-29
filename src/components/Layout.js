import React from "react";
import Casino from "./Casino/Casino";
import Header from "./Header/Header";
import Login from "./Login/LoginForm";
import ErrorPage from "./Error/ErrorPage";
import PlayGame from "./Games/PlayGame";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="main container">
        <Login />
        <Casino />
        <PlayGame />
        <ErrorPage />
      </div>
    </>
  );
};

export default Layout;
