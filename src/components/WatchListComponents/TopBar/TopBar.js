import React from "react";
import Input from "../Ui/Input/Input";
import Button from "../Ui/Button/Button";
import "./TopBar.scss";
import { useState } from "react";
import { useContext } from "react";
import { MainContext } from "../../../context/MainContext/mainContext";
import { SEND_FILMS } from "../../../context/types";

const TopBar = () => {
  const [state,dispatch] = useState({value : ''})
  const {sendMessage} = useContext(MainContext);

  const send = (event) => {
    sendMessage('films',state,SEND_FILMS,event);
    dispatch({value : ''});
  }

  return (
    <form className="TopBar" onSubmit={event => send(event) }>
      <Input
        label="Enter movie title"
        value={state.value}
        handler={event => dispatch({value: event.target.value})}
        required={true}
      />
      <Button type="sumbit">Send</Button>
    </form>
  );
};

export default TopBar;
