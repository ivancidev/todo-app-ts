import { useState } from "react";
import Input from "../Input/Input";
import "./ListTask.css";
import { Button } from "../Button/Button";
import { Task } from "../Task/Task";

export const ListTask = () => {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);
  const addTask = () => {
    if (newTask) {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const removeTask = (index: number) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <>
      <div className="container-input">
        <Input
          task={newTask}
          onTaskChange={(e) => setNewTask(e.target.value)}
        />
        <Button handleTask={addTask} text="Add Task" />
      </div>
      <div className="container-list">
        {tasks.map((task, index) => (
          <Task key={index} task={task} removeTask={() => removeTask(index)} />
        ))}
      </div>
    </>
  );
};
