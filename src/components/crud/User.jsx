import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    axios.get(`http://localhost:3003/users/${id}`).then((res) => {
      setUser(res.data);
    });
  }, []);

  const { id } = useParams();

  return (
    <div className="w-full h-full flex justify-center intems-center">
      {user && (
        <>
          <div className="w-[700px] h-[200px] flex justify center items-center px-6 py-4 border-2 border-black mt-16">
            <div className="w-5/12 flex flex-col space-y-4">
              <h2 className="text-black font-semibold font-inter text-2xl border-b border-black">
                Name:
              </h2>
              <h2 className="text-black font-semibold font-inter text-2xl border-b border-black">
                Account Id:
              </h2>
              <h2 className="text-black font-semibold font-inter text-2xl border-b border-black">
                Balance:
              </h2>
              <h2 className="text-black font-semibold font-inter text-2xl">
                Card Type:
              </h2>
            </div>
            <div className="w-7/12 flex flex-col space-y-4">
              <h2 className="text-black font-semibold font-inter text-2xl border-b border-black">
                {user.accountName}
              </h2>
              <h2 className="text-black font-semibold font-inter text-2xl border-b border-black">
                {user.accountNumber}
              </h2>
              <h2 className="text-black font-semibold font-inter text-2xl border-b border-black">
                {user.balance}
              </h2>
              <h2 className="text-black font-semibold font-inter text-2xl">
                {user.cardType}
              </h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default User;
