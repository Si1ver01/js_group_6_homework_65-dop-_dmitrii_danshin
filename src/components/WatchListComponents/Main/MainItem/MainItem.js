import React from "react";
import './MainItem.scss'
import Input from "../../Ui/Input/Input";
import Button from "../../Ui/Button/Button";

const MainItem = props=> {
    return (
      <div className='MainItem'>
        <Input value={props.text} handler={props.handlerInput} />
        <Button handler={props.handlerButtonSave}>Save</Button>
        <Button handler={props.handlerButton}>Delete</Button>
      </div>
    );
}

export default MainItem;
