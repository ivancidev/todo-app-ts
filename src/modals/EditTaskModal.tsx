import { useState } from "react";
import { Task } from "../interfaces/task";
import './EditTaskModal.css'

type Props = {
  task: Task;
  onSaveTask: (task: Task) => void;
  onCloseTask: () => void;
};

export const EditTaskModal = ({ task, onCloseTask, onSaveTask }: Props) => {
  const [editTask, setEditTask] = useState(task.title);

  const handleSave = () => {
    onSaveTask({ ...task, title: editTask });
  };
  return (
    <div className="modal-background">
      <div className="modal-content">
        <h2>Edit Task</h2>
        <input
          type="text"
          value={editTask}
          onChange={(e) => setEditTask(e.target.value)}
        />
        <button onClick={handleSave}>Save</button>
        <button onClick={onCloseTask}>Cancel</button>
      </div>
    </div>
  );
};
