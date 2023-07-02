import React, { Component } from "react";

import "stylesheets/page/contactus.scss";

import { Grid } from "@material-ui/core";

import Title from "script/components/display/Title";
import ContactForm from "script/modules/ContactForm";
import AdditionalContacts from "script/modules/AdditionalContacts";

export default class ContactUs extends Component {
  render() {
    return (
      <div className="contact-us-container">
        <div className="google-maps-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d573.6806393931324!2d121.00113175462621!3d14.698565645544194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b14fa97747c5%3A0xa4aaff9df117bb87!2sLembest%20Foods%20Corporation!5e0!3m2!1sen!2sph!4v1688282383993!5m2!1sen!2sph"
            width="100%"
            height="500"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Google Maps"
          ></iframe>
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
