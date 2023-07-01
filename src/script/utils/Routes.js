import React from "react";

import { Routes, Route } from "react-router";

import App from "script/utils/App";
import Home from "script/page/Home";
import Product from "script/page/Product";
import About from "script/page/About";
import Franchise from "script/page/Franchise";
import Gallery from "script/page/Gallery";
// import PageNotFound from "script/page/PageNotFound";

const routes = (
  <Routes>
    <Route element={<App />}>
      <Route element={<Home />} path="/" />
      <Route element={<Product />} path="/product" />
      <Route element={<About />} path="/about" />
      <Route element={<Franchise />} path="/franchise" />
      <Route element={<Gallery />} path="/gallery" />
    </Route>

    {/* <Route element={<PageNotFound />} path="*" /> */}
  </Routes>
);

export default routes;
