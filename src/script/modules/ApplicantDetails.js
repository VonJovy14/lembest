import React, { Component } from "react";

import "stylesheets/modules/applicantdetails.scss";

import {
  ApplicantData,
  AvailablePosition,
} from "script/constant/ApplicantDetails";

import Title from "script/components/display/Title";
import TextField from "script/components/input/TextField";
import Select from "script/components/input/Select";
import Button from "script/components/input/Button";
import Swal from "sweetalert2";

import ValidateApplicantDetails from "script/controller/ValidateApplicantDetails";

export default class ApplicantDetails extends Component {
  state = {
    applicantData: { ...ApplicantData },
  };

  handleApplicantDetailsChange = (variable, value) => {
    const newApplicantDetails = {
      ...this.state.applicantData,
      [variable]: value,
    };

    this.setState({ applicantData: newApplicantDetails });
  };

  handleSubmitApplicantDetails = () => {
    Swal.fire({
      title: "Are you sure?",
      text:
        "You're about to send and application for " +
        this.state.applicantData.position +
        ".",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, send my application.",
    }).then((result) => {
      if (result.isConfirmed) {
        ValidateApplicantDetails(this.state.applicantData);
      }
    });
  };

  render() {
    return (
      <div className="applicant-details-container">
        <Title
          text="applicant's information"
          variant="underline"
          size="medium"
          color="blue"
        />

        <div className="applicant-details-wrapper">
          <div className="basic-information-container">
            <Title text="Complete Name" variant="inline" color="blue" />

            <TextField
              label="First Name"
              value={this.state.applicantData.first_name}
              onChange={(data) =>
                this.handleApplicantDetailsChange("first_name", data)
              }
            />

            <TextField
              label="Middle Name"
              value={this.state.applicantData.middle_name}
              onChange={(data) =>
                this.handleApplicantDetailsChange("middle_name", data)
              }
            />

            <TextField
              label="Last Name"
              value={this.state.applicantData.last_name}
              onChange={(data) =>
                this.handleApplicantDetailsChange("last_name", data)
              }
            />
          </div>

          <div className="address-container">
            <Title text="Address" variant="inline" color="blue" />

            <TextField
              label="Barangay"
              value={this.state.applicantData.barangay}
              onChange={(data) =>
                this.handleApplicantDetailsChange("barangay", data)
              }
            />

            <TextField
              label="City / Municipality"
              value={this.state.applicantData.municipality}
              onChange={(data) =>
                this.handleApplicantDetailsChange("municipality", data)
              }
            />

            <TextField
              label="Province"
              value={this.state.applicantData.province}
              onChange={(data) =>
                this.handleApplicantDetailsChange("province", data)
              }
            />
          </div>

          <div className="contact-details-container">
            <Title text="Contact details" variant="inline" color="blue" />

            <TextField
              type="number"
              label="Contact Number"
              value={this.state.applicantData.contact}
              onChange={(data) =>
                this.handleApplicantDetailsChange("contact", data)
              }
            />

            <TextField
              label="Email Address"
              value={this.state.applicantData.email}
              onChange={(data) =>
                this.handleApplicantDetailsChange("email", data)
              }
            />
          </div>

          <div className="application-details-wrapper">
            <Title text="application details" variant="inline" color="blue" />

            <Select
              label="Position Desired"
              data={AvailablePosition}
              value={this.state.applicantData.position}
              onSelectChange={(data) =>
                this.handleApplicantDetailsChange("position", data)
              }
            />

            <TextField
              type="file"
              label="Updated Resume/Biodata"
              value={this.state.applicantData.resume}
              onChange={(data) =>
                this.handleApplicantDetailsChange("resume", data)
              }
            />
          </div>

          <Button
            variant="outlined"
            color="orange"
            onClick={() => this.handleSubmitApplicantDetails()}
          >
            SUBMIT
          </Button>
        </div>
      </div>
    );
  }
}
