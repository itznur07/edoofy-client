import React from "react";
import ReactDOM from "react-dom/client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import AuthPorvider from "./Providers/AuthContext";
import router from "./Routes/Routes";
// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      {" "}
      <AuthPorvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthPorvider>
    </QueryClientProvider>
  </React.StrictMode>
);
