"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const SideBar = () => {
    const pathname = usePathname()

    const navItems = [
        {
            icon: "/assets/dashboard.png",
            link: "/",
            title: "DashBoard",
        },
        {
            icon: "/assets/products.png",
            link: "/products",
            title: "Products",
        },
        {
            icon: "/assets/orders.png",
            link: "/orders",
            title: "Orders",
        },
        {
            icon: "/assets/shipments.png",
            link: "/shipments",
            title: "Shipments",
        },
        {
            icon: "/assets/inventory.png",
            link: "/inventory",
            title: "Inventory",
        },
        {
            icon: "/assets/customers.png",
            link: "/customers",
            title: "Customers",
        },
        {
            icon: "/assets/categories.png",
            link: "/categories",
            title: "Categories",
        },

    ]
    return (
        <div>
            <div className='flex justify-center items-center'>
                <Image
                    src="/assets/logo.svg"
                    width={150}
                    height={150}
                    alt="Logo"
                    className="mt-10"
                />
            </div>

            <div className='flex flex-col gap-4 mt-10 justify-center'>
                {
                    navItems.map((item, index) => (
                        <div className={`flex items-center p-4 font-medium gap-10 ${pathname === item.link ? 'border-r-8 border-black' : ''}`} key={index}>
                            <Image
                                src={item.icon}
                                width={30}
                                height={30}
                                alt="Logo"
                                className="inline-block"
                            />
                            <Link href={item.link}>{item.title}</Link>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default SideBar
