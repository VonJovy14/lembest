import "stylesheets/components/input/groupbutton.scss";

import { Grid } from "@material-ui/core";

import Title from "../display/Title";

const GroupButton = ({ data, variant, color, activeId, onButtonClick }) => {
  return (
    <div className="group-button-container ">
      <div
        className={
          "group-button-wrapper " +
          (variant !== "" ? variant + "-" + color : null)
        }
      >
        <Grid container>
          {data.map((data, index) => (
            <Grid item xs key={index}>
              <div
                className={
                  "button-container " + (activeId === data.id ? "active" : null)
                }
                onClick={() => onButtonClick(data.id)}
              >
                <div className={"button-wrapper " + color}>
                  <div className="button">
                    <Title text={data.text} variant="inline" />
                  </div>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default GroupButton;
