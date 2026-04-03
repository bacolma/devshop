import { useState } from "react";
import { SearchBar, Card, Navbar, SideBar, Button } from "../components";
import { MOCK_PRODUCT } from "../data/mockProducts";

export function Home() {
  const [search, setSearch] = useState("");

  const filteredProducts = MOCK_PRODUCT.filter(
    (product) =>
      product.NAME.toLowerCase().includes(search.toLowerCase()) ||
      product.CATEGORY.toLowerCase().includes(search.toLowerCase()),
  );

  return (
  <div className="flex min-h-screen bg-slate-100">
      {/* Sidebar */}
      <SideBar />

      {/* Contenido principal */}
      <div className="flex-1 flex flex-col">
        <Navbar search={search} onSearchChange={setSearch} />
         <main className="flex-1 max-w-7xl mx-auto px-4 py-6 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.map((product) => (
              <Card key={product.ID}>
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.NAME}
                </h3>

                <p className="text-sm text-gray-500">{product.CATEGORY}</p>

                <span className="mt-2 text-xl font-bold text-green-600">
                  ${product.PRICE}
                </span>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}