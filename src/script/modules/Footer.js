import React from "react";

import "stylesheets/modules/footer.scss";

import { Grid } from "@material-ui/core";
import { FooterButtons } from "script/constant/Buttons";
import { Link } from "react-router-dom";

import Title from "script/components/display/Title";
import Button from "script/components/input/Button";
import SocialMedia from "script/modules/SocialMedia";

function Footer() {
  return (
    <div className="footer-container">
      <Title
        text="TAG LINETAG LINETAG LINETAG LINETAG LINETAG LINE"
        variant="inline"
        color="blue"
      />

      <div className="footer-wrapper">
        <Grid container spacing={2} justifyContent="center">
          {FooterButtons.map((data, index) => (
            <Grid item key={index}>
              <Link to={data.link} className="link">
                <Button variant="wipe" color="orange" onClick={() => null}>
                  {data.text.toUpperCase()}
                </Button>
              </Link>
            </Grid>
          ))}
        </Grid>
      </div>

      <div className="footer-social-media-icon-container">
        <SocialMedia />
      </div>
    </div>
  );
}

export default Footer;
