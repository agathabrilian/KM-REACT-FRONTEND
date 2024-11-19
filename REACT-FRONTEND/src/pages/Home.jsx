import React from "react";
import ProductCard from "../components/ProductCard";

const products = [
  { id: 1, name: "Product 1", image: "/assets/images/product1.jpg" },
  { id: 2, name: "Product 2", image: "/assets/images/product2.jpg" },
  { id: 3, name: "Product 3", image: "/assets/images/product3.jpg" },
];

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Product Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
