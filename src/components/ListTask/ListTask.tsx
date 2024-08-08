import { useState } from "react";
import Input from "../Input/Input";
import "./ListTask.css";
import { Button } from "../Button/Button";

export const ListTask = () => {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);
  const addTask = () => {
    if (newTask) {
      setTasks([...tasks, newTask]);
      setNewTask("");
      console.log(tasks);
    }
  };

  return (
    <>
      <div className="container-input">
        <Input
          task={newTask}
          onTaskChange={(e) => setNewTask(e.target.value)}
        />
        <Button addTask={addTask} />
      </div>
      <div className="container-list">
        <ul className="list-group">
          {tasks.map((task, index) => (
            <li key={index} className="list-group-item">
              {task}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
