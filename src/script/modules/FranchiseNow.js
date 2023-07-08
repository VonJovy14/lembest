import "stylesheets/modules/franchisenow.scss";

import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

import Container from "script/components/display/Container";
import Image from "script/components/display/Image";

import Store from "assets/images/Store.jpg";
import Title from "script/components/display/Title";
import Button from "script/components/input/Button";

function FranchiseNow() {
  return (
    <div className="franchise-now-container">
      <Container variant="background" color="orange">
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={8} className="banner-image-display-large">
            <div className="banner-image-container">
              <div className="banner-image-wrapper">
                <Image image={Store} fix_on="width" />
              </div>
            </div>
          </Grid>

          <Grid item xs={12} md={4}>
            <Container variant="background" color="white">
              <div className="franchise-now-details-container">
                <div className="franchise-now-details-wrapper">
                  <Title
                    text="start your business today!"
                    variant="inline"
                    color="blue"
                  />

                  <span>
                    Looking for profitable business, with proven system and best
                    support team?? Lembest is the answer!!
                  </span>

                  <Link to="franchise" className="link">
                    <Button variant="outlined" color="red" onClick={() => null}>
                      FRANCHISE NOW!
                    </Button>
                  </Link>
                </div>

                <div className="banner-image-display-small">
                  <Image image={Store} fix_on="width" />
                </div>

                <div className="banner-image-display-extra-small">
                  <Image image={Store} fix_on="height" />
                </div>
              </div>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default FranchiseNow;
