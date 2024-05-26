import React from 'react'


const getData = async () => {
    const res = await fetch("http://localhost:3000/api/delivered/fetch", { cache: "no-store" });
    if (!res.ok) {
        throw new Error("Something Went Wrong")
    }
    return res.json();
};

const page = async() => {
const delivered = await getData();
  return (
    <div>
      {
        delivered.map((order: any, index: any) => (
          <div className='flex flex-col items-center gap-4' key={index}>
            <h1 className='text-2xl font-medium'>Order from</h1>
            <p className='text-2xl font-medium capitalize'>{order.userDetails.firstName.toLowerCase()}</p>
            <h1>{order.orderTime}</h1>
          </div>
        ))
      }
    </div>
  )
}

export default page
