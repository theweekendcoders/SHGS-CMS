import React from "react";
import { addToDB } from "../actions/addToDBAction";

const Form = ({ product }: any) => {
  return (
    <div>
      <h1 className="text-3xl font-medium my-4">Add New Product</h1>
      <form action={addToDB} className="my-5 flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <label htmlFor="productName" className="text-lg font-medium">
            Product Name
          </label>
          <input
            type="text"
            id="productName"
            name="productName"
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
            className="border-2 border-black p-2 rounded-sm"
            value={product}
            readOnly
          />
        </div>
        {product === "sweets" && (
          <div className="flex flex-col gap-2">
            <label htmlFor="sweetsCategory" className="text-lg font-medium">
              Sweets Category
            </label>
            <select
            id="productCategory"
            name="productCategory"
            className="border-2 border-black p-2 rounded-sm"
          >
            <option value="">Select</option>
            <option value="inStock">Traditional Sweets</option>
            <option value="outOfStock">Bengali Sweets</option>
            <option value="outOfStock">Cashew Sweets</option>
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
            className="border-2 border-black p-2 rounded-sm"
          />
        </div>
        <input
          type="submit"
          value="Add Product"
          className="px-12 py-6 rounded-full bg-black text-white"
        />
      </form>
    </div>
  );
};

export default Form;
