type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
};

export function Button({
  children,
  onClick,
  type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="
        px-6 py-2
        bg-blue-600
        text-white
        font-semibold
        rounded-lg
        shadow-md
        transition
        duration-200
        hover:bg-blue-700
        hover:shadow-lg
        active:scale-95
        focus:outline-none
        focus:ring-2
        focus:ring-blue-500
        focus:ring-offset-2
      "
    >
      <span>{children}</span>
    </button>
  );
}