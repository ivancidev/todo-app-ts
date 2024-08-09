import "./Task.css";
import { MdDeleteForever } from "react-icons/md";
import { RiEdit2Fill } from "react-icons/ri";

type Props = {
  task: string;
  removeTask: () => void;
  openEditModal: () => void;
};

export const TaskItem = ({ task, removeTask, openEditModal }: Props) => {
  return (
    <section className="section-task">
      <li className="list-group-item">{task}</li>
      <div>
        <MdDeleteForever
          onClick={removeTask}
          size={24}
          className="icon-pointer"
        />
        <RiEdit2Fill size={24} onClick={openEditModal} />
      </div>
    </section>
  );
};
