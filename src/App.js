import React, { Component } from "react";
import "./index.css";
import Works from "./components/work/Works";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import NewWork from "./components/work/NewWork";
import SimpleContext from "./components/context/SimpleContext";
import Header from "./components/common/Header";

class App extends Component {
  constructor() {
    console.log("constructor rendred");
    super();
  }
  state = {
    works: [],
    work: "",
    showWorks: true,
    showHeader: true,
    appTitle: "سلام من به مردم غزه",
  };

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps rendred");
    return state;
  }

  componentDidMount() {
    console.log("componentDidMount rendrede ");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate rendred");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate rendred");
    const snapshot = { prevProps, prevState };
    return snapshot;
  }

  static contextType = SimpleContext;

  handleShowWorks = () => {
    this.setState({ showWorks: !this.state.showWorks });
  };

  handleShowHeader = () => {
    this.setState({ showHeader: !this.state.showHeader });
  };

  handleAddNewWork = () => {
    const works = [...this.state.works];
    const work = {
      id: Math.floor(Math.random() * 100),
      title: this.state.work, // Accessing the correct state variable
    };
    if (work.title !== "" && work.title.trim() !== "") {
      works.push(work);
      this.setState({ works, work: "" }); // Resetting the state variable

      toast.success("کار جدیدی اضافه شد", {
        position: "bottom-right",
        onClose: true,
        closeButton: true,
      });
    }
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
    work.fullname = event.target.value;

    const works = [...allWorks];
    allWorks[workIndex] = work;
    this.setState(works);
  };

  setWork = (event) => {
    this.setState({ work: event.target.value });
  };

  render() {
    const { showWorks, showHeader } = this.state;
    let work;
    let header;
    if (showWorks) {
      work = <Works />;
    }

    if (showHeader) {
      header = <Header />;
    }

    return (
      <SimpleContext.Provider
        value={{
          state: this.state,
          setWork: this.setWork, // Accessing the correct state variable
          handleAddNewWork: this.handleAddNewWork,
          handleChangeWorkName: this.handleChangeWorkName,
          handleDeleteWork: this.handleDeleteWork,
        }}
      >
        <div className="rtl text-center">
          {/* header */}
          {/* <Header appTitle="سلام من به مردم غزه" /> */}
          {header}
          <Button
            onClick={this.handleShowHeader}
            variant={showHeader ? "danger" : "success"}
          >
            {showHeader ? "پنهان هدر" : "نمایش هدر"}
          </Button>
          <NewWork />
          <Button
            onClick={this.handleShowWorks}
            variant={showWorks ? "info" : "danger"}
          >
            {showWorks ? "پنهان کارها" : "نمایش کارها"}
          </Button>
          {work}

          <ToastContainer />
        </div>
      </SimpleContext.Provider>
    );
  }
}

export default App;
