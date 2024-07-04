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
}) => {
  const handleValueChange = (event) => {
    onChangeHandler(event.target.value, field);
  };

  const handleInputBlur = (event) => {
    onBlurHandler(event.target.value, field);
  };

  return (
    <div className="mb-5">
      <label className="text-sm font-semibold px-1">{label}</label>
      <div className="flex items-center border border-gray-300 py-2 px-3 rounded-lg bg-white shadow-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-400"
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
            className="pl-2 w-full outline-none border-none"
            type={type}
            value={value}
            onChange={handleValueChange}
            onBlur={handleInputBlur}
            rows={5}
            style={{ maxWidth: "400px" }}
          />
        ) : (
          <input
            className="pl-2 w-full outline-none border-none"
            type={type}
            value={value}
            onChange={handleValueChange}
            onBlur={handleInputBlur}
            placeholder={label}
          />
        )}
      </div>
      <span className="error-message text-red-500 text-sm mt-1">
        {showErrorMessage && validationMessage}
      </span>
    </div>
  );
};
