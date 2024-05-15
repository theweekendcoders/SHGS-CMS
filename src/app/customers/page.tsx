import React from 'react'
import SideBar from '../components/NavBar'

const getData = async () => {
    const res = await fetch("http://localhost:3000/api/customers", { cache: "no-store" });
    if (!res.ok) {
        throw new Error("Something Went Wrong")
    }
    return res.json();
};


const page = async () => {
    const customers = await getData();
    return (
        <div>
            <div className="flex justify-center items-center">
                <div className='p-8 lg:w-5/6 xl:w-full'>
                    <h1 className='mt-4 text-2xl font-medium'>Customers</h1>
                    <div className='my-4 block w-full overflow-x-auto  overflow-y-auto shadow-lg rounded-sm'>
                        <table className="items-center w-full bg-transparent border-collapse">
                            <thead className='border-b-2 border-black w-full p-10'>
                                <tr className=' '>
                                <th className='px-6 align-middle py-3 text-sm uppercase whitespace-nowrap font-semibold text-left'>S.No</th>
                                    <th className='px-6 align-middle py-3 text-sm capitalize whitespace-nowrap font-semibold text-left'>First Name</th>
                                    <th className='px-6 align-middle py-3 text-sm capitalize whitespace-nowrap font-semibold text-left'>Last Name</th>
                                    <th className='px-6 align-middle py-3 text-sm capitalize whitespace-nowrap font-semibold text-left'>Email</th>
                                    <th className='px-6 align-middle py-3 text-sm capitalize whitespace-nowrap font-semibold text-left'>Phone</th>
                                    <th className='px-6 align-middle py-3 text-sm capitalize whitespace-nowrap font-semibold text-left'>Address</th>
                                    <th className='px-6 align-middle py-3 text-sm capitalize whitespace-nowrap font-semibold text-left'>City</th>
                                    <th className='px-6 align-middle py-3 text-sm capitalize whitespace-nowrap font-semibold text-left'>District</th>
                                    <th className='px-6 align-middle py-3 text-sm capitalize whitespace-nowrap font-semibold text-left'>State</th>
                                    <th className='px-6 align-middle py-3 text-sm capitalize whitespace-nowrap font-semibold text-left'>Zip</th>

                                </tr>
                            </thead>
                            <tbody >
                                {
                                    customers.map((customer: any, index: any) => (
                                        <tr key={index} className='border-b-2'>
                                            <td className='px-6 align-middle font-medium text-sm p-4 text-left '>{index+1}.</td>
                                            <td className='px-6 align-middle font-medium text-sm whitespace-nowrap p-4 text-left'>{customer.firstName}</td>
                                            <td className='px-6 align-middle font-medium text-sm whitespace-nowrap p-4 text-left'>{customer.lastName}</td>
                                            <td className='px-6 align-middle font-medium text-sm whitespace-nowrap p-4 text-left'>{customer.email}</td>
                                            <td className='px-6 align-middle font-medium text-sm whitespace-nowrap p-4 text-left'>{customer.mobile}</td>
                                            <td className='px-6 align-middle font-medium text-sm whitespace-nowrap p-4 text-left'>{customer.street}</td>
                                            <td className='px-6 align-middle font-medium text-sm whitespace-nowrap p-4 text-left'>{customer.city}</td>
                                            <td className='px-6 align-middle font-medium text-sm whitespace-nowrap p-4 text-left'>{customer.district}</td>
                                            <td className='px-6 align-middle font-medium text-sm whitespace-nowrap p-4 text-left'>{customer.state}</td>
                                            <td className='px-6 align-middle font-medium text-sm whitespace-nowrap p-4 text-left'>{customer.pincode}</td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
