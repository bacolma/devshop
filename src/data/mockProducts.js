const categories = [
  "Electronics",
  "Accessories",
  "Furniture",
  "Storage",
  "Office",
];

export const MOCK_PRODUCT = Array.from({ length: 100 }, (_, index) => {
  const id = index + 1;

  return {
    ID: id,
    NAME: `Product ${id}`,
    PRICE: Number((Math.random() * 500 + 20).toFixed(2)), // entre 20 y 520
    CATEGORY: categories[id % categories.length],
  };
});