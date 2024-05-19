import React from "react";
import Image from "next/image";
import Link from "next/link";

const getData = async (product:string) => {
  const res = await fetch(`http://localhost:3000/api/products/${product}`, { cache: "no-store" });
  if(!res.ok){
      throw new Error("Something Went Wrong")
  }
  return res.json();
};

const page = async ({ params }: any) => {
  const product = params.productType;
  const products = await getData(product);
  console.log(products);

 
  return (
      <div>
        <div className="flex justify-center items-center">
          <Link href={`/products/${product}/addNewProduct`}>
          <button className="bg-black text-white font-medium px-4 py-2 rounded-lg">
            Add Product
          </button>
          </Link>
        </div>
        {
          products.map((product) => (
            <div>
              {product.name}
            </div>
          ))
        }
      </div>
  );
};

export default page;
