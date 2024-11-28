import React, { useState } from "react";

const Counter = () => {
  const [counterVal, setCounterVal] = useState(1);

  const addValue = () => {
    setCounterVal(counterVal + 1);
  };

  const removeValue = () => {
    setCounterVal(counterVal - 1);
  };

  return (
    <>
      <div className="h-screen">
        <h2 className="text-center flex items-center justify-center text-3xl font-medium text-blue-600">
          Counter
        </h2>
        <p className="text-center text-3xl">Current Value: {counterVal}</p>
        <button
          onClick={addValue}
          className="py-6 px-8 border border-solid border-black rounded-2xl bg-black text-white flex items-center justify-center mx-auto"
        >
          Add Value
        </button>
        <button
          onClick={removeValue}
          className="py-6 px-8 border border-solid border-black rounded-2xl bg-black text-white flex items-center justify-center mx-auto mt-4"
        >
          Remove Value
        </button>
      </div>
    </>
  );
};

export default Counter;
