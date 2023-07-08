import "stylesheets/components/input/textfield.scss";

const TextField = ({ type, label, value, onChange }) => {
  return (
    <div className="text-field-container">
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e)}
        autoComplete="on"
        name={label.split(" ").join("_").toLowerCase()}
        required
        min="0"
      />

      <div
        className={
          "text-field-placeholder-container-" +
          (value === "" ? "inactive" : "active")
        }
      >
        <span>{label}</span>
      </div>
    </div>
  );
};

export default TextField;
