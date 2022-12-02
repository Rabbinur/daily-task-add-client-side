import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Messenger from "../Messenger/Messenger";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Messenger></Messenger>
    </div>
  );
};

export default Main;
