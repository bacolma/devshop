import { ChangeEvent } from "react";

interface InputProps {
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string; // ✅ agregado
}

export const Input = ({
  type = "text",
  placeholder,
  value,
  onChange,
  className,
}: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`border rounded p-2 w-full mb-3 ${className ?? ""}`} // ✅ concatena
    />
  );
};

