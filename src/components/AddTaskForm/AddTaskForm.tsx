import { useContext, useState } from "react";
import { TaskContext } from "../../context/TaskContext";
import { Task } from "../../types/Task";

export default function AddTaskForm() {
  const taskContext = useContext(TaskContext);
  const [title, setTitle] = useState<string>("");
  const [checkbox, setCheckbox] = useState<boolean>(false);

  if (!taskContext) {
    return <div>Loading...</div>;
  }

  const { addTask } = taskContext;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() === "") {
      return;
    }

    const newTask: Task = {
      id: Math.floor(Math.random() * 10000),
      title,
      completed: checkbox,
    };
    addTask(newTask);
    setTitle("");
    setCheckbox(false);
  };

  return (
    <form className="form-inline d-flex">
      <div className="form-group mx-sm-3 mb-2">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-check mt-1">
        <input
          className="form-check-input"
          type="checkbox"
          checked={checkbox}
          onChange={(e) => setCheckbox(e.target.checked)}
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary mb-2"
        onClick={handleSubmit}
      >
        Add Task
      </button>
    </form>
  );
}
