import React from "react";
import Image from "next/image";

const DeleteButton = ({ id, name, category }) => {

  const handleDelete = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/products/deleteProduct', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, category }),
      });
      
      const data = await res.json();
      
      if (res.ok) {
        alert(`${name} deleted successfully`);
      } else {
        alert(`Failed to Delete product: ${data.message}`);
      }
      window.location.reload();
    } 
    catch (error) {
      console.error('An error occurred:', error);
      alert('An error occurred while deleting the product');
    }
  };

  return (
    <div>
      <button
        className="bg-black hover:bg-red-600 w-10 h-10 flex items-center justify-center rounded-md cursor-pointer"
        onClick={handleDelete}
      >
        <Image
          src="/assets/delete.png"
          width={24}
          height={24}
          alt={name}
          className="object-scale-down"
        />
      </button>
    </div>
  );
};

export default DeleteButton;
