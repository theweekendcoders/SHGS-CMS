import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const getData = async () => {
    const res = await fetch("http://localhost:3000/api/products/vathal", { cache: "no-store" });
    if (!res.ok) {
        throw new Error("Something Went Wrong")
    }
    return res.json();
};


const page = async () => {
    const products = await getData();

    const formatCurrency = (amount: number) => {
        const currencyFormatter = new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            minimumFractionDigits: 2,
        });

        // Extracting parts from formatted string
        const parts = currencyFormatter.formatToParts(amount);

        // Adding space between symbol and digits
        const formattedAmount = parts
            .map((part) => (part.type === "currency" ? part.value + " " : part.value))
            .join("");

        return formattedAmount.replace("₹", "Rs. ");
    };

    return (
        <div>
            <div className="flex flex-row justify-center items-center">
                <div className='p-8 lg:w-5/6 xl:w-4/5'>
                    <h1 className='mt-4 text-2xl font-medium'>Products</h1>
                    <div className='mt-4 flex flex-col gap-8'>
                        <Link href="/vathal/addNewProduct">
                            <button className='bg-green-700 text-white p-20 text-xl font-medium rounded-md w-96'>
                                Add Product
                            </button>
                        </Link>

                        <div className='my-4 block w-full overflow-x-auto  overflow-y-auto shadow-lg rounded-sm'>
                            <table className="items-center w-full bg-transparent border-collapse">
                                <thead className='border-b-2 border-black w-full p-10'>
                                    <tr>
                                        <th className="px-6 align-middle py-3 text-md capitalize whitespace-nowrap font-semibold text-left">S.No</th>
                                        <th className="px-6 align-middle py-3 text-md capitalize whitespace-nowrap font-semibold text-left">Product</th>
                                        <th className="px-6 align-middle py-3 text-md capitalize whitespace-nowrap font-semibold text-left">Category</th>
                                        <th className="px-6 align-middle py-3 text-md capitalize whitespace-nowrap font-semibold text-left">Price</th>
                                        <th className="px-6 align-middle py-3 text-md capitalize whitespace-nowrap font-semibold text-left">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="">
                                    {products.map((item: any, index: any) => (
                                        <tr key={index} className='border-b-2'>
                                            <td className="px-6 align-middle font-medium text-md p-4 text-left items-center">{index + 1}</td>
                                            <td className="px-6 align-middle font-medium text-md p-4 text-left flex gap-5 items-center">
                                                <div className='relative w-[50px] h-[50px]'>
                                                    {/* <Image
                                                        src={item.images[0]}
                                                        fill
                                                        alt={item.name}
                                                        className="object-scale-down"
                                                    /> */}
                                                </div>
                                                {item.name}
                                            </td>
                                            <td className='px-6 align-middle font-medium text-md p-4 text-left'>
                                                {formatCurrency(item.price)}
                                            </td>
                                            <td className='px-6 align-middle font-medium text-md p-4 text-left flex items-center gap-4'>
                                                <div className='bg-black hover:bg-green-400 w-10 h-10 flex items-center justify-center rounded-md'>
                                                    <Image
                                                        src="/assets/edit.png"
                                                        width={24}
                                                        height={24}
                                                        alt={item.name}
                                                        className="object-scale-down"
                                                    />
                                                </div>

                                                <div className='bg-black hover:bg-red-600 w-10 h-10 flex items-center text-white justify-center rounded-md'>
                                                    <Image
                                                        src="/assets/delete.png"
                                                        width={24}
                                                        height={24}
                                                        alt={item.name}
                                                        className="object-scale-down"
                                                    />

                                                </div>
                                                {/* <div className='bg-black w-10 h-10 flex items-center justify-center rounded-md'>
                                                    <Image
                                                        src="/assets/view.png"
                                                        width={24}
                                                        height={24}
                                                        alt={item.name}
                                                        className="object-scale-down"
                                                    />

                                                </div> */}

                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default page

