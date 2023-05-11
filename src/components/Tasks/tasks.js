import "./tasks.css";
import { useState } from "react";
import ModalEdit from "../modals/modalEdit/modalEdit";

const Tasks = ({ tasks, handleUpdateTask, handleDeleteTask }) => {
  let [modalVisible, setModalVisible] = useState(false);
  const [taskChosen, updateTaskChosen] = useState(null);
  const handleHideModalEdit = () => {
    setModalVisible(false);
  };
  const handleClickEdit = (task) => {
    setModalVisible(true);
    updateTaskChosen(task);
  };
  const handleToggleStatus = (task) => {
    handleUpdateTask(task.id, {
      ...task,
      status: task.status === "completed" ? "inCompleted" : "completed",
    });
  };

  return (
    <>
      {tasks.map((task) => {
        const checkboxClass = `checkbox ${task.status}`;
        const contentClass = `content ${task.status}`;
        return (
          <div className="task" key={task.id} id={task.id}>
            <div className="left-content">
              <div
                className={checkboxClass}
                onClick={() => handleToggleStatus(task)}
              ></div>
              <div className={contentClass}>{task.title}</div>
            </div>
            <div className="right-content">
              <button onClick={() => handleDeleteTask(task.id)}>del</button>
              <button onClick={() => handleClickEdit(task)}>edit</button>
            </div>
          </div>
        );
      })}
      {modalVisible && (
        <ModalEdit
          task={taskChosen}
          handleHideModalEdit={handleHideModalEdit}
          handleUpdateTask={handleUpdateTask}
        />
      )}
    </>
  );
};
export default Tasks;
