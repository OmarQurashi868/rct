import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Stats from "./pages/Stats";

function App() {
  // TODO: Screen transitions

  const [errorState, setErrorState] = useState("");
  const errorHandler = (error: string) => {
    if (errorState != error) setErrorState(error);
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/stats" element={<Stats setErrorState={setErrorState} />} />
        <Route path="/" element={<Home errorState={errorState} setErrorState={errorHandler} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;