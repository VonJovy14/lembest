import "stylesheets/components/input/button.scss";

const Button = ({ children, variant, color, active, onClick }) => {
  return (
    <div className="button-container" onClick={() => onClick()}>
      <div
        className={
          "button-wrapper " + variant + "-" + color + (active ? "active" : "")
        }
      >
        <div className="button-mask "></div>
        <div className="button-label-container">{children}</div>
      </div>
    </div>
  );
};

export default Button;
