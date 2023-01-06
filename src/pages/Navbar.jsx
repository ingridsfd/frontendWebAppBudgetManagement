import React from "react";
import { Link } from "react-router-dom";
//remember to fix Navbar padding

function Navbar() {
  return (
    <>
      <div className="w-ful h-16 flex space-x-4 space-y-4 bg-blue-500 font-Montserrat">
        <div class="mt-2">
          <Link to={"/"} className="px-14 text-3xl text-white font-semibold">
            yourBankOnline
          </Link>
        </div>
        <div>
          <Link to={"/"} className="rounded-lg font-bold text-white py-2 px-2">
            Home
          </Link>
        </div>
        <div>
          <Link
            to={"/dashboard"}
            className="rounded-lg font-bold text-white py-2 px-2"
          >
            Dashboard
          </Link>
        </div>
        <div>
          <Link
            to={"/history"}
            className="rounded-lg font-bold text-white py-2 px-2"
          >
            History
          </Link>
        </div>
        <div>
          <Link
            to={"/logout"}
            className="hover:bg-white hover:text-black hover:shadow-md rounded-lg font-bold text-white py-2 px-2"
          >
            Log out
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
