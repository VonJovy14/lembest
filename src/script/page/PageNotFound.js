import "stylesheets/page/pagenotfound.scss";

import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

import Image from "script/components/display/Image";
import Manok from "assets/images/Manok.png";
import Title from "script/components/display/Title";
import Button from "script/components/input/Button";
import SocialMedia from "script/modules/SocialMedia";

function PageNotFound() {
  return (
    <div className="page-not-found-container">
      <div className="page-not-found-wrapper position-center">
        <Grid container justifyContent="center" alignItems="center" spacing={5}>
          <Grid item xs={12} lg={4}>
            <Image image={Manok} fix_on="width" />
          </Grid>

          <Grid item xs={12} lg={8}>
            <div className="page-not-found-title-container">
              <span className="error-code">404</span>

              <Title
                text="opps! page not found"
                size="large"
                variant="inline"
                color="blue"
              />

              <span>
                Sorry, the page you're looking for doesn't exist. If you think
                something is broken, report a problem.
              </span>
            </div>

            <Grid container spacing={2}>
              <Grid item xs>
                <Link to="/" className="link">
                  <Button variant="outlined" color="blue" onClick={() => null}>
                    RETURN HOME
                  </Button>
                </Link>
              </Grid>

              <Grid item xs>
                <Link to="contact-us" className="link">
                  <Button variant="outlined" color="blue" onClick={() => null}>
                    CONTACT US
                  </Button>
                </Link>
              </Grid>
            </Grid>

            <SocialMedia />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default PageNotFound;
