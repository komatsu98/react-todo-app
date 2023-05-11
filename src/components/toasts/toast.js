import "./toast.css";

const Toast = ({ noti }) => {
  const contentByType = {
    create: "Create",
    update: "Update",
    delete: "Delete",
  };
  const contentStatus = noti.status ? "successfully" : "failed";
  const text = `${contentByType[noti.type]} task ${contentStatus}`;
  return (
    <>
      <div id="snackbar">{text}</div>
    </>
  );
};

export default Toast;
