import React from "react";

interface SelectProps {
  label: string;
  name: string;
  value: string;
  options: { label: string; value: string }[];
  required?: boolean;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
}

export const Select: React.FC<SelectProps> = ({
  label,
  name,
  value,
  options,
  required = false,
  onChange,
}) => {
  return (
    <div className="space-y-1">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>

      <select
        id={name}
        name={name}
        value={value}
        required={required}
        onChange={onChange}
        className="w-full rounded-lg border border-gray-300 px-3 py-2
                   focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
