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
    <div className="card mt-3 mb-3 bg-success w-25 text-white mx-auto">
      <div className="card-body text-center">
        <p className="d-block">{` ${title} `}</p>
        <div className="input-group justify-content-center">
          <input
            className="form-control"
            type="text"
            placeholder={highlitePlaceholder ? `✔️ ${title}` : title}
            onChange={changeWork}
          />
          <div className="input-group-prepend">
            <button
              className="btn btn-danger fa fa-trash"
              name="delete"
              onClick={deleteWork}
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
