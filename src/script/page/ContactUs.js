import React, { Component } from "react";

import "stylesheets/page/contactus.scss";

import { Grid } from "@material-ui/core";

import MapandDirection from "script/modules/MapandDirection";
import Title from "script/components/display/Title";
import ContactForm from "script/modules/ContactForm";
import AdditionalContacts from "script/modules/AdditionalContacts";

export default class ContactUs extends Component {
  render() {
    return (
      <div className="contact-us-container">
        <div className="contact-us-map-and-direction-container">
          <MapandDirection />
        </div>

        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <div className="contact-us-title-container">
              <Title text="CONTACT US" variant="underline" color="blue" />
            </div>

            <AdditionalContacts />
          </Grid>

          <Grid item xs={12} md={6}>
            <ContactForm />
          </Grid>
        </Grid>
      </div>
    );
  }
}
