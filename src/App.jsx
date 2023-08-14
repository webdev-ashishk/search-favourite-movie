import "./App.css";
import Home from "./Component/Home";
import { Routes, Route } from "react-router-dom";
import SingleMovie from "./Component/SingleMovie";
import Error from "./Component/Error";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie/:id" element={<SingleMovie />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
