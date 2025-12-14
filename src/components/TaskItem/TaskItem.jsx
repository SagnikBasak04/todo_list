import "./TaskItem.css";

function TaskItem({ task, onStatusChange, onDelete }) {
  return (
    <div className={`task ${task.status.toLowerCase()}`}>
      <span>{task.title}</span>

      <div className="actions">
        {task.status !== "IN_PROGRESS" && (
          <button onClick={() => onStatusChange(task.id, "IN_PROGRESS")}>
            ▶
          </button>
        )}
        {task.status !== "FINISHED" && (
          <button onClick={() => onStatusChange(task.id, "FINISHED")}>
            ✔
          </button>
        )}
        <button onClick={() => onDelete(task.id)}>✖</button>
      </div>
    </div>
  );
}

export default TaskItem;
