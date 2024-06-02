import React from "react";
import Image from "next/image";
import Link from "next/link";

const getData = async (product: string) => {
  const res = await fetch(`http://localhost:3000/api/products/${product}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Something Went Wrong");
  }
  return res.json();
};

const page = async ({ params }: any) => {
  const product = params.productType;
  const products = await getData(product);
  const product_category = product;

  return (
    <div className="p-4">
      <div className="flex justify-center items-center">
        <Link href={`/products/${product}/addNewProduct`}>
          <button className="bg-black text-white font-medium px-8 py-6 my-10 rounded-lg">
            Add Product
          </button>
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-transparent border-collapse">
          <thead className="border-b-2 border-black">
            <tr>
              <th className="px-6 py-3 text-md capitalize font-semibold text-left">
                S.No
              </th>
              <th className="px-6 py-3 text-md capitalize font-semibold text-left">
                Product
              </th>
              <th className="px-6 py-3 text-md capitalize font-semibold text-left">
                Price
              </th>
              <th className="px-6 py-3 text-md capitalize font-semibold text-left">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className="border-b-2">
                <td className="px-6 py-4 text-md font-medium text-left">
                  {index + 1}
                </td>
                <td className="px-6 py-4 text-md font-medium text-left flex gap-5 items-center">
                  <div className="relative w-12 h-12">
                    <Image
                      src={product.image}
                      fill
                      alt={product.name}
                      className="object-scale-down"
                    />
                  </div>
                  {product.name}
                </td>
                <td className="px-6 py-4 text-md font-medium text-left">
                  ₹ {product.price}
                </td>
                <td className="px-6 py-4 text-md font-medium text-left flex items-center gap-4">
                  <div className="bg-black hover:bg-green-400 w-10 h-10 flex items-center justify-center rounded-md cursor-pointer">

                    <Link
                      className="w-full"
                      href={{
                        pathname: `/products/${product_category}/updateProduct`,
                        query: {
                          productDetails: JSON.stringify(
                            {
                              product_id: product._id,
                              product_name: product.name,
                              product_price: product.price,
                              product_image: product.image,
                              product_category: product_category,
                              product_stock: product.stock,
                            }
                        
                          ),
                        },
                      }}
                    >
                      <Image
                        src="/assets/edit.png"
                        width={24}
                        height={24}
                        alt={product.name}
                        className="object-scale-down"
                      />
                    </Link>
                  </div>
                  <div className="bg-black hover:bg-red-600 w-10 h-10 flex items-center justify-center rounded-md cursor-pointer">
                    <Image
                      src="/assets/delete.png"
                      width={24}
                      height={24}
                      alt={product.name}
                      className="object-scale-down"
                    />
                  </div>
                  <div className="bg-black hover:bg-blue-600 w-10 h-10 flex items-center justify-center rounded-md cursor-pointer">
                    <Image
                      src="/assets/view.png"
                      width={24}
                      height={24}
                      alt={product.name}
                      className="object-scale-down"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
