import Image from 'next/image'
import Link from 'next/link'
import SideBar from './components/SideBar'
import TopBar from './components/TopBar.jsx'

// const getData = async () => {
//   const res = await fetch("http://localhost:3000/api/orders", { cache: "no-store" });
//   if (!res.ok) {
//     throw new Error("Something Went Wrong")
//   }
//   return res.json();
// };

export default async function Home() {
  const orders = [
    {
      id: 3,
      firstName: "Michael Johnson",
      lastName: "Nigga",
      products: [
        {
          productName: "Kaju Katli",
          quantity: 2,
          price: 25.00
        }
      ],
      total: 150.00,
      mobile: "123-456-7890",
      status: "Delivered"
    },
    {
      id: 3,
      firstName: "Michael Johnson",
      lastName: "Nigga",
      products: [
        {
          productName: "Kaju Katli",
          quantity: 2,
          price: 25.00
        }
      ],
      total: 150.00,
      mobile: "123-456-7890",
      status: "Delivered"
    },
    {
      id: 3,
      firstName: "Michael Johnson",
      lastName: "Nigga",
      products: [
        {
          productName: "Kaju Katli",
          quantity: 2,
          price: 25.00
        }
      ],
      total: 150.00,
      mobile: "123-456-7890",
      status: "Delivered"
    },
    {
      id: 3,
      firstName: "Michael Johnson",
      lastName: "Nigga",
      products: [
        {
          productName: "Kaju Katli",
          quantity: 2,
          price: 25.00
        }
      ],
      total: 150.00,
      mobile: "123-456-7890",
      status: "Delivered"
    }
  ]

  return (
    <>
      <div className="flex flex-row">
        <div className='relative flex flex-col border-r-2 border-black h-screen lg:w-2/6 xl:w-1/5'>
          <SideBar />
        </div>

        <div className='p-8 lg:w-5/6 xl:w-4/5'>
          <TopBar />
          <div className="flex flex-row gap-2 items-center my-4">
            <h1 className="text-2xl font-medium">Orders</h1>
            <div className="w-[30px] h-[30px] rounded-full bg-red-500 text-white flex justify-center items-center">
              <p className="font-medium">{orders.length}</p>
            </div>
          </div>

          {
            (orders.length > 0) ? (<>
                  <div className='my-4 block w-full overflow-x-auto  overflow-y-auto shadow-lg rounded-sm'>
                        <table className="items-center w-full bg-transparent border-collapse">
                            <thead className='border-b-2 border-black w-full p-10'>
                                <tr className=' '>
                                <th className='px-6 align-middle py-3 text-sm uppercase whitespace-nowrap font-semibold text-left'>S.No</th>
                                    <th className='px-6 align-middle py-3 text-sm capitalize whitespace-nowrap font-semibold text-left'>Customer Name</th>
                                    <th className='px-6 align-middle py-3 text-sm capitalize whitespace-nowrap font-semibold text-left'>Product</th>
                                    <th className='px-6 align-middle py-3 text-sm capitalize whitespace-nowrap font-semibold text-left'>Ordered Date</th>
                                    <th className='px-6 align-middle py-3 text-sm capitalize whitespace-nowrap font-semibold text-left'>Phone</th>

                                </tr>
                            </thead>
                            <tbody >
                                {
                                    orders.map((order: any, index: any) => (
                                        <tr key={index} className='border-b-2'>
                                            <td className='px-6 align-middle font-medium text-sm p-4 text-left '>{index+1}.</td>
                                            <td className='px-6 align-middle font-medium text-sm p-4 text-left '>{order.firstName} {order.lastName}</td>
                                            <td className='px-6 align-middle font-medium text-sm whitespace-nowrap p-4 text-left flex flex-col gap-2'>
                                              {
                                                order.products.map((product:any, index:any)=>(
                                                      
                                                        <p key={index}>{product.productName}</p>
                                              
                                                ))
                                              }
                                            </td>
                                            <td className='px-6 align-middle font-medium text-sm whitespace-nowrap p-4 text-left'>21-03-2024</td>
                                            <td className='px-6 align-middle font-medium text-sm whitespace-nowrap p-4 text-left'>{order.mobile}</td>
                                            <td className='px-6 align-middle font-medium text-sm whitespace-nowrap p-4 text-left underline text-orange-600 hover:cursor-pointer'>
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
                                              Click here to view more
                                            
                                            </Link>
                                            </td>
                                            
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
            </>) : (<div className='flex h-3/4 justify-center items-center'>
              <h1 className='text-4xl font-medium'>No orders yet.</h1>
            </div>)
          }

        </div>
      </div>
    </>
  )
}
