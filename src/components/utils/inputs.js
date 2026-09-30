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

export const FileInput = ({ onChange, files, maxFiles = 10, onDelete }) => {
  return (
    <div className="file-input-container">
      <label className="file-input-label" htmlFor="file-input">
        Upload Images
      </label>
      <input
        className="file-input-field"
        id="file-input"
        type="file"
        accept="image/*"
        multiple
        onChange={onChange}
        disabled={files.length >= maxFiles}
      />
      <div className="file-previews">
        {files.map((file, index) => (
          <div className="file-preview" key={`${file.name}-${index}`}>
            <img src={URL.createObjectURL(file)} alt={file.name} />
            <button
              type="button"
              className="file-delete-button"
              onClick={() => onDelete(index)}>
              Remove
            </button>
          </div>
        ))}
      </div>

      <p>
        {files.length} / {maxFiles} images selected
      </p>
    </div>
  );
};
