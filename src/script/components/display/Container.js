import "stylesheets/components/display/container.scss";

const Container = ({ children, variant, color }) => {
  return (
    <div className="container-container">
      <div className={variant + "-" + color}>{children}</div>
    </div>
  );
};

export default Container;
