import React from "react";
import "./Button.css";
type Props = {
  handleTask: () => void;
  text: string;
};

export const Button: React.FC<Props> = ({ handleTask, text }) => {
  return (
    <>
      <button className="btn btn-primary" type="button" onClick={handleTask}>
        {text}
      </button>
    </>
  );
};
