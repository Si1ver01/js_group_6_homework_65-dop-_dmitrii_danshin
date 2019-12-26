import React from "react";
import "./ListItem.scss";
import { NavLink } from "react-router-dom";

const ListItem = ({ date, title , id}) => {
  const newDate = new Date(date).toLocaleDateString("ru");
  return (
    <li className="listItem">
      <span> Date : {newDate} </span>
      <h3>{title}</h3>
      <NavLink to={'/post/' + id}>Read more...</NavLink>
    </li>
  );
};

export default ListItem;
