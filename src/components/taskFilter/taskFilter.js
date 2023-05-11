import { taskStatuses } from "../../constants";

const TaskFilter = ({ updateFilter }) => {
  const handleOnChangeFilter = (e) => {
    updateFilter(e.target.value);
  };
  const options = Object.keys(taskStatuses).map((stt) => {
    return (
      <option value={stt} key={stt}>
        {taskStatuses[stt]}
      </option>
    );
  });
  return (
    <div>
      <select id="status" onChange={(e) => handleOnChangeFilter(e)}>
        <option value="">All</option>
        {options}
      </select>
    </div>
  );
};

export default TaskFilter;
