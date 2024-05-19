'use client';

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ProductsPage = () => {
  const pathname = usePathname();
  const navItems = [
    {
      link: "/products/sweets",
      title: "Sweets",
    },
    {
      link: "/products/snacks",
      title: "Snacks",
    },
    {
      link: "/products/savouries",
      title: "Savouries",
    },
    {
      link: "/products/vathal",
      title: "Vathal",
    },
    {
      link: "/products/milk_items",
      title: "Milk Items",
    },
    {
      link: "/products/poli",
      title: "Poli",
    },
  ];
  return (
    <>
      <div className="flex flex-col justify-between items-center text-black text-lg gap-2 my-10 font-normal tracking-tight">
        {navItems.map((link, index) => (
          <Link
            href={link.link}
            key={index}
            className="relative text-2xl bg-blue-900 text-white font-medium rounded-xl w-3/4 p-10 text-center"
          >
            {link.title}
          </Link>
        ))}
      </div>
    </>
  );
};

export default ProductsPage;
