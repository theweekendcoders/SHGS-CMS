import React, { useState } from 'react';
import { toast } from 'react-toastify';

const MoveOrderButton = ({ orderId, onOrderMoved }) => {
  const [isLoading, setIsLoading] = useState(false);

  const moveOrder = async () => {
    if (isLoading) return;

    setIsLoading(true);
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
        
        // Callback to parent component to update UI
        onOrderMoved(orderId);
      } else {
        throw new Error(data.message || 'Failed to move order');
      }
    } catch (error) {
      console.error('An error occurred:', error);
      toast.error(`Failed to move Order: ${error.message}`, {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } finally {
      setIsLoading(false);
      window.location.reload();
    }
  };

  return (
    <button 
      onClick={moveOrder} 
      className={`text-white p-2 rounded ${isLoading ? 'bg-gray-500' : 'bg-blue-500'}`}
      disabled={isLoading}
    >
      {isLoading ? 'Processing...' : 'Delivered'}
    </button>
  );
};

export default MoveOrderButton;