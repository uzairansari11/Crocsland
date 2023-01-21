import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./Context/AuthContextProvider";
import { ApiContextProvider } from "./Context/ApiContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 <BrowserRouter>
  <AuthContextProvider>
   <ApiContextProvider>
    <ChakraProvider>
     <App />
    </ChakraProvider>
   </ApiContextProvider>
  </AuthContextProvider>
 </BrowserRouter>
);
