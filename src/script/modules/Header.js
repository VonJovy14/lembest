import React, { useState, useEffect } from "react";

import "stylesheets/modules/header.scss";

import { Grid } from "@material-ui/core";
import { Navbar } from "script/constant/Buttons";
import { Link, useLocation } from "react-router-dom";

import Logo from "assets/images/Logo New.png";

import Image from "script/components/display/Image";
import Button from "script/components/input/Button";

function Header() {
  const [activePage, setActivePage] = useState("/");
  const location = useLocation();

  useEffect(() => {
    // const pathName = location.pathname;
    // console.log(location.pathname);
    // setActivePage(pathName);
    // setActivePage(location.pathname);
    if (location.pathname === "/") {
      setActivePage("//");
    } else {
      setActivePage(location.pathname);
    }
  }, [location.pathname]);

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
              <Link
                to={data.link}
                className="link"
                onClick={() => setActivePage("/" + data.link)}
              >
                <Button
                  text={data.text}
                  design={
                    "fill-on-hover navigation " +
                    (activePage === "/" + data.link ? "active" : null)
                  }
                  onButtonClick={() => null}
                />
              </Link>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default Header;
