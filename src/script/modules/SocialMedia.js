import "stylesheets/modules/socialmedia.scss";

import { SocialMediaPlatform } from "script/constant/Buttons";
import { Grid } from "@material-ui/core";

import Facebook from "assets/images/social/Facebook.svg";
import Instagram from "assets/images/social/Instagram.svg";
import WhatsApp from "assets/images/social/WhatsApp.svg";
import Viber from "assets/images/social/Viber.png";
import Youtube from "assets/images/social/Youtube.svg";

function SocialMedia() {
  const _renderIcon = (type) => {
    switch (type) {
      case "facebook":
        return <img src={Facebook} alt="" />;
      case "instagram":
        return <img src={Instagram} alt="" />;
      case "whatsapp":
        return <img src={WhatsApp} alt="" />;
      case "viber":
        return <img src={Viber} alt="" />;
      case "youtube":
        return <img src={Youtube} alt="" />;
      default:
        return null;
    }
  };

  return (
    <div className="social-media-icon-container">
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={"auto"}>
          <span>Follow us on:</span>
        </Grid>

        {SocialMediaPlatform.map((data, index) => (
          <Grid item key={index}>
            <a href={data.link}>
              <div className="social-media-icon-wrapper">
                {_renderIcon(data.type)}
              </div>
            </a>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default SocialMedia;
