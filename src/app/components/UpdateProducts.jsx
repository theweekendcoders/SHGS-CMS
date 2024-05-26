"use client"

import React, { useState } from 'react';
import { updateToDB } from "../actions/updateToDBAction";

const UpdateProducts = ({ product }) => {
  const [productName, setProductName] = useState(product.product_name);
  const [productCategory, setProductCategory] = useState(product.product_category);
  const [sweetsCategory, setSweetsCategory] = useState('');
  const [productPrice, setProductPrice] = useState(product.product_price);
  const [productImage, setProductImage] = useState(product.product_image);
  const [productStock, setProductStock] = useState(product.product_stock);
  const [productDiscount, setProductDiscount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProduct = {
      productName,
      productCategory,
      sweetsCategory,
      productPrice,
      productImage,
      productStock,
      productDiscount,
    };
    updateToDB(updatedProduct);
  };

  return (
    <div>
      <h1 className="text-3xl font-medium my-4">Add New Product</h1>
      <form onSubmit={handleSubmit} className="my-5 flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <label htmlFor="productName" className="text-lg font-medium">
            Product Name
          </label>
          <input
            type="text"
            id="productName"
            name="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="border-2 border-black p-2 rounded-sm"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="productCategory" className="text-lg font-medium">
            Product Category
          </label>
          <input
            type="text"
            id="productCategory"
            name="productCategory"
            value={productCategory}
            readOnly
            className="border-2 border-black p-2 rounded-sm"
          />
        </div>
        {productCategory === "sweets" && (
          <div className="flex flex-col gap-2">
            <label htmlFor="sweetsCategory" className="text-lg font-medium">
              Sweets Category
            </label>
            <select
              id="sweetsCategory"
              name="sweetsCategory"
              value={sweetsCategory}
              onChange={(e) => setSweetsCategory(e.target.value)}
              className="border-2 border-black p-2 rounded-sm"
            >
              <option value="">Select</option>
              <option value="Traditional Sweets">Traditional Sweets</option>
              <option value="Bengali Sweets">Bengali Sweets</option>
              <option value="Cashew Sweets">Cashew Sweets</option>
            </select>
          </div>
        )}
        <div className="flex flex-col gap-2">
          <label htmlFor="productPrice" className="text-lg font-medium">
            Product Price
          </label>
          <input
            type="text"
            id="productPrice"
            name="productPrice"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            className="border-2 border-black p-2 rounded-sm"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="productImage" className="text-lg font-medium">
            Product Image
          </label>
          <input
            type="text"
            id="productImage"
            name="productImage"
            value={productImage}
            onChange={(e) => setProductImage(e.target.value)}
            className="border-2 border-black p-2 rounded-sm"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="productStock" className="text-lg font-medium">
            Product Stock
          </label>
          <select
            id="productStock"
            name="productStock"
            value={productStock}
            onChange={(e) => setProductStock(e.target.value)}
            className="border-2 border-black p-2 rounded-sm"
          >
            <option value="">Select</option>
            <option value="inStock">In Stock</option>
            <option value="outOfStock">Out of Stock</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="productDiscount" className="text-lg font-medium">
            Product Discount
          </label>
          <input
            type="text"
            id="productDiscount"
            name="productDiscount"
            value={productDiscount}
            onChange={(e) => setProductDiscount(e.target.value)}
            className="border-2 border-black p-2 rounded-sm"
          />
        </div>
        <input
          type="submit"
          value="Update Product"
          className="px-12 py-6 rounded-full bg-black text-white"
        />
      </form>
    </div>
  );
};

export default UpdateProducts;
