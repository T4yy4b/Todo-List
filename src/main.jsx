import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import TodoApp from "./components/TodoApp.jsx";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <TodoApp />
    </ChakraProvider>
  </React.StrictMode>
);
