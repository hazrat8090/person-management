import { createContext } from "react";

const SimpleContext = createContext({
  works: [],
  work: "",
  handleDeleteWork: () => {},
  handleChangeWorkName: () => {},
  handleAddNewWork: () => {},
  setWork: () => {},
});

export default SimpleContext;
