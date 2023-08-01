import React from "react";

import "stylesheets/utils/app.scss";
import "stylesheets/utils/fonts.scss";
import "stylesheets/utils/colors.scss";

import { Outlet } from "react-router-dom";

import Header from "script/modules/Header";
import Footer from "script/modules/Footer";
// import Messenger from "script/components/input/Messenger";

function App() {
  return (
    <div className="app-container">
      <Header />

      <div className="app-wrapper">
        <Outlet />
      </div>

      {/* <Messenger /> */}
      <Footer />
    </div>
  );
}

export default App;
