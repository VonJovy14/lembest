import "stylesheets/modules/welcomeapplicant.scss";

import Title from "script/components/display/Title";

function WelcomeApplicant() {
  return (
    <div className="welcome-applicant-container">
      <Title
        text="your journey starts here!"
        variant="inline"
        size="large"
        color="blue"
      />
      <span>Some welcome message.</span>
    </div>
  );
}

export default WelcomeApplicant;
