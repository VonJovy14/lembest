import React, { Component } from "react";

import "stylesheets/modules/bookameeting.scss";

import { Grid } from "@material-ui/core";

import Swal from "sweetalert2";

import Text from "script/components/input/Text";
import Date from "script/components/input/Date";
import Time from "script/components/input/Time";
import Button from "script/components/input/Button";

import FormatTime from "script/utils/format/FormatTime";
import FormatDate from "script/utils/format/FormatDate";

export default class BookaMeeting extends Component {
  state = {
    onlineMeeting: false,

    franchiseeInformation: {
      name: "",
      number: "",
      email: "",
      date: "",
      time: "",
    },
  };

  handleValueChange = (variable, value) => {
    var information = this.state.franchiseeInformation;
    information = { ...information, [variable]: value };

    this.setState({ franchiseeInformation: information });
    // console.log(value);
  };

  handleSubmit = () => {
    var information = this.state.franchiseeInformation;

    try {
      information.time = FormatTime(information.time);
      information.date = FormatDate(information.date);
    } catch (e) {
      Swal.fire(
        "Sorry!",
        "Something's wrong in your Date and Time. <br/>Please input a new Date and Time.",
        "error"
      );
    }

    console.log(information);
  };

  render() {
    return (
      <div className="book-a-meeting-container">
        <div className="meeting-button-container">
          <Grid container>
            <Grid item xs={6}>
              <div
                onClick={() => this.setState({ onlineMeeting: false })}
                className={
                  "meeting-button " +
                  (this.state.onlineMeeting ? null : "active")
                }
              >
                <span>OFFICE VISIT</span>
              </div>
            </Grid>

            <Grid item xs={6}>
              <div
                onClick={() => this.setState({ onlineMeeting: true })}
                className={
                  "meeting-button " +
                  (this.state.onlineMeeting ? "active" : null)
                }
              >
                <span>ONLINE MEETING</span>
              </div>
            </Grid>
          </Grid>
        </div>

        <div className="book-a-meeting-wrapper">
          <div className="content-background form-container schedule-container">
            <div className="content-wrapper schedule-wrapper">
              <h2>Franchisee Information</h2>

              <div className="breakline" />

              <Text
                value={this.state.name}
                label="Full Name"
                onTextChange={(value) => this.handleValueChange("name", value)}
              />

              <Text
                value={this.state.number}
                label="Contact Number"
                type="number"
                onTextChange={(value) =>
                  this.handleValueChange("number", value)
                }
              />

              <Text
                value={this.state.email}
                label="Email Address"
                onTextChange={(value) => this.handleValueChange("email", value)}
              />

              <div className="date-time-note-container">
                <span>
                  Please select your preferred date and time of{" "}
                  {this.state.onlineMeeting ? "meeting" : "visit"}.
                </span>

                <div
                  className={
                    "date-time-note-wrapper " +
                    (this.state.onlineMeeting ? "note-hide" : "note-show")
                  }
                >
                  <span>Office Hours:</span>
                  <span>Mondays to Saturdays (Including holidays)</span>
                  <span>08:00 AM - 05:00 PM</span>

                  <div className="date-time-additional-note">
                    <span>NOTE:</span>
                    <span>
                      Please note that the advisable time of visit would be on{" "}
                      <b>MONDAYS - THURSDAYS (08:00 AM - 05:00 PM)</b>.
                    </span>
                  </div>
                </div>
              </div>

              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <Date
                    value={this.state.date}
                    onDateChange={(value) =>
                      this.handleValueChange("date", value)
                    }
                  />
                </Grid>

                <Grid item xs={6}>
                  <Time
                    value={this.state.time}
                    onTimeChange={(value) =>
                      this.handleValueChange("time", value)
                    }
                  />
                </Grid>
              </Grid>

              <Button
                text="submit"
                design="submit-button"
                onButtonClick={() => this.handleSubmit()}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
