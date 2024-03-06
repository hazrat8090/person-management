import React, { useContext } from "react";
import SimpleContext from "../context/SimpleContext";

const NewWork = () => {
  console.log("new work rendred");
  const context = useContext(SimpleContext);
  return (
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
            value={context.state.work} // Accessing context.work directly
            onChange={context.setWork} // Setting the value directly
          />
          <div className="input-group-prepend">
            <button
              onClick={context.handleAddNewWork}
              className="btn btn-sm btn-success fa fa-plus-square"
            ></button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewWork;
