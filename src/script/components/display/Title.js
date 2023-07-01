import "stylesheets/components/display/title.scss";

const Title = ({ text, variant, size, color }) => {
  return (
    <div className="title-container">
      <div className={variant + " " + size + " " + color}>
        {text.toUpperCase()}
        <div className="underline-container"></div>
      </div>
    </div>
  );
};

export default Title;
