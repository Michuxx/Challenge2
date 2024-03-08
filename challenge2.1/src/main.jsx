import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { Routes, HashRouter, Route } from "react-router-dom";
import SuccessedPage from "./successedPage";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route index element={<App />}></Route>
        <Route path="successedPage" element={<SuccessedPage />}></Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
