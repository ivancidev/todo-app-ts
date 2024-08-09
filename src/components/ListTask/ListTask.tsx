import { useState } from "react";
import Input from "../Input/Input";
import "./ListTask.css";
import { Button } from "../Button/Button";
import { Task } from "../../interfaces/task";
import { TaskItem } from "../Task/TaskItem";
import { EditTaskModal } from "../../modals/EditTaskModal";

export const ListTask = () => {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);
  const [isEditTask, setIsEditTask] = useState(false);
  const [currentTask, setCurrentTask] = useState<Task | null>(null);

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

  const editTask = (task: Task) => {
    const newTasks = [...tasks];
    newTasks[task.index] = task.title;
    setTasks(newTasks);
    setIsEditTask(false);
  };

  const handleEditTask = (index: number) => {
    setIsEditTask(true);
    setCurrentTask({ title: tasks[index], index, completed: false });
  }

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
          <TaskItem
            key={index}
            task={task}
            removeTask={() => removeTask(index)}
            openEditModal = {() => handleEditTask(index)}
          />
        ))}
      </div>
      {isEditTask && currentTask && (
        <EditTaskModal task={currentTask} onCloseTask={() => setIsEditTask(false)} onSaveTask={editTask}/>
      )}
    </>
  );
};
