import { useState } from "react";
import { Task } from "../types/Task";
import { TaskContext } from "./TaskContext";

type Props = {
  children: React.ReactNode;
};

export const TaskProvider = ({ children }: Props) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (taskId: number) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const updateTask = (updateTask: Task) => {
    setTasks(
      tasks.map((task) => (task.id == updateTask.id ? updateTask : task))
    );
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, updateTask }}>
      {children}
    </TaskContext.Provider>
  );
};
