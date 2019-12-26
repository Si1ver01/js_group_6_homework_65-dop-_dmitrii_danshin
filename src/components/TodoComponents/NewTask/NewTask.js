import React, { useState, useContext } from 'react'
import './NewTask.scss'
import { MainContext } from '../../../context/MainContext/mainContext';
import { GET_TODO } from '../../../context/types';

const NewTask = () => {
  const [state,dispatch] = useState({newTask : '',complite:false});
  const {sendMessage} = useContext(MainContext);

  const sendTask = () => {
    sendMessage('todo',state, GET_TODO);
    dispatch({...state,newTask : ''});;
  }


  return (
    <div className="new-task__wrap">
    <div className="form-inline w-100">
      <input
        type="text"
        className="form-control flex-grow-1 mr-1"
        placeholder="Input new task"
        onChange={(e) => dispatch({...state,newTask: e.target.value})}
        value={state.newTask}
      />
      <button className="btn btn-info" onClick={sendTask}><i className="fas fa-share"></i></button>
    </div>
  </div>
  )
}

export default NewTask
