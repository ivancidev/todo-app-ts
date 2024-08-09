type Props = {
    task: string;
    onTaskChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<Props> = ({ task, onTaskChange }) => {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Enter task"
        value={task}
        onChange={onTaskChange}
      />
    </div>
  );
};

export default Input;
