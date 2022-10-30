import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { ChakraProvider } from "@chakra-ui/react";
import { SelectProvider } from "./providers/SelectProvider";
import { TripProvider } from "./providers/TripProvider";

ReactDOM.render(
  <React.StrictMode>
    <SelectProvider>
      <TripProvider>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </TripProvider>
    </SelectProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
