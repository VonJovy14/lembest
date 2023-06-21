import React from "react";

import "stylesheets/components/display/socialicon.scss";

import { Link } from "react-router-dom";

import { ReactComponent as Facebook } from "assets/images/social/Facebook.svg";
import { ReactComponent as Instagram } from "assets/images/social/Instagram.svg";
import { ReactComponent as Messenger } from "assets/images/social/Messenger.svg";
import { ReactComponent as Twitter } from "assets/images/social/Twitter.svg";
import { ReactComponent as Web } from "assets/images/social/Web.svg";
import { ReactComponent as WhatsApp } from "assets/images/social/WhatsApp.svg";

const _renderIcon = (type) => {
  switch (type) {
    case "facebook":
      return (
        <Link to="https://www.facebook.com/lembestlechonofficial/">
          <Facebook />
        </Link>
      );
    case "instagram":
      return (
        <Link to="https://www.instagram.com/lembestlechonofficial/">
          <Instagram />
        </Link>
      );
    case "messenger":
      return (
        <Link to="">
          <Messenger />
        </Link>
      );
    case "twitter":
      return (
        <Link to="">
          <Twitter />
        </Link>
      );
    case "web":
      return (
        <Link to="">
          <Web />
        </Link>
      );
    case "whatsapp":
      return (
        <Link to="https://wa.me/+639602511133">
          <WhatsApp />
        </Link>
      );
    default:
      return null;
  }
};

const SocialIcon = ({ type }) => {
  return <div className="social-icon-container">{_renderIcon(type)}</div>;
};

export default SocialIcon;
