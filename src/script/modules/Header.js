import React, { useState, useEffect } from "react";

import "stylesheets/modules/header.scss";

import { Grid } from "@material-ui/core";
import { Navigation } from "script/constant/Buttons";
import { Link, useLocation } from "react-router-dom";
import { NewsData } from "script/constant/News";
import Carousel from "react-bootstrap/Carousel";

import Logo from "assets/images/Logo1.png";

import Button from "script/components/input/Button";
import Image from "script/components/display/Image";
import Menu from "script/components/input/Menu";
import Modal from "script/components/display/Modal";
import NavigationPanel from "script/modules/NavigationPanel";

function Header() {
  const [activePage, setActivePage] = useState("/");
  const [headlineData, setHeadlineData] = useState([]);
  const [isMenuActive, setMenuActive] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setActivePage("//");
    } else {
      setActivePage(location.pathname);
    }

    handleHeadlineData();
  }, [location.pathname]);

  const handleHeadlineData = () => {
    const newHeadlineData = NewsData.filter((item) => item.headline);
    setHeadlineData(newHeadlineData);
  };

  const openMenuModal = () => {
    setMenuActive(true);
    setModalOpen(true);
  };

  const closeMenuModal = () => {
    setMenuActive(false);
    setModalOpen(false);
  };

  return (
    <>
      <div className="header-container">
        <div className="header-wrapper content-container">
          <Grid container>
            <Grid item xs>
              <div className="logo-container">
                <Image image={Logo} fix_on="height" />
              </div>
            </Grid>

            {Navigation.map((data, index) => (
              <Grid item key={index} className="navigation-container">
                <Link
                  to={data.link}
                  className="link"
                  onClick={() => setActivePage("/" + data.link)}
                >
                  <Button
                    variant="navigation"
                    color=""
                    active={activePage === "/" + data.link ? true : false}
                    onClick={() => null}
                  >
                    {data.text.toUpperCase()}
                  </Button>
                </Link>
              </Grid>
            ))}

            <Grid item className="hamburger-navigation-container">
              <Menu onClick={() => openMenuModal()} menuActive={isMenuActive} />
            </Grid>
          </Grid>
        </div>
      </div>

      <div className="headline-container">
        <div className="headline-wrapper content-container">
          <Carousel interval={2000} indicators={false} controls={false}>
            {headlineData.map((data, index) => (
              <Carousel.Item key={index}>
                <span className="one-line">
                  <b>{data.title.toUpperCase()}</b> -&nbsp;
                  <span>{data.details}</span>
                </span>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>

      <Modal open={isModalOpen} onModalClose={() => closeMenuModal()}>
        <NavigationPanel onButtonClick={() => closeMenuModal()} />
      </Modal>
    </>
  );
}

export default Header;
