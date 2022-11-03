import React from "react";
import { Routes, Route } from "react-router-dom";
import routes from "./routes";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AuthLayout from "./components/AuthLayout"
import Dashboard from "./pages/Dashboard";
// Dashboard Pages
import DashboardHome from "./components/Dashboard/Home"
import DashboardFilePage from "./components/Dashboard/FilePage";

function App() {
  return (
    <Routes>
      <Route path={routes.INDEX} element={<Home />} />
      <Route path={routes.REGISTER} element={<Register />} />
      <Route path={routes.LOGIN} element={<Login />} />
      <Route element={<AuthLayout />}>
        {/*Protected Routes*/}
        <Route path={routes.DASHBOARD} element={<Dashboard />} >
          <Route path="" element={<DashboardHome />} />
          <Route path=":filename" element={<DashboardFilePage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
