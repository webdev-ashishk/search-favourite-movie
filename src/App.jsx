import "./App.css";
import Home from "./Component/Home";
import { Routes, Route } from "react-router-dom";
import SingleMovie from "./Component/SingleMovie";
import Error from "./Component/Error";
import { AppContext } from "./Component/Context";
function App() {
  return (
    <>
      <AppContext.Provider value="AshishK">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movie/:id" element={<SingleMovie />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </AppContext.Provider>
    </>
  );
}

export default App;
