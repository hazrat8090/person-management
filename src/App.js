import React from "react";
import { Component } from "react";
import "./index.css";
import Works from "./components/work/Works";
import { Alert, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";

class App extends Component {
  state = {
    works: [],
    work: "",
    showWorks: true,
  };

  handleShowWorks = () => {
    this.setState({ showWorks: !this.state.showWorks });
  };

  handleDeleteWork = (id) => {
    const works = [...this.state.works];
    const worksArray = Object.values(works);
    const filteredWorks = worksArray.filter((p) => p.id !== id);
    this.setState({ works: filteredWorks });

    const workIndex = worksArray.findIndex((p) => p.id === id);
    const work = worksArray[workIndex];
    toast.error(`${work.title} با موفقیت حذف شد`, {
      position: "top-right",
      onClose: true,
      closeButton: true,
    });
  };

  handleChangeWorkName = (event, id) => {
    const { works: allWorks } = this.state;
    const workIndex = allWorks.findIndex((p) => p.id === id);
    const work = allWorks[workIndex];
    work.title = event.target.value;
    console.log(event);

    const works = [...allWorks];
    this.setState({ works });
  };

  handleAddNewWork = () => {
    const works = [...this.state.works];
    const work = {
      id: Math.floor(Math.random() * 100),
      title: this.state.work,
    };
    if (work.title !== "" && work.title !== " ") {
      works.push(work);
      this.setState({ works, work: "" });

      toast.success("کار جدیدی اضافه شد", {
        position: "bottom-right",
        onClose: true,
        closeButton: true,
      });
    }
  };

  setWork = (event) => {
    this.setState({ work: event.target.value });
  };

  handleWorksTodo = () => {
    alert("پروژه به لیست پروزه های تحت کار اضافه شد");
  };

  render() {
    const { works, showWorks } = this.state;
    let work;
    if (showWorks) {
      work = (
        <Works
          works={works}
          deleteWork={this.handleDeleteWork}
          changeWork={this.handleChangeWorkName}
          workTodo={this.handleWorksTodo}
        />
      );
    }

    let badgeStyle = [];
    if (works.length >= 3) badgeStyle.push("badge-success");
    if (works.length === 2) badgeStyle.push("badge-warning");
    if (works.length <= 1) badgeStyle.push("badge-danger");

    return (
      <div className="rtl text-center">
        <Alert variant="info">
          <h1>سلام من به مردم غزه</h1>
        </Alert>

        <h5 className="alert alert-dark">
          {" "}
          تعداد کار های روز مره من{" "}
          <span className={`badge badge-pill ${badgeStyle.join("")}`}>
            {" "}
            {works.length}{" "}
          </span>{" "}
          کار میباشد
        </h5>

        <div className="m-2 p-2">
          <form
            className="form-inline justify-content-center abs"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="input-group w-25">
              <input
                className="form-control"
                type="text"
                style={{ direction: "rtl" }}
                placeholder="کار جدیدرا اضافه کن"
                value={this.state.work}
                onChange={this.setWork}
              />
              <div className="input-group-prepend">
                <button
                  onClick={this.handleAddNewWork}
                  className="btn btn-sm btn-success fa fa-plus-square"
                ></button>
              </div>
            </div>
          </form>
        </div>
        <Button
          onClick={this.handleShowWorks}
          variant={showWorks ? "info" : "danger"}
        >
          نمایش کار ها
        </Button>

        {work}
        <ToastContainer />
      </div>
    );
  }
}

export default App;
