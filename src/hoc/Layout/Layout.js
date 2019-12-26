import React , { Fragment } from "react";
import Drawer from '../../components/Drawer/Drawer.js'

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Drawer/>
      <main>{children}</main>
    </Fragment>
  );
};

export default Layout;
