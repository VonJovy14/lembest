import React, { useState } from "react";

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
import Modal from "script/components/display/Modal";
import Loading from "script/components/display/Loading";

import emailjs from "@emailjs/browser";
import ValidateContactNumber from "script/Controller/ValidateContactNumber";

function FranchiseeDetails() {
  const [franchiseeDetails, setFranchiseeDetails] = useState({
    ...FranchiseeData,
  });
  const [activeId, setActiveId] = useState(2);
  const [loadingOpen, setLoadingOpen] = useState(false);

  const handleMeetingTypeChange = (buttonId) => {
    setActiveId(buttonId);
  };

  const handleFranchiseeDetailsChange = (e) => {
    setFranchiseeDetails({
      ...franchiseeDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    setLoadingOpen(true);
    e.preventDefault();

    const isContactCorrect = ValidateContactNumber(
      franchiseeDetails.contact_number
    );

    const template = activeId === 2 ? "template_6r0enpg" : "template_ufsu3un";

    if (!isContactCorrect) {
      Swal.fire("Sorry!", "Please check your contact number.", "error");
    } else {
      Swal.fire({
        title: "Are you sure?",
        text:
          "You're about to book an " +
          (activeId === 2 ? "Online Meeting" : "Office Visit") +
          " with us.",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText:
          "Yes, book me an " +
          (activeId === 2 ? "Online Meeting" : "Office Visit") +
          ".",
      }).then((result) => {
        if (result.isConfirmed) {
          emailjs
            .send(
              "service_msn0lmk",
              template,
              franchiseeDetails,
              "bv_cSB9LyGWse6cS8"
            )
            .then(
              async (result) => {
                Swal.fire(
                  "Thank you!",
                  "We will be contacting you soon!",
                  "success"
                );
                await setFranchiseeDetails({ ...FranchiseeData });
                await setLoadingOpen(false);
              },
              (error) => {
                Swal.fire(
                  "Sorry!",
                  "Something went wrong, please try again.",
                  "error"
                );
              }
            );
        }
      });
    }
  };

  return (
    <>
      <div className="franchise-details-container">
        <div className="meeting-type-button-container">
          <GroupButton
            data={MeetingType}
            variant="bordered"
            activeId={activeId}
            color="yellow"
            onButtonClick={(data) => handleMeetingTypeChange(data)}
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

              <form onSubmit={handleSubmit}>
                <TextField
                  label="Full Name"
                  value={franchiseeDetails.full_name}
                  onChange={handleFranchiseeDetailsChange}
                />

                <TextField
                  label="Contact Number"
                  type="number"
                  value={franchiseeDetails.contact_number}
                  onChange={handleFranchiseeDetailsChange}
                />

                <TextField
                  label="Email"
                  type="email"
                  value={franchiseeDetails.email}
                  onChange={handleFranchiseeDetailsChange}
                />

                <div className="date-time-note-container">
                  <span>
                    Select your preferred date and time of{" "}
                    {activeId === 2 ? "meeting" : "visit"}.
                  </span>

                  <Collapsible open={activeId === 2 ? false : true}>
                    <OfficeHours />
                  </Collapsible>
                </div>

                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      label="Date"
                      type="date"
                      value={franchiseeDetails.date}
                      onChange={handleFranchiseeDetailsChange}
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                      label="Time"
                      type="time"
                      value={franchiseeDetails.time}
                      onChange={handleFranchiseeDetailsChange}
                    />
                  </Grid>
                </Grid>

                <Button
                  variant="outlined"
                  type="submit"
                  color="orange"
                  onClick={() => null}
                >
                  SUBMIT
                </Button>
              </form>
            </div>
          </Container>
        </Container>
      </div>

      <Modal open={loadingOpen} onModalClose={() => null}>
        <Loading text="Please wait a moment while we send your franchise inquiry." />
      </Modal>
    </>
  );
}

export default FranchiseeDetails;
