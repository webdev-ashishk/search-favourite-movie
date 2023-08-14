import React, { useContext } from "react";
import { AppContext, useGlobalContext } from "./Context";

const Home = () => {
  // const name = useContext(AppContext);
  const name = useGlobalContext();
  return (
    <>
      <div>Home</div>
      <p>{name}</p>
    </>
  );
};

export default Home;
