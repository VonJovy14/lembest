import React from "react";

import "stylesheets/components/display/socialicon.scss";

import { ReactComponent as Facebook } from "assets/images/social/Facebook.svg";
import { ReactComponent as Instagram } from "assets/images/social/Instagram.svg";
import { ReactComponent as Messenger } from "assets/images/social/Messenger.svg";
import { ReactComponent as Twitter } from "assets/images/social/Twitter.svg";
import { ReactComponent as Web } from "assets/images/social/Web.svg";
import { ReactComponent as WhatsApp } from "assets/images/social/WhatsApp.svg";

const _renderIcon = (type) => {
  switch (type) {
    case "facebook":
      return <Facebook />;
    case "instagram":
      return <Instagram />;
    case "messenger":
      return <Messenger />;
    case "twitter":
      return <Twitter />;
    case "web":
      return <Web />;
    case "whatsapp":
      return <WhatsApp />;
    default:
      return null;
  }
};

const SocialIcon = ({ type }) => {
  return <div className="social-icon-container">{_renderIcon(type)}</div>;
};

export default SocialIcon;
