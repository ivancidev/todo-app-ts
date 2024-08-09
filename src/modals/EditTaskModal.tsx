import { useState } from "react";
import { Task } from "../interfaces/task";
import "./EditTaskModal.css";
import { Button } from "../components/Button/Button";
import Input from "../components/Input/Input";

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
        <Input task={editTask} onTaskChange={(e) => setEditTask(e.target.value)}/>
        <div className="button-group">
          <Button handleTask={handleSave} text="Save" />
          <Button handleTask={onCloseTask} text="Close" />
        </div>
      </div>
    </div>
  );
};
