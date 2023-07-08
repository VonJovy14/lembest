import "stylesheets/components/input/select.scss";

const Select = ({ label, data, value, onSelectChange }) => {
  return (
    <div className="select-container">
      <select
        name={label.split(" ").join("_").toLowerCase()}
        onChange={(e) => onSelectChange(e)}
        value={value.toUpperCase()}
      >
        {data.map((data, index) => (
          <option value={data.text.toUpperCase()} key={index}>
            {data.text.toUpperCase()}
          </option>
        ))}
      </select>

      <div className="select-placeholder-container">{label}</div>
    </div>
  );
};

export default Select;
