import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { ColorfulMessage } from "./compornents/ColorfulMessage";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);




root.render(
  <strictmode>
    <App />

  </strictmode>



);

