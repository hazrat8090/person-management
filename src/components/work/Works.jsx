import React, { PureComponent } from "react";
import Work from "./Work";

class Works extends PureComponent {
  render() {
    const { handleDeleteWork, handleChangeWorkName, works } = this.props;
    return (
      <div>
        {works.map((work) => (
          <Work
            key={work.id}
            title={work.title}
            deleteWork={() => handleDeleteWork(work.id)}
            changeWork={(event) => handleChangeWorkName(event, work.id)}
          />
        ))}
      </div>
    );
  }
}

export default Works;
