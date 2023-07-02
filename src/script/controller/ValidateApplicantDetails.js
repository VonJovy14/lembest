import Swal from "sweetalert2";

const ValidateApplicantDetails = (applicantData) => {
  let isApplicantDetailsCorrect = true;

  if (
    applicantData.first_name === "" ||
    applicantData.middle_name === "" ||
    applicantData.last_name === "" ||
    applicantData.barangay === "" ||
    applicantData.municipality === "" ||
    applicantData.province === "" ||
    applicantData.resume === null
  ) {
    isApplicantDetailsCorrect = false;
  }

  if (
    applicantData.contact.length !== 11 ||
    applicantData.contact.substring(0, 2) !== "09"
  ) {
    isApplicantDetailsCorrect = false;
  }

  if (
    applicantData.email.indexOf("@") === -1 ||
    applicantData.email.indexOf(".com") === -1
  ) {
    isApplicantDetailsCorrect = false;
  }

  if (isApplicantDetailsCorrect) {
    Swal.fire(
      "Success!",
      "Your application will be forwarded to our recruitment team for screening!",
      "success"
    );
  } else {
    Swal.fire("Sorry!", "Please check your data!", "error");
  }
};

export default ValidateApplicantDetails;
