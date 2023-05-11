import "../modal.css";
import "./modalEdit.css";
import { taskStatuses } from "../../../constants";
import { useState } from "react";

const ModalEdit = ({ task, handleHideModalEdit, handleUpdateTask }) => {
  const options = Object.keys(taskStatuses).map((stt) => {
    return (
      <option value={stt} key={stt}>
        {taskStatuses[stt]}
      </option>
    );
  });
  const [title, setTitle] = useState(task.title);
  const [status, setStatus] = useState(task.status);
  const handleClickUpdateTask = () => {
    handleUpdateTask(task.id, { title: title, status: status });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    handleClickUpdateTask();
  };
  return (
    <div id="myModalEdit" className="modal">
      <span className="close" onClick={handleHideModalEdit}>
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
          <button className="" type="submit" onClick={(e) => handleSubmit(e)}>
            Update
          </button>
          <button className="" onClick={handleHideModalEdit}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalEdit;
