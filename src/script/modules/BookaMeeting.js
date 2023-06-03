import React, { useState } from "react";

import "stylesheets/modules/bookameeting.scss";

import { Grid } from "@material-ui/core";

function BookaMeeting() {
  const [isOnlineMeeting, setOnlineMeeting] = useState(false);

  return (
    <div className="book-a-meeting-container">
      <div className="meeting-button-container">
        <Grid container>
          <Grid item xs={6}>
            <div
              onClick={() => setOnlineMeeting(false)}
              className={
                "meeting-button " + (isOnlineMeeting ? null : "active")
              }
            >
              <span>OFFICE VISIT</span>
            </div>
          </Grid>

          <Grid item xs={6}>
            <div
              onClick={() => setOnlineMeeting(true)}
              className={
                "meeting-button " + (isOnlineMeeting ? "active" : null)
              }
            >
              <span>ONLINE MEETING</span>
            </div>
          </Grid>
        </Grid>
      </div>

      <div className="book-a-meeting-wrapper">
        <div
          className={
            "content-background form-container online-meeting-form-" +
            (isOnlineMeeting ? "show" : "hide")
          }
        >
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSda98z6cF6_d1XOw22y4GEV8SW169Si742reDFFHnZLbSJQpQ/viewform"
            title="Book a Meeting"
            width="500px"
            height="1017px"
            className="content-wrapper"
          />
        </div>

        <div
          className={
            "content-background form-container office-visit-form-" +
            (isOnlineMeeting ? "hide" : "show")
          }
        >
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSeyqKyxEuJ6aJFhjvrfS4cJFhNfjJZt-YgFJ0trTsIWD0lIqw/viewform"
            title="Book a Meeting"
            width="500px"
            height="1312px"
            className="content-wrapper"
          />
        </div>
      </div>
    </div>
  );
}

export default BookaMeeting;
