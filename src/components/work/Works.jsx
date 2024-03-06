import React, { PureComponent } from "react";
import Work from "./Work";

class Works extends PureComponent {
  render() {
    const { works, deleteWork, changeWork } = this.props;
    return (
      <div>
        {works.map((work) => (
          <Work
            key={work.id}
            title={work.title}
            deleteWork={() => deleteWork(work.id)}
            changeWork={(event) => changeWork(event, work.id)}
          />
        ))}
      </div>
    );
  }
}

export default Works;
