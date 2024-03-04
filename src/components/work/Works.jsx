import React, { useContext } from "react";
import Work from "./Work";
import SimpleContext from "../context/SimpleContext";

const Works = () => {
  const context = useContext(SimpleContext);
  return (
    <div>
      {context.works.map((work) => (
        <Work
          key={work.id}
          title={work.title}
          deleteWork={() => context.handleDeleteWork(work.id)}
          changeWork={(event) => context.handleChangeWorkName(event, work.id)}
        />
      ))}
    </div>
  );
};

export default Works;
