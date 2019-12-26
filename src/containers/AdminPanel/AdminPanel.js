import React, { useState, useEffect } from "react";
import "./AdminPanel.scss";
import { axiosMain } from "../../axios/axiosMain";
import Button from "../../components/WatchListComponents/Ui/Button/Button";

const AdminPanel = (props) => {
  const initialState = {
    select: "about",
    title: "",
    message: ""
  };

  const [state, dispatch] = useState(initialState);

  useEffect(() => {
    const getPage = async () => {
      const response = await axiosMain(`${state.select}.json`);
      const {title,message} = response.data;
      dispatch({...state,title,message})
    }
    getPage();
    // eslint-disable-next-line
  },[state.select])

  const savePage = async (event) => {
    event.preventDefault();
    const message = {...state};
    delete message.select;
    await axiosMain.patch(`${state.select}.json`,message);
    props.history.push(`/pages/${state.select}`);
  }


  return (
    <div className="AdminPanel">
      <form onSubmit={event => savePage(event)}>
        <h1>Admin Panel</h1>
        <div className="select">
          <select value={state.select} onChange={event => dispatch({...state,select : event.target.value })}>
            <option disabled>Выберите страницу</option>
            <option value="about">About</option>
            <option value="contact">Contact</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="dynamic-label-input">Title:</label>
          <input type="text" id="dynamic-label-input" placeholder="Title" value={state.title} onChange={event => dispatch({...state,title : event.target.value})} />
        </div>
        <div className="form-group">
          <span>Content:</span>
          <textarea value={state.message} onChange={event => dispatch({...state,message : event.target.value})}/>
        </div>
        <div className='form-group'>
          <Button type='submit'>Сохранить</Button>
        </div>
      </form>
    </div>
  );
};

export default AdminPanel;
