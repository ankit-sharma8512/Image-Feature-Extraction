import React from "react";
import { Routes, Route } from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <Routes>
      <Route path={routes.INDEX} element={<div>Hello World</div>} />
    </Routes>
  );
}

export default App;
