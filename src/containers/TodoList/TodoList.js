import React, { useContext, useEffect } from "react";
import "./TodoList.scss";
import NewTask from "../../components/TodoComponents/NewTask/NewTask";
import TaskList from "../../components/TodoComponents/TaskList/TaskList";
import { MainContext } from "../../context/MainContext/mainContext";
import { GET_TODO } from "../../context/types";
import Loader from "react-loader-spinner";

const TodoList = () => {
  const { getMessages, taskList, loading } = useContext(MainContext);

  useEffect(() => {
    getMessages("todo", GET_TODO);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="Todo-container">
      {loading ? (
        <div className="loader">
          <Loader type="BallTriangle" color="#ffffff" height={100} width={100} />
        </div>
      ) : (
        <div className="task-list__wrap">
          <h2 className="my-2 text-center">Task list</h2>
          <div className="task-list border border-secondary rounded p-2 mb-2">
            <NewTask />
            <hr className="my-2" />
            {taskList.length && <TaskList />}
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoList;
