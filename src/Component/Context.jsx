import React, { useContext } from "react";

const AppContext = React.createContext();
// const API_URL = `http://www.omdbapi.com/?apikey=6f605eb6&s=hacker`;
const AppProvider = ({ children }) => {
  return <AppContext.Provider value="AshishKK">{children}</AppContext.Provider>;
};
// global custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, useGlobalContext, AppProvider };
