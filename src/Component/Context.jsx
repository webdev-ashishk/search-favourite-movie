import React, { useContext } from "react";

const AppContext = React.createContext();

// global custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, useGlobalContext };
