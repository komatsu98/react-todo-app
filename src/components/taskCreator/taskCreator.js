import "./taskCreator.css";
import ModalCreate from "../modals/modalCreate/modalCreate";
import { useState } from "react";
const TaskCreator = ({ handleAddTask }) => {
  let [modelVisible, setModelVisible] = useState(false);
  const handleHideModalCreate = () => {
    setModelVisible(false);
  };
  return (
    <div className="task-creator">
      <button
        onClick={() => {
          setModelVisible(true);
        }}
      >
        Add Task
      </button>
      {modelVisible && (
        <ModalCreate
          handleHideModalCreate={handleHideModalCreate}
          handleAddTask={handleAddTask}
        />
      )}
    </div>
  );
};

export default TaskCreator;
