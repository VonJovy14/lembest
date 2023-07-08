import "stylesheets/components/input/button.scss";

const Button = ({ children, type, variant, color, active, onClick }) => {
  return (
    <div className="button-container" onClick={() => onClick()}>
      {type ? (
        <button
          type="submit"
          className={
            "button-wrapper " + variant + "-" + color + (active ? "active" : "")
          }
        >
          <div className="button-label-container">{children}</div>
        </button>
      ) : (
        <div
          className={
            "button-wrapper " + variant + "-" + color + (active ? "active" : "")
          }
        >
          <div className="button-mask "></div>
          <div className="button-label-container">{children}</div>
        </div>
      )}
    </div>
  );
};

export default Button;
