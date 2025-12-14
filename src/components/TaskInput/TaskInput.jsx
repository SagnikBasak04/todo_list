import { useState } from "react";
import "./TaskInput.css";

function TaskInput({ onAdd }) {
  const [text, setText] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText("");
  };

  return (
    <form className="task-input" onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="What needs to be done?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

export default TaskInput;
