import React from "react";
import "./Task.css";
import { MdDeleteForever } from "react-icons/md";

type Props = {
  task: string;
  removeTask: () => void;
};

export const Task: React.FC<Props> = ({ task, removeTask }) => {
  return (
    <section className="section-task">
      <li className="list-group-item">{task}</li>
      <MdDeleteForever onClick={removeTask} size={24} className="icon-pointer" />
    </section>
  );
};
