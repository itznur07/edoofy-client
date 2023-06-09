import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import AuthPorvider from "./Providers/AuthContext";
import router from "./Routes/Routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthPorvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthPorvider>
  </React.StrictMode>
);
