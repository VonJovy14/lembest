import React from "react";

import { Routes, Route } from "react-router";

import App from "script/utils/App";
import Home from "script/page/Home"

const routes = (
  <Routes>
    <Route element={<App />}>
      <Route element={<Home />} path="/" />
    </Route>
  </Routes>
);

export default routes;