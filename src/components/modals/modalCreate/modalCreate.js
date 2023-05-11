import "../modal.css";
import "./modalCreate.css";
import { taskStatuses } from "../../../constants";
import { useState } from "react";

const ModalCreate = ({ handleHideModalCreate, handleAddTask }) => {
  const options = Object.keys(taskStatuses).map((stt) => {
    return (
      <option value={stt} key={stt}>
        {taskStatuses[stt]}
      </option>
    );
  });
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("inCompleted");
  const handleClickAddTask = () => {
    handleAddTask({ title: title, status: status });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    handleClickAddTask();
  };
  return (
    <div id="myModalCreate" className="modal">
      <span className="close" onClick={handleHideModalCreate}>
        &times;
      </span>
      <div className="modal-content">
        <div className="input-group">
          <div className="input-label">Title</div>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="input-group">
          <div className="input-label">Status</div>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            {options}
          </select>
        </div>
        <div className="modal-bottom">
          <button className="" type="submit" onClick={handleSubmit}>
            Add Task
          </button>
          <button className="" onClick={handleHideModalCreate}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalCreate;
