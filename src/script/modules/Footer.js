import React from "react";

import "stylesheets/modules/footer.scss";

import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { FooterButtons } from "script/constant/Buttons";

import Button from "script/components/input/Button";
import SocialIcon from "script/components/display/SocialIcon";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <h2 className="tagline">
          -------------------------------- TAG LINE
          --------------------------------
        </h2>

        <Grid container justifyContent="center" spacing={2}>
          {FooterButtons.map((data, index) => (
            <Grid item key={index}>
              <Link to={data.link} className="link">
                <Button
                  text={data.text}
                  design="wipe-fill-bottom"
                  onButtonClick={() => null}
                />
              </Link>
            </Grid>
          ))}
        </Grid>

        <div className="social-media-container">
          <span>FOLLOW US: </span>
          <SocialIcon type="facebook" />
          <SocialIcon type="instagram" />
          <SocialIcon type="whatsapp" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
