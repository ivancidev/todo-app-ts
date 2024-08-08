import React from 'react';
import './Button.css'
type Props = {
  addTask: () => void;
};

export const Button: React.FC<Props> = ({ addTask }) => {
  return (
    <>
      <button className="btn btn-primary" type="button" onClick={addTask}>
        Add Task
      </button>
    </>
  );
};
