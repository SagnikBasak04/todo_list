import TaskItem from "../TaskItem/TaskItem";
import "./TaskList.css";

function TaskList({ tasks, onStatusChange, onDelete }) {
  if (tasks.length === 0) {
    return <p className="empty">No tasks yet.</p>;
  }

  return (
    <div className="task-list">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onStatusChange={onStatusChange}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default TaskList;
