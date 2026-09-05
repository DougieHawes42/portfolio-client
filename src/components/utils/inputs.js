export const TextInput = ({ id, name, label, value, onChange }) => (
  <>
    <label className="text-input-label" htmlFor={id}>
      {label}
    </label>
    <input
      className="text-input-field"
      type="text"
      id={id}
      name={name}
      onChange={onChange}
      value={value}
      required
    />
  </>
);

export const TextArea = ({ id, name, label, value, onChange }) => (
  <>
    <label className="text-input-label" htmlFor={id}>
      {label}
    </label>
    <textarea
      className="text-input-field text-area-field"
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      required
    />
  </>
);
