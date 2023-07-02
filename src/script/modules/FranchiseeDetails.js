import React, { Component } from "react";

import "stylesheets/modules/franchisedetails.scss";

import { MeetingType, FranchiseeData } from "script/constant/Franchise";
import { Grid } from "@material-ui/core";

import GroupButton from "script/components/input/GroupButton";
import Container from "script/components/display/Container";
import Title from "script/components/display/Title";
import TextField from "script/components/input/TextField";
import Collapsible from "script/components/display/Collapsible";
import OfficeHours from "script/constant/OfficeHours";
import Button from "script/components/input/Button";
import Swal from "sweetalert2";

import ValidateFranchiseeDetails from "script/controller/ValidateFranchiseeDetails";

export default class FranchiseeDetails extends Component {
  state = {
    activeId: 2,
    franchiseeDetails: { ...FranchiseeData },
  };

  handleMeetingTypeChange = (buttonId) => {
    this.setState({ activeId: buttonId });
  };

  handleFranchiseeDetailsChange = (variable, value) => {
    const newFranchiseeDetails = {
      ...this.state.franchiseeDetails,
      [variable]: value,
    };

    this.setState({ franchiseeDetails: newFranchiseeDetails });
  };

  handleSubmitFranchiseeDetails = () => {
    Swal.fire({
      title: "Are you sure?",
      text:
        "You're about to book an " +
        (this.state.activeId === 2 ? "Online Meeting" : "Office Visit") +
        " with us.",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText:
        "Yes, book me an " +
        (this.state.activeId === 2 ? "Online Meeting" : "Office Visit") +
        ".",
    }).then((result) => {
      if (result.isConfirmed) {
        ValidateFranchiseeDetails(this.state.franchiseeDetails);
      }
    });
  };

  render() {
    return (
      <div className="franchise-details-container">
        <div className="meeting-type-button-container">
          <GroupButton
            data={MeetingType}
            variant="bordered"
            activeId={this.state.activeId}
            color="yellow"
            onButtonClick={(data) => this.handleMeetingTypeChange(data)}
          />
        </div>

        <Container variant="background" color="orange">
          <Container variant="background" color="white">
            <div className="franchisee-information-container">
              <div className="franchisee-information-title-container">
                <Title
                  text="franchisee information"
                  variant="inline"
                  size="medium"
                  color="blue"
                />
              </div>
              <TextField
                label="Full Name"
                value={this.state.franchiseeDetails.full_name}
                onChange={(data) =>
                  this.handleFranchiseeDetailsChange("full_name", data)
                }
              />
              <TextField
                label="Contact Number"
                type="number"
                value={this.state.franchiseeDetails.contact_number}
                onChange={(data) =>
                  this.handleFranchiseeDetailsChange("contact_number", data)
                }
              />
              <TextField
                label="Email"
                type="email"
                value={this.state.franchiseeDetails.email}
                onChange={(data) =>
                  this.handleFranchiseeDetailsChange("email", data)
                }
              />
              <div className="date-time-note-container">
                <span>
                  Select your preferred date and time of{" "}
                  {this.state.activeId === 2 ? "meeting" : "visit"}.
                </span>

                <Collapsible open={this.state.activeId === 2 ? true : false}>
                  <OfficeHours />
                </Collapsible>
              </div>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    label="Date"
                    type="date"
                    value={this.state.franchiseeDetails.date}
                    onChange={(data) =>
                      this.handleFranchiseeDetailsChange("date", data)
                    }
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    label="Time"
                    type="time"
                    value={this.state.franchiseeDetails.time}
                    onChange={(data) =>
                      this.handleFranchiseeDetailsChange("time", data)
                    }
                  />
                </Grid>
              </Grid>

              <Button
                variant="outlined"
                color="orange"
                onClick={() => this.handleSubmitFranchiseeDetails()}
              >
                SUBMIT
              </Button>
            </div>
          </Container>
        </Container>
      </div>
    );
  }
}
