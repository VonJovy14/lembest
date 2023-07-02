import "stylesheets/components/input/textfield.scss";

const TextField = ({ type, label, value, onChange }) => {
  return (
    <div className="text-field-container">
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete="on"
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
