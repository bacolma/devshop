export function SearchBar({
  value,
  onChange,
  autoFocusOnMount = true,
}: {
  value: string;
  onChange: (value: string) => void;
  autoFocusOnMount: boolean;
}) {
  return (
    <input
      type="text"
      placeholder="Search"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
