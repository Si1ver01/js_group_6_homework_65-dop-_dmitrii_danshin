import React, { useState, useContext, useEffect } from "react";
import Input from "../Ui/Input/Input.jsx";
import "./Form.scss";
import TextArea from "../Ui/TextArea/TextArea.js";
import Button from "../Ui/Button/Button.jsx";
import { MainContext } from "../../../context/MainContext/mainContext.js";
import { BLOG_LIST } from "../../../context/types.js";
import { axiosMain } from "../../../axios/axiosMain.js";

const Form = (props) => {
  const {sendMessage,editMessage} = useContext(MainContext);
  const initialState = {
    title: '',
    message : '',
    date : new Date(),
  }
  const [state,dispatch] = useState(initialState);

  useEffect(()=> {
    const getPost = async () => {
      const response = await axiosMain(`blog/${props.match.params.id}.json`);
      dispatch(response.data);
     }
     if(props.edit){
      getPost();
     }
     // eslint-disable-next-line
  },[])

  const sendPost = (event,props) => {
    if(props.edit){
      editMessage('blog',props.match.params.id,state,BLOG_LIST,event,props)
    } else {
      sendMessage('blog',state,BLOG_LIST,event,props)
    }
  }

  return (
    <div className="Form" >
      <form className="decor" onSubmit={(event) => sendPost(event,props) }>
        <div className="form-left-decoration"></div>
        <div className="form-right-decoration"></div>
        <div className="circle"></div>
        <div className="form-inner">
          <Input
            label="Input title"
            value={state.title}
            handler={event => dispatch({...state,title : event.target.value})}
          />
          <TextArea
            label="Сообщение..."
            rows="5"
            value={state.message}
            handler={event => dispatch({...state,message : event.target.value})}
          />
          <Button type="submit">Отправить</Button>

        </div>
      </form>
    </div>
  );
};

export default Form;
