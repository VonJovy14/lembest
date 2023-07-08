import React, { useState } from "react";

import { ContactMessage } from "script/constant/Contact";

import Container from "script/components/display/Container";
import TextField from "script/components/input/TextField";
import Textarea from "script/components/input/Textarea";
import Button from "script/components/input/Button";
import Swal from "sweetalert2";

import emailjs from "@emailjs/browser";

function ContactForm() {
  const [inquiryDetails, setInquiryDetails] = useState({ ...ContactMessage });

  const handleContactUsDetailsChange = (e) => {
    setInquiryDetails({ ...inquiryDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_n04mk09",
        "template_im1owaf",
        inquiryDetails,
        "QvyIJHMKEZH3QVi6k"
      )
      .then(
        (result) => {
          Swal.fire("Thank you!", "We will be contacting you soon!", "success");
          setInquiryDetails({ ...ContactMessage });
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
    <div className="contact-form-container">
      <Container variant="background" color="orange">
        <Container variant="background" color="white">
          <span>
            For any inquiries, questions or commendations, fill out this form.
          </span>

          <form onSubmit={handleSubmit}>
            <TextField
              label="Full Name"
              value={inquiryDetails.full_name}
              onChange={handleContactUsDetailsChange}
            />

            <TextField
              label="Email"
              type="email"
              value={inquiryDetails.email}
              onChange={handleContactUsDetailsChange}
            />

            <TextField
              label="Subject"
              value={inquiryDetails.subject}
              onChange={handleContactUsDetailsChange}
            />

            <Textarea
              label="Message"
              value={inquiryDetails.message}
              rows={7}
              onChange={handleContactUsDetailsChange}
            />

            {/* <input type="file" name="my_file" /> */}

            <Button
              variant="outlined"
              type="submit"
              color="orange"
              onClick={() => null}
            >
              SUBMIT
            </Button>
          </form>
        </Container>
      </Container>
    </div>
  );
}

export default ContactForm;
