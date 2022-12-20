import React from "react";

const Accounts = () => {
  /* const [contacts, setContacts] = useState([]); */

  /* useEffect(() => {
    axios.get()
  }, []) */

  return (
    <div className="w-full h-full flex flex-col px-10 py-8">
      <div className="w-full flex flex-col min-h-[50vh] justify-center items-center">
        <h1 h1 className="text-black text-3xl font-semibold font-Montserrat">
          This is accounts page
        </h1>
        <table class="w-[80%] text-center overflow-hidden overflow-y-scroll mt-8">
          <thead class="bg-black">
            <tr>
              <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                #
              </th>
              <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                Name of Account
              </th>
              <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                Account ID
              </th>
              <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                Balance
              </th>
              <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                Card Type
              </th>
              <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                1
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Marc Anthony
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                O110KDFJ
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                $45 USD
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Debit
              </td>
              <td class="flex justify-center items-center space-x-2 mt-1">
                <button className="px-6 py-2 text-white font-normal bg-black rounded-lg">
                  View
                </button>
                <button className="px-6 py-2 text-white font-normal bg-blue-600 rounded-lg">
                  Edit
                </button>
                <button className="px-6 py-2 text-white font-normal bg-red-600 rounded-lg">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Accounts;
