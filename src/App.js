import React from "react";
import { Component } from "react";
import "./index.css";
import Works from "./components/work/Works";

class App extends Component {
  state = {
    works: [],
    work: "",
    showWorks: false,
  };

  handleShowWorks = () => {
    this.setState({ showWorks: !this.state.showWorks });
  };

  handleDeleteWork = (id) => {
    const works = [...this.state.works];
    const worksArray = Object.values(works);
    const filteredWorks = worksArray.filter((p) => p.id !== id);
    this.setState({ works: filteredWorks });
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
    works.push(work);
    this.setState({ works, work: "" });
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

    const buttonStyle = {
      padding: "0.5em",
      fontFamily: "BYekan",
      fontWeight: "bold",
      margin: "0.8em",
      backgroundColor: "lime",
    };

    return (
      <div className="App">
        <h1>سلام من به مردم غزه</h1>
        <h2>مدیریت کننده کار های روز مره من {works.length}</h2>
        <div>
          <input
            className="input-in-app"
            type="text"
            style={{ direction: "rtl" }}
            placeholder="کار جدیدرا اضافه کن"
            value={this.state.work}
            onChange={this.setWork}
          />
          <button className="button-in-app" onClick={this.handleAddNewWork}>
            اضافه کردن کار
          </button>
        </div>
        <button onClick={this.handleShowWorks} style={buttonStyle}>
          نمایش کار ها
        </button>

        {work}
      </div>
    );
  }
}

export default App;
