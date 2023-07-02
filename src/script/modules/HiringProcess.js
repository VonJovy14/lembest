import React from "react";

import "stylesheets/modules/hiringprocess.scss";

import { HiringBanner } from "script/constant/ApplicantDetails";
import { ApplicationProcess } from "script/constant/ApplicantDetails";

import Image from "script/components/display/Image";
import Title from "script/components/display/Title";

function HiringProcess() {
  return (
    <div className="hiring-process-container">
      <div className="hiring-banner-container">
        <Image
          image={"https://drive.google.com/uc?id=" + HiringBanner}
          fix_on="width"
        />
      </div>

      <div className="hiring-title-container">
        <Title
          text="Be part of our growing family!"
          variant="inline"
          color="blue"
        />
      </div>

      {ApplicationProcess.map((data, index) => (
        <div key={index} className="application-step-container">
          <Title text={"Step " + data.id} variant="inline" color="blue" />

          <span>{data.text}</span>

          <div
            className={
              "steps-break-line" +
              (index + 1 === ApplicationProcess.length ? "-hide" : "")
            }
          ></div>
        </div>
      ))}
    </div>
  );
}

export default HiringProcess;
