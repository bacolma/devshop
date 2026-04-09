import React from "react";

interface InputProps {
  label: string;
  name: string;
  value: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  required?: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const Input: React.FC<InputProps> = ({
  label,
  name,
  value,
  type = "text",
  placeholder,
  required = false,
  onChange,
}) => {
  return (
    <div className="space-y-1">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        className="w-full rounded-lg border border-gray-300 px-3 py-2
                   focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};
