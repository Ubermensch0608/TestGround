import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

if (process.env.NODE_ENV === "development") {
  import("./mocks").then(({ setupMocks }) => {
    setupMocks();
  });
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
