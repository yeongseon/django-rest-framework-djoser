import React from "react";
import Navbar from "../components/Navbar";

const Layout = (props: any) => (
  <div>
    <Navbar></Navbar>
    {props.chidren}
  </div>
);

export default Layout;
