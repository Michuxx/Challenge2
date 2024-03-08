import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Routes, HashRouter, Route } from "react-router-dom";
import SuccessedPage from "./successedPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route index element={<App />}></Route>
        <Route path="successedPage" element={<SuccessedPage />}></Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
