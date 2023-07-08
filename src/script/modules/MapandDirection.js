import "stylesheets/modules/mapsanddirection.scss";

import { Grid } from "@material-ui/core";

import Title from "script/components/display/Title";
import Image from "script/components/display/Image";

import GoogleMaps from "assets/images/social/Google Maps.png";
import Waze from "assets/images/social/Waze.png";

function MapandDirection() {
  return (
    <div className="map-and-direction-container">
      <div className="google-maps-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d573.6806393931324!2d121.00113175462621!3d14.698565645544194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b14fa97747c5%3A0xa4aaff9df117bb87!2sLembest%20Foods%20Corporation!5e0!3m2!1sen!2sph!4v1688282383993!5m2!1sen!2sph"
          width="100%"
          height="500"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps"
        ></iframe>
      </div>

      <div className="direction-container">
        <Title text="need direction?" variant="inline" color="blue" />

        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          <Grid item>
            <a href="https://www.google.com/maps/dir//Lembest+Foods+Corporation,+2069+Kadon,+Valenzuela,+1448+Metro+Manila/@14.6986413,120.9310731,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3397b14fa97747c5:0xa4aaff9df117bb87!2m2!1d121.0011107!2d14.6986232?authuser=0&entry=ttu">
              <div className="direction-icon-container google-maps-container">
                <div className="direction-icon-wrapper">
                  <Image image={GoogleMaps} fix_on="width" />
                </div>
              </div>
            </a>
          </Grid>

          <Grid item>
            <a href="https://ul.waze.com/ul?place=ChIJxUd3qU-xlzMRh7sX8Z3_qqQ&ll=14.69865180%2C121.00111360&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location">
              <div className="direction-icon-container waze-container">
                <div className="direction-icon-wrapper">
                  <Image image={Waze} fix_on="width" />
                </div>
              </div>
            </a>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default MapandDirection;
