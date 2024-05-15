import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const getData = async () => {
    const res = await fetch("http://localhost:3000/api/orders", { cache: "no-store" });
    if (!res.ok) {
        throw new Error("Something Went Wrong")
    }
    return res.json();
};

const page = async () => {
    const orders = await getData();
    return (
        <div>
            <div className="flex flex-row">

                <div className='p-8 lg:w-5/6 xl:w-4/5'>
                    <h1 className='mt-4 text-2xl font-medium'>Orders</h1>
                    <div className='mt-6 flex gap-4 flex-wrap'>

                        {
                            orders.map((order: any, index: any) => (
                                <div className='relative w-[250px] h-[250px] shadow-xl border-2 border-black rounded-lg p-4' key={index}>
                                    <h1>Order from</h1>
                                    <p className='text-2xl font-medium capitalize'>{order.userDetails.firstName.toLowerCase()}</p>
                                    <h1>{order.orderTime}</h1>
                                    <Link
                                        href={{
                                            pathname: `/orders/${order._id}`,
                                            query: {
                                                orderSummary: JSON.stringify([{
                                                    order
                                                }]),
                                            },
                                        }}
                                    >
                                        <Image
                                            src="/assets/arrow.svg"
                                            width={60}
                                            height={60}
                                            alt='Arrow'
                                            className='absolute bottom-4 right-4 hover:cursor-pointer hover:scale-110'
                                        />
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
