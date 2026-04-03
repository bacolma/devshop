import { SearchBar } from "../SearchBar";

type NavbarProps = {
  search: string;
  onSearchChange: (value: string) => void;
};

export function Navbar({ search, onSearchChange }: NavbarProps) {
  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="text-xl font-bold text-blue-600 whitespace-nowrap">
          DevShop 01042026
        </div>

        {/* Search */}
        <div className="flex-1 max-w-md">
          <SearchBar
            value={search}
            onChange={onSearchChange}
            autoFocusOnMount={false}
          />
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <a href="#" className="hover:text-blue-600 transition">
            Products
          </a>
          <a href="#" className="hover:text-blue-600 transition">
            Orders
          </a>
          <a href="#" className="hover:text-blue-600 transition">
            Profile
          </a>
        </div>
      </div>
    </nav>
  );
}