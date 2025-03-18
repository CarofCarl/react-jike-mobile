import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import App from "./App.tsx";

//import "normalize.css";

// 导入provider
import { RouterProvider } from "react-router-dom";
// 导入router实例
import { router } from "./router/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
