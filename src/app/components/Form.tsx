import React from "react";
import { addToDB } from "../actions/addToDBAction";
import toast from "react-toastify";

const Form = ({ product }: any) => {

  return (
    <div>
      <h1 className="text-3xl font-medium my-4">Add New Product</h1>
      <form action={addToDB} className="my-5 flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-lg font-medium">
            Product Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
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
            className="border-2 border-black p-2 rounded-sm"
            value={product}
            readOnly
          />
        </div>
        {product === "sweets" && (
          <div className="flex flex-col gap-2">
            <label htmlFor="type" className="text-lg font-medium">
              Sweet Type
            </label>
            <select
            id="type"
            name="type"
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
            className="border-2 border-black p-2 rounded-sm"
          />
        </div>
        <input
          type="submit"
          value="Add Product"
          className="px-12 py-6 rounded-full bg-black text-white"
          // onClick={handleToast}
        />
      </form>
    </div>
  );
};

export default Form;
