import React from "react";
import "./work.css";

const Work = ({ title, deleteWork, changeWork, workTodo }) => {
  return (
    <div className="works">
      <p>{` ${title} `}</p>
      <input
        className="input"
        type="text"
        placeholder={title}
        onChange={changeWork}
      />
      <button className="button-in-work-todo" name="todo" onClick={workTodo}>
        انجام دادن
      </button>
      <button className="button-in-work-done" name="done" onClick={deleteWork}>
        انجام شده
      </button>
    </div>
  );
};

export default Work;
