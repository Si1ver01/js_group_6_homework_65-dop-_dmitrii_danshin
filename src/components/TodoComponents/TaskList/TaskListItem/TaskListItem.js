import React from 'react'

const TaskListItem = (props) => {
  let bg = "d-flex align-items-center my-1 rounded p-1 border ";
  props.status
    ? (bg += "alert-success border-success")
    : (bg += "alert-secondary border-secondary");

  return (
    <div className={bg}>
      <p className="flex-grow-1 mb-0 pl-2">{props.name}</p>

      {props.status ? null : (
        <button className="btn btn-success mr-1" onClick={props.forDone}>
          <i className="fas fa-check"></i>
        </button>
      )}
      <button className="btn btn-primary" onClick={props.forDelete}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default TaskListItem
