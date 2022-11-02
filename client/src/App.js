import React from "react";
import { Routes, Route } from "react-router-dom";
import routes from "./routes";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route path={routes.INDEX} element={<Home />} />
      <Route path={routes.LOGIN} element={<Login />} />
      <Route path={routes.DASHBOARD} element={<Dashboard />} />
    </Routes>
  );
}

export default App;
