import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="p-24 flex justify-center font-Montserrat">
      <div className="p-14 block rounded-lg shadow-lg bg-gray-100 max-w-sm text-center">
        <div className="p-2 text-3xl font-bold">Main Content</div>
        <div className="p-2 text-2xl">
          <Link to={"/accounts"}>Accounts</Link>
        </div>
        <div className="p-2 text-2xl">
          <Link to={"/transactions"}>Make a transaction</Link>
        </div>
        <div className="p-2 text-2xl">
          <Link to={"/divisas"}>Divisa converter</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
