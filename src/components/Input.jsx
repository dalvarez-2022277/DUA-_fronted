import React from 'react';

export const Input = ({
  field,
  label,
  value,
  onChangeHandler,
  type,
  showErrorMessage,
  validationMessage,
  onBlurHandler,
  textarea,
  accept,
}) => {
  const handleValueChange = (event) => {
    const newValue = type === 'file' ? event.target.files[0] : event.target.value;
    onChangeHandler(newValue, field);
  };

  const handleInputBlur = (event) => {
    if (onBlurHandler) {
      onBlurHandler(event.target.value, field);
    }
  };

  return (
    <div className="mb-4 text-lg">
      <label className="sr-only">{label}</label>
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-blue-400 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {field === "email" ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
            />
          ) : (
            <path
              fillRule="evenodd"
              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
              clipRule="evenodd"
            />
          )}
        </svg>
        {textarea ? (
          <textarea
            className="rounded-3xl border-none bg-blue-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md w-full"
            type={type}
            value={value}
            onChange={handleValueChange}
            onBlur={handleInputBlur}
            rows={5}
            style={{ maxWidth: "400px" }}
          />
        ) : (
          <input
            className="rounded-3xl border-none bg-blue-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md w-full"
            type={type}
            value={type === 'file' ? undefined : value} // No definir value para type="file"
            onChange={handleValueChange}
            onBlur={handleInputBlur}
            placeholder={label}
            accept={accept}
          />
        )}
      </div>
      <span className="error-message text-red-500 text-sm mt-1">
        {showErrorMessage && validationMessage}
      </span>
    </div>
  );
};
