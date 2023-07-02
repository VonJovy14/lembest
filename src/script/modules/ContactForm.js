import React, { Component } from "react";

import Container from "script/components/display/Container";
import TextField from "script/components/input/TextField";
import Textarea from "script/components/input/Textarea";
import Button from "script/components/input/Button";

export default class ContactForm extends Component {
  state = {
    fullName: "",
    email: "",
    subject: "",
    message: "",
  };

  handleContactUsDetailsChange = (variable, value) => {
    this.setState({ [variable]: value });
  };

  render() {
    return (
      <div className="contact-form-container">
        <Container variant="background" color="orange">
          <Container variant="background" color="white">
            <span>
              For any inquiries, questions or commendations, fill out this form.
            </span>

            <TextField
              label="Full Name"
              value={this.state.fullName}
              onChange={(data) =>
                this.handleContactUsDetailsChange("fullName", data)
              }
            />

            <TextField
              label="Email"
              value={this.state.email}
              onChange={(data) =>
                this.handleContactUsDetailsChange("email", data)
              }
            />

            <TextField
              label="Subject"
              value={this.state.subject}
              onChange={(data) =>
                this.handleContactUsDetailsChange("subject", data)
              }
            />

            <Textarea
              label="Message"
              value={this.state.message}
              rows={7}
              onChange={(data) =>
                this.handleContactUsDetailsChange("message", data)
              }
            />

            <Button variant="outlined" color="orange" onClick={() => null}>
              SUBMIT
            </Button>
          </Container>
        </Container>
      </div>
    );
  }
}
