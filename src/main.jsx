import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

//find out what is he purpose of line 4 and line 11 in more detail explaination

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
