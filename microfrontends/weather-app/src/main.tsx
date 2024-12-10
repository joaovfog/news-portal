import React from "react";
import { createRoot } from "react-dom/client";
import Weather from "./Weather";
import "./index.css";

const root = createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <Weather />
  </React.StrictMode>
);
