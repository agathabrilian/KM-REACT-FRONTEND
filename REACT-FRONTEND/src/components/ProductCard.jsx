import React from "react";

function ProductCard({ product }) {
  return (
    <div className="bg-white shadow-md rounded-lg">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{product.name}</h2>
      </div>
    </div>
  );
}

export default ProductCard;
