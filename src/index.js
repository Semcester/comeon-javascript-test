import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import {
  AuthContextProvider,
  GameName,
  SearchContextProvider,
  CategoryContextProvider,
} from "./context/PlayerContext";

import "./index.css";
import App from "./App";
import "semantic-ui-css/semantic.min.css";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <GameName>
        <SearchContextProvider>
          <CategoryContextProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </CategoryContextProvider>
        </SearchContextProvider>
      </GameName>
    </AuthContextProvider>
  </React.StrictMode>
);
