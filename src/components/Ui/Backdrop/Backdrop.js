import React from "react";
import './Backdrop.scss'

const Backdrop = ({handler}) => {
  return <div className="Backdrop" onClick={handler}></div>;
};

export default Backdrop;
