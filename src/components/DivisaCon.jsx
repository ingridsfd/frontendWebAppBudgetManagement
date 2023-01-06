import React from "react";

const DivisaCon = () => {
  return (
    <div className="flex justify-center">
      <div className="flex-col">
        <div className="text text-3xl text-center font-semibold mt-8 mb-8">
          Divisa converter:
        </div>
        <div className="mb-4">
          <input
            type="text"
            className="bg-gray-200 rounded-xl px-3 py-1.5 mr-2"
          />
          <select className="bg-blue-100 rounded-xl px-3 py-1.5">
            <option selected>MXN</option>
            <option value="1">API1</option>
          </select>
        </div>
        <div className="flex justify-center text text-4xl font-semibold">=</div>
        <div className="mt-5">
          <input
            type="text"
            className="bg-gray-200 rounded-xl px-3 py-1.5 mr-2"
          />
          <select className="bg-blue-100 rounded-xl px-3 py-1.5">
            <option selected>USD</option>
            <option value="1">API2</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default DivisaCon;
