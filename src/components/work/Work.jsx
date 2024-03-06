import React, { Component } from "react";
import "./work.css";

class Work extends Component {
  componentWillUnmount() {
    console.log("componentWillUnmount rendred");
  }

  render() {
    const { title, changeWork, deleteWork } = this.props;
    return (
      <div className="card mt-3 mb-3 bg-success w-25 text-white mx-auto">
        <div className="card-body text-center">
          <p className="d-block">{` ${title} `}</p>
          <div className="input-group justify-content-center">
            <input
              className="form-control"
              type="text"
              onChange={changeWork}
              placeholder={title}
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
  }
}

export default Work;
