import React, { useState } from "react";
import "./work.css";

const Work = ({ title, deleteWork, changeWork, workTodo }) => {
  const [highlitePlaceholder, setHighlitePlaceholder] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleWorkDone = () => {
    if (highlitePlaceholder) {
      setShowMessage(true);
    } else {
      setHighlitePlaceholder(true);
      alert("پروژه تکمیل و آماده استفاده است");
    }
  };

  return (
    <div className="works">
      <p>{` ${title} `}</p>
      <input
        className="input"
        type="text"
        placeholder={highlitePlaceholder ? `✔️ ${title}` : title}
        onChange={changeWork}
      />
      <button className="button-in-work-todo" name="todo" onClick={workTodo}>
        انجام دادن
      </button>
      <button
        className="button-in-work-done"
        name="done"
        onClick={handleWorkDone}
      >
        انجام شده
      </button>
      <button
        className="button-in-work-delete"
        name="delete"
        onClick={deleteWork}
      >
        حذف
      </button>
    </div>
  );
};

export default Work;
