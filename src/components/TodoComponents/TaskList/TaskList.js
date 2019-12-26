import React, { useContext } from 'react'
import TaskItem from './TaskListItem/TaskListItem.js'
import { MainContext } from '../../../context/MainContext/mainContext.js';
import { GET_TODO } from '../../../context/types.js';

const TaskList = () => {
  const {taskList,removeMessage,editMessage} = useContext(MainContext);
  console.log(taskList)

  const complitedCount = taskList.reduce((total, element) => {
    if (element.complite) {
      total++;
    }
    return total;
  }, 0);

  return (
    <div className="d-flex flex-column">
      <p className="text-center mt-auto mb-1 text-secondary">
        Complited {complitedCount} from {taskList.length}
      </p>

      {taskList.map(tasksItem => {
        return (
          <TaskItem
            status={tasksItem.complite}
            key={tasksItem.id}
            name={tasksItem.newTask}
            forDone={() => editMessage('todo',tasksItem.id,{...tasksItem,complite:true} ,GET_TODO)}
            forDelete={() => removeMessage('todo',tasksItem.id,GET_TODO)}
          />
        );
      }
      )}
    </div>
  );
}

export default TaskList
