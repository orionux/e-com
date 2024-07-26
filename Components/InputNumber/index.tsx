import React, { useState, ChangeEvent } from 'react';

//icons
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";

function InputNumber() {
  const [count, setCount] = useState(0);

  const handleDecrement = () => {
    setCount((prevCount) => Math.max(prevCount - 1, 0));
  };

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setCount(Number(value));
    }
  };

  return (
    <div className="flex items-center">
      <button
        className="h-8 w-8 bg-gray-300 border-2 border-slate-800 border-[#606B6E] rounded-l flex justify-center hover:bg-gray-400 transition duration-200 ease-in-out transform hover:scale-110"
        onClick={handleDecrement}
      >
        <FiMinus className='self-center' />
      </button>
      <input
        type="text"
        value={count}
        onChange={handleChange}
        className="h-8 py-1 w-16 text-center border-t-2 border-b-2 border-[#606B6E] focus:outline-none"
      />
      <button
        className="h-8 w-8 bg-gray-300 border-2 border-[#606B6E] rounded-r flex justify-center hover:bg-gray-400 transition duration-200 ease-in-out transform hover:scale-110"
        onClick={handleIncrement}
      >
        <FiPlus className='self-center' />
      </button>
    </div>
  );
}

export default InputNumber;
