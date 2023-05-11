import { useReducer, useRef, useEffect, useState } from "react";
import "./App.css";
import TaskCreator from "./components/taskCreator/taskCreator";
import TaskFilter from "./components/taskFilter/taskFilter";
import Tasks from "./components/Tasks/tasks";
import Toast from "./components/toasts/toast";
function App() {
  const initialTasks = [
    { id: 1, title: "Init task 1", status: "completed" },
    { id: 2, title: "Init task 2", status: "inCompleted" },
  ];
  let nextId = useRef(3);
  const updateNextId = () => {
    nextId.current = nextId.current + 1;
  };
  useEffect(updateNextId, [nextId]);
  const [noti, updateNoti] = useState(null);
  const showNoti = (noti) => {
    updateNoti(noti);
    setTimeout(() => updateNoti(null), 3000);
  };

  const taskReducer = (state, action) => {
    switch (action.type) {
      case "CREATE":
        const newState = [...state];
        newState.push({
          id: nextId.current,
          title: action.task.title,
          status: action.task.status,
        });
        updateNextId();
        showNoti({ status: true, type: "create" });
        return newState;
      case "UPDATE":
        showNoti({ status: true, type: "update" });
        return state.map((task) => {
          if (task.id === action.id) {
            return {
              ...task,
              title: action.task.title,
              status: action.task.status,
            };
          }
          return task;
        });
      case "TOGGLE_STATUS":
        showNoti({ status: true, type: "update" });
        state.map((task) => {
          if (task.id === action.id) {
            const newStatus =
              task.status === "completed" ? "inCompleted" : "completed";
            return { ...task, status: newStatus };
          }
          return task;
        });
        return state;
      case "DELETE":
        showNoti({ status: true, type: "delete" });
        return state.filter((task) => task.id !== action.id);
      default:
        return state;
    }
  };
  const [tasks, dispatchTask] = useReducer(taskReducer, initialTasks);
  const [filterStatus, updateFilterStatus] = useState("");
  const handleDeleteTask = (id) => {
    dispatchTask({ type: "DELETE", id: id });
  };
  const handleToggleStatus = (id) => {
    dispatchTask({ type: "TOGGLE_STATUS", id: id });
  };
  const handleAddTask = (data) => {
    dispatchTask({ type: "CREATE", task: data });
  };
  const handleUpdateTask = (id, data) => {
    dispatchTask({ type: "UPDATE", id: id, task: data });
  };
  const updateFilter = (status) => {
    updateFilterStatus(status);
  };
  const showTasks = tasks.filter(
    (task) => !filterStatus || task.status === filterStatus
  );
  return (
    <div className="container">
      <div className="title">TODO LIST</div>
      <div className="top-bar">
        <TaskCreator className="task-creator" handleAddTask={handleAddTask} />
        <TaskFilter className="task-filter" updateFilter={updateFilter} />
      </div>
      <div className="tasks">
        <Tasks
          tasks={showTasks}
          handleDeleteTask={handleDeleteTask}
          handleToggleStatus={handleToggleStatus}
          handleUpdateTask={handleUpdateTask}
        />
      </div>
      <div className="toast">{noti && <Toast noti={noti} />}</div>
    </div>
  );
}

export default App;
