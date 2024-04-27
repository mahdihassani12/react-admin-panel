import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import NoMatch from "./pages/NoMatch";
import Identity from "./layouts/Identity";
import Dashboard from "./pages/Dashboard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route element={<App />}>
        <Route path="/">
          <Route index element={<Dashboard />} />
          <Route element={<Identity />}>
            {/* Nested routes under Identity */}
            <Route path="login" element={<Login />} />
            <Route
              path="register"
              element={<Register />}
            />
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
