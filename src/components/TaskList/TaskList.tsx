import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
import { Task } from "../../types/Task";
import "./TaskList.css"

export default function TaskList() {
  const taskContext = useContext(TaskContext);

  if (!taskContext) {
    return <div>Cargando...</div>;
  }

  const { tasks, updateTask } = taskContext;

  const handleUpdateTask = (task: Task) => {
    task.completed = !task.completed;
    updateTask(task);
  }
  return (
    <div className="task-list">
      {tasks.map((task: Task) => (
        <div className="task-item" key={task.id}>
          <span className="task-title">{task.title}</span>
          <button
            className={`task-status ${
              task.completed ? "completed" : "pending"
            } border-0`}
            onClick={() => handleUpdateTask(task)}
          >
            {task.completed ? "Finalizado" : "Pendiente"}
          </button>
        </div>
      ))}
    </div>
  );
}
