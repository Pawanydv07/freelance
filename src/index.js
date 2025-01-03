import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { VideoProvider } from "./context/VideoContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <VideoProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </VideoProvider>
);
