import React, { useState } from "react";
import "./index.css";
import Works from "./components/work/Works";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import NewWork from "./components/work/NewWork";
import SimpleContext from "./components/context/SimpleContext";
import Header from "./components/common/Header";

const App = () => {
  const [getWorks, setWorks] = useState([]);
  const [getSingleWork, setSingleWork] = useState(""); // Changed to string state
  const [getShowWorks, setShowWorks] = useState(true);

  const handleShowWorks = () => {
    setShowWorks(!getShowWorks);
  };

  const handleAddNewWork = () => {
    const works = [...getWorks];
    const work = {
      id: Math.floor(Math.random() * 100),
      title: getSingleWork, // Accessing the correct state variable
    };
    if (work.title !== "" && work.title.trim() !== "") {
      works.push(work);
      setWorks(works);
      setSingleWork(""); // Resetting the state variable

      toast.success("کار جدیدی اضافه شد", {
        position: "bottom-right",
        onClose: true,
        closeButton: true,
      });
    }
  };

  const handleDeleteWork = (id) => {
    const works = [...getWorks];
    const worksArray = Object.values(works);
    const filteredWorks = worksArray.filter((p) => p.id !== id);
    setWorks(filteredWorks);

    const workIndex = worksArray.findIndex((p) => p.id === id);
    const work = worksArray[workIndex];
    toast.error(`${work.title} با موفقیت حذف شد`, {
      position: "top-right",
      onClose: true,
      closeButton: true,
    });
  };

  const handleChangeWorkName = (event, id) => {
    const workIndex = getWorks.findIndex((p) => p.id === id);
    if (workIndex === -1) {
      // Work with the given id not found
      return;
    }

    const updatedWorks = [...getWorks];
    updatedWorks[workIndex].title = event.target.value;
    setWorks(updatedWorks);
  };

  let work;
  if (getShowWorks) {
    work = <Works />;
  }

  return (
    <SimpleContext.Provider
      value={{
        works: getWorks,
        work: getSingleWork, // Accessing the correct state variable
        setWork: setSingleWork, // Passing the setter function directly
        handleAddNewWork: handleAddNewWork,
        handleChangeWorkName: handleChangeWorkName,
        handleDeleteWork: handleDeleteWork,
      }}
    >
      <div className="rtl text-center">
        {/* header */}
        <Header appTitle="سلام من به مردم غزه" />
        <NewWork />
        <Button
          onClick={handleShowWorks}
          variant={getShowWorks ? "info" : "danger"}
        >
          {getShowWorks ? "پنهان کارها" : "نمایش کارها"}
        </Button>
        {work}

        <ToastContainer />
      </div>
    </SimpleContext.Provider>
  );
};

export default App;
