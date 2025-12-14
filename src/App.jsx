import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import TaskInput from "./components/TaskInput/TaskInput";
import TaskList from "./components/TaskList/TaskList";
import "./index.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDark]);

  const addTask = (title) => {
    setTasks([...tasks, { id: Date.now(), title, status: "NEW" }]);
  };

  const updateStatus = (id, newStatus) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, status: newStatus } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <>
      <Header onToggleTheme={() => setIsDark(!isDark)} isDark={isDark} />
      <TaskInput onAdd={addTask} />
      <TaskList
        tasks={tasks}
        onStatusChange={updateStatus}
        onDelete={deleteTask}
      />
    </>
  );
}

export default App;
