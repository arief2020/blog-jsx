import React, { useState } from 'react'

function ProductComponent() {
	const [products, setProducts] = useState([
    { id: 1, name: 'Produk A', price: 100, stock: 5 },
    { id: 2, name: 'Produk B', price: 150, stock: 0 },
    { id: 3, name: 'Produk C', price: 200, stock: 10 },
  ]);
  function addStock(id) {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, stock: product.stock + 1 } : product
      )
    );
  }
  return (
    <div>
      <h1>Daftar Produk</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <span>{product.name}</span>
            {product.stock > 0 && <span>| - Harga: ${product.price}</span>}
            {!product.stock && <span> || - Stok Habis </span>}
			{product.stock > 0 && <span> || stock: {product.stock} </span>}
            <button type='button' onClick={() => addStock(product.id)}>Tambah Stok</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductComponent