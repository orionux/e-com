import React, { useState, ChangeEvent } from 'react';

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
        className="h-8 w-8 py-1 px-2 bg-gray-300 border-2 border-slate-800 border-[#606B6E] rounded-l justify-center hover:bg-gray-400 transition duration-200 ease-in-out transform hover:scale-110"
        onClick={handleDecrement}
      >
        <svg width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="12" height="2" fill="#2D3A4B" />
        </svg>
      </button>
      <input
        type="text"
        value={count}
        onChange={handleChange}
        className="h-8 py-1 w-16 text-center border-t border-b border-[#606B6E] focus:outline-none"
      />
      <button
        className="h-8 w-8 py-1 px-2 bg-gray-300 border-2 border-[#606B6E] rounded-r hover:bg-gray-400 transition duration-200 ease-in-out transform hover:scale-110"
        onClick={handleIncrement}
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="5" width="12" height="2" fill="#2D3A4B" />
          <rect x="5" y="12" width="12" height="2" transform="rotate(-90 5 12)" fill="#2D3A4B" />
        </svg>
      </button>
    </div>
  );
}

export default InputNumber;
