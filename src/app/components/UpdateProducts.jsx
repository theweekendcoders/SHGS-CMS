"use client";

import React, { useState } from "react";
import { updateToDB } from "../actions/updateToDBAction";
import { toast } from "react-toastify";

const UpdateProducts = ({ product }) => {
  const productID = product.product_id;
  const [name, setName] = useState(product.product_name);
  const category = product.product_category;
  const [type, setType] = useState(product.product_type);
  const [image, setImage] = useState(product.product_image);
  const [price, setPrice] = useState(product.product_price);
  const [stock, setStock] = useState(product.product_stock);
  const [discount, setDiscount] = useState(product.product_discount);
  console.log(product);

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      const updatedData = {
        productID,
        name,
        image,
        category, //sweet
        type, //type of sweet
        price,
        stock,
        discount,
      };
      updateToDB(updatedData);
      toast.success(`${name} updated successfully!`, {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } catch (error) {
      console.error(error);
      toast.error(`${name} update failed :(`, {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-medium my-4">Update {name}</h1>
      <form onSubmit={handleSubmit} className="my-5 flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-lg font-medium">
            Product Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-2 border-black p-2 rounded-sm"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="category" className="text-lg font-medium">
            Product Category
          </label>
          <input
            type="text"
            id="category"
            name="category"
            value={category}
            readOnly
            className="border-2 border-black p-2 rounded-sm"
          />
        </div>
        {category === "sweets" && (
          <div className="flex flex-col gap-2">
            <label htmlFor="type" className="text-lg font-medium">
              Sweet Type
            </label>
            <select
              id="type"
              name="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
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
          <label htmlFor="price" className="text-lg font-medium">
            Product Price
          </label>
          <input
            type="text"
            id="price"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border-2 border-black p-2 rounded-sm"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="image" className="text-lg font-medium">
            Product Image
          </label>
          <input
            type="text"
            id="image"
            name="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="border-2 border-black p-2 rounded-sm"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="stock" className="text-lg font-medium">
            Product Stock
          </label>
          <select
            id="stock"
            name="stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            className="border-2 border-black p-2 rounded-sm"
          >
            <option value="">Select</option>
            <option value="inStock">In Stock</option>
            <option value="outOfStock">Out of Stock</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="discount" className="text-lg font-medium">
            Product Discount
          </label>
          <input
            type="text"
            id="discount"
            name="discount"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
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
