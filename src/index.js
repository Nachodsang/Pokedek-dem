import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

// import "antd/dist/antd.min.css";
//manual style
// import "antd/dist/reset.css";
// import "antd/dist/reset.css";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
