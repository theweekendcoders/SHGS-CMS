import React from 'react';
``
const MoveOrderButton = ({ orderId }) => {
  console.log(orderId);
  const moveOrder = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/delivered', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ orderId }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Moved successfully!", {
          position: "bottom-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else {
        toast.error(" Failed to move Order :(", {
          position: "bottom-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    } 
    catch (error) {
      console.error('An error occurred:', error);
      alert('An error occurred while moving the order');
    }
    finally {
      window.location.reload();
    }
  };

  return (
    <button onClick={moveOrder} className="bg-blue-500 text-white p-2 rounded">
      Delivered
    </button>
  );
};

export default MoveOrderButton;
