import React from "react";

import { Routes, Route } from "react-router";

import App from "script/utils/App";
import Home from "script/page/Home";
import Products from "script/page/Products";
import Franchise from "script/page/Franchise";
import About from "script/page/About";
import PageNotFound from "script/page/PageNotFound";

const routes = (
  <Routes>
    <Route element={<App />}>
      <Route element={<Home />} path="/" />
      <Route element={<Products />} path="/product" />
      <Route element={<Franchise />} path="/franchise" />
      <Route element={<About />} path="/about" />
    </Route>

    <Route element={<PageNotFound />} path="*" />
  </Routes>
);

export default routes;
