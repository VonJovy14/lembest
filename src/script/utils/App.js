import React from 'react'

import "stylesheets/utils/app.scss"
import "stylesheets/utils/fonts.scss"
import "stylesheets/utils/colors.scss"

import { Outlet } from "react-router-dom";

import Header from 'script/modules/Header';

function App() {
  return (
    <div className='app-container'>
      <Header/>
      <Outlet />
    </div>
  )
}


export default App