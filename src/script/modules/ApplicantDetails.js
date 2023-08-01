import React, { useState } from "react";

import "stylesheets/modules/applicantdetails.scss";

import {
  ApplicantData,
  AvailablePosition,
} from "script/constant/ApplicantDetails";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "script/utils/firebase";

import Title from "script/components/display/Title";
import TextField from "script/components/input/TextField";
import Select from "script/components/input/Select";
import Button from "script/components/input/Button";
import Swal from "sweetalert2";
import Modal from "script/components/display/Modal";
import Loading from "script/components/display/Loading";

import emailjs from "@emailjs/browser";
import ValidateContactNumber from "script/Controller/ValidateContactNumber";

function ApplicantDetails() {
  const [applicantDetails, setApplicantDetails] = useState({
    ...ApplicantData,
  });
  const [loadingOpen, setLoadingOpen] = useState(false);

  const handleApplicantDetailsChange = (e) => {
    setApplicantDetails({
      ...applicantDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleResumeSelect = (e) => {
    handleApplicantDetailsChange(e);

    setApplicantDetails({
      ...applicantDetails,
      file: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    setLoadingOpen(true);
    e.preventDefault();

    const isContactCorrect = ValidateContactNumber(
      applicantDetails.contact_number
    );

    if (!isContactCorrect) {
      Swal.fire("Sorry!", "Please check your contact number.", "error");
    } else {
      Swal.fire({
        title: "Are you sure?",
        text:
          "You're about to send and application for " +
          applicantDetails.position +
          ".",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, send my application.",
      }).then((result) => {
        if (result.isConfirmed) {
          handleResumeUpload();
        }
      });
    }
  };

  const handleResumeUpload = async () => {
    try {
      const fileName =
        applicantDetails.first_name +
        " " +
        applicantDetails.middle_name +
        " " +
        applicantDetails.last_name;
      const storageRef = ref(storage, fileName);

      await uploadBytesResumable(storageRef, applicantDetails.file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          setApplicantDetails({
            ...applicantDetails,
            file_url: downloadURL,
          });

          const data = { ...applicantDetails, file_url: downloadURL };

          handleSubmitData(data);
        });
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmitData = (data) => {
    emailjs
      .send("service_7lvexxd", "template_7hfr78h", data, "PF6uoh1ajIbx8xtWL")
      .then(
        async (result) => {
          Swal.fire("Thank you!", "We will be contacting you soon!", "success");
          await setApplicantDetails({ ...ApplicantData });
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
  };

  return (
    <>
      <div className="applicant-details-container">
        <Title
          text="applicant's information"
          variant="underline"
          size="medium"
          color="blue"
        />

        <div className="applicant-details-wrapper">
          <form onSubmit={handleSubmit}>
            <div className="basic-information-container">
              <Title text="Complete Name" variant="inline" color="blue" />

              <TextField
                label="First Name"
                value={applicantDetails.first_name}
                onChange={handleApplicantDetailsChange}
              />

              <TextField
                label="Middle Name"
                value={applicantDetails.middle_name}
                onChange={handleApplicantDetailsChange}
              />

              <TextField
                label="Last Name"
                value={applicantDetails.last_name}
                onChange={handleApplicantDetailsChange}
              />
            </div>

            <div className="address-container">
              <Title text="Address" variant="inline" color="blue" />

              <TextField
                label="Barangay"
                value={applicantDetails.barangay}
                onChange={handleApplicantDetailsChange}
              />

              <TextField
                label="Municipality"
                value={applicantDetails.municipality}
                onChange={handleApplicantDetailsChange}
              />

              <TextField
                label="Province"
                value={applicantDetails.province}
                onChange={handleApplicantDetailsChange}
              />
            </div>

            <div className="contact-details-container">
              <Title text="Contact details" variant="inline" color="blue" />

              <TextField
                type="number"
                label="Contact Number"
                value={applicantDetails.contact_number}
                onChange={handleApplicantDetailsChange}
              />

              <TextField
                type="email"
                label="Email"
                value={applicantDetails.email}
                onChange={handleApplicantDetailsChange}
              />
            </div>

            <div className="application-details-wrapper">
              <Title text="application details" variant="inline" color="blue" />

              <Select
                label="Desired Position"
                data={AvailablePosition}
                value={applicantDetails.desired_position}
                onSelectChange={handleApplicantDetailsChange}
              />

              <TextField
                type="file"
                label="Resume"
                value={applicantDetails.resume}
                onChange={handleResumeSelect}
              />
            </div>

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
      </div>

      <Modal open={loadingOpen} onModalClose={() => null}>
        <Loading text="Please wait a moment while we send your application." />
      </Modal>
    </>
  );
}

export default ApplicantDetails;
