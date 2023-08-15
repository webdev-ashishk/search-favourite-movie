import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();
const API_URL = `http://www.omdbapi.com/?apikey=6f605eb6`;
const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [isError, setIsError] = useState({ show: "false", msg: "" });
  const [query, setQuery] = useState("hacker");
  async function getMovies(url) {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if (data.Response === "True") {
        setIsLoading(false);
        setIsError({
          show: false,
          msg: "",
        });
        setMovie(data.Search);
      } else {
        setIsError({
          show: true,
          msg: data.Error,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    let timerOut = setTimeout(() => {
      getMovies(`${API_URL}&s=${query}`);
    }, 3000);
    return () => clearTimeout(timerOut);
  }, [query]);
  return (
    <AppContext.Provider value={{ isLoading, isError, movie, query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};
// global custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, useGlobalContext, AppProvider };
