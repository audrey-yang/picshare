import { useState } from "react";
import "./App.css";
import Display from "./components/Display";
import Passcode from "./components/Passcode";

const App = () => {
  const [authorized, setAuthorized] = useState(
    localStorage.getItem("authorized") == import.meta.env.VITE_SECRET_CODE
  );
  const authorize = () => {
    setAuthorized(true);
  };

  return authorized ? <Display /> : <Passcode authorize={authorize} />;
};

export default App;
