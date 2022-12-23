import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Accounts = () => {
  const [users, setUsers] = useState([]);

  const loadUsers = () => {
    axios.get("http://localhost:3003/users").then((res) => {
      setUsers(res.data.reverse());
    });
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const Delete = (id) => {
    axios.delete(`http://localhost:3003/users/${id}`).then(loadUsers());
  };

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <h1 className="text-black text-3xl font-semibold font-Montserrat">
              {" "}
              This is accounts page
            </h1>
            <table className="min-w-full text-center">
              <thead className="bg-black">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-medium text-white px-6 py-4"
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-white px-6 py-4"
                  >
                    Name of Account
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-white px-6 py-4"
                  >
                    Account ID
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-white px-6 py-4"
                  >
                    Balance
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-white px-6 py-4"
                  >
                    Card Type
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-white px-6 py-4"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((data, index) => (
                  <tr key={index} className="bg-white border-b">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {index + 1}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {data.accountName}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {data.accountNumber}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {data.balance}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {data.cardType}
                    </td>
                    <td className="flex justify-center items-center space-x-2 mt-1">
                      <Link
                        to={`/users/${data.id}`}
                        className="px-6 py-2 text-white font-normal bg-black rounded-lg"
                      >
                        View
                      </Link>
                      <Link
                        to={`/edit-user/${data.id}`}
                        className="px-6 py-2 text-white font-normal bg-blue-600 rounded-lg"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => Delete(data.id)}
                        className="px-6 py-2 text-white font-normal bg-red-600 rounded-lg"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex">
              <Link
                to={"/add-user"}
                className="w-[142px] h-[40px] px-8 py-2 hover:bg-white hover:text-black hover:border-2 hover:border-black text-white font-normal bg-green-600 rounded-lg"
              >
                Add Users
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accounts;
