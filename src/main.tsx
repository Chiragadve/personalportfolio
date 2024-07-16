import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./globals.css";

// Ensure you have a type definition for the "root" element
const rootElement = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
