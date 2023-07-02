import Swal from "sweetalert2";

const ValidateFranchiseeDetails = (franchiseeData) => {
  let isFranchiseeDetailsCorrect = true;

  if (
    franchiseeData.contact_number.length !== 11 ||
    franchiseeData.contact_number.substring(0, 2) !== "09"
  ) {
    isFranchiseeDetailsCorrect = false;
  }

  if (
    franchiseeData.email.indexOf("@") === -1 ||
    franchiseeData.email.indexOf(".com") === -1
  ) {
    isFranchiseeDetailsCorrect = false;
  }

  if (new Date(franchiseeData.date).getTime() < new Date()) {
    isFranchiseeDetailsCorrect = false;
  }

  if (franchiseeData.time === null) {
    isFranchiseeDetailsCorrect = false;
  }

  if (isFranchiseeDetailsCorrect) {
    Swal.fire(
      "Success!",
      "Please check your email for the confirmation of your schedule!",
      "success"
    );
  } else {
    Swal.fire("Sorry!", "Please check your data!", "error");
  }
};

export default ValidateFranchiseeDetails;
