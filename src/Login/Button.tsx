import type { MouseEventHandler } from "react";

interface ButtonProps {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  className?: string; // ✅ agregado
}

export const Button = ({ text, onClick, className }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-600 text-white p-2 rounded w-full ${className ?? ""}`}
    >
      {text}
    </button>
  );
};
``