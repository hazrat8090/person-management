import React from "react";
import Work from "./Work";

const Works = ({ works, deleteWork, changeWork, workTodo }) => {
  return (
    <div>
      {works &&
        works.map((work) => (
          <Work
            key={work.id}
            title={work.title}
            deleteWork={() => deleteWork(work.id)}
            changeWork={(event) => changeWork(event, work.id)}
            workTodo={workTodo}
          />
        ))}
    </div>
  );
};

export default Works;
