import "stylesheets/components/input/textarea.scss";

const Textarea = ({ label, value, rows, onChange }) => {
  return (
    <div className="textarea-container">
      <textarea
        value={value}
        onChange={(e) => onChange(e)}
        name={label.split(" ").join("_").toLowerCase()}
        rows={rows}
      />

      <div
        className={
          "textarea-placeholder-container-" +
          (value === "" ? "inactive" : "active")
        }
      >
        <span>{label}</span>
      </div>
    </div>
  );
};

export default Textarea;
