import React from "react";                      //Responsavel pelo core o react em sí
import ReactDOM from "react-dom/client";        //Integração do react com o DOM
//DOM = Document Object Model
//DOm = Representação do HTML através do JavaScript.
import { App } from "./App";                    //meu "html"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
