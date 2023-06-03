import React from "react";

import "stylesheets/modules/header.scss";

import { Grid } from "@material-ui/core";
import { Navbar } from "script/constant/Buttons";
import { Link } from "react-router-dom";

import Logo from "assets/images/Logo 1.png";

import Image from "script/components/display/Image";
import Button from "script/components/input/Button";

function Header() {
  return (
    <div className="header-container">
      <div className="header-wrapper">
        <Grid container alignItems="center">
          <Grid item xs>
            <div className="logo-container">
              <Image image={Logo} fix_on="height" />
            </div>
          </Grid>

          {Navbar.map((data, index) => (
            <Grid item key={index}>
              <Link to={data.link} className="link">
                <Button text={data.text} design="fill-on-hover" />
              </Link>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default Header;
