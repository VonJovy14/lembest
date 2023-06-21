import React from "react";

import "stylesheets/utils/app.scss";
import "stylesheets/utils/fonts.scss";
import "stylesheets/utils/colors.scss";

import { Outlet } from "react-router-dom";

import Header from "script/modules/Header";
import Footer from "script/modules/Footer";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
