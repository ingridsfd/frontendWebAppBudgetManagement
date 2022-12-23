import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const [accountName, setName] = useState("");
  const [accountNumber, setAccNum] = useState("");
  const [balance, setBalance] = useState("");
  const [cardType, setCard] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3003/users/${id}`).then((res) => {
      setName(res.data.accountName);
      setAccNum(res.data.accountNumber);
      setBalance(res.data.balance);
      setCard(res.data.cardType);
    });
  }, []);

  const data = {
    accountName: accountName,
    accountNumber: accountNumber,
    balance: balance,
    cardType: cardType,
  };

  const update = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3003/users/${id}`, data)
      .then(navigate("/accounts"));
  };

  return (
    <div className="w-screen h-full flex flex-col justify-center items-center mt-16">
      <h1 className="text-black text-3xl font-semibold font-Montserrat">
        Edit:
      </h1>
      <form className="w-[80%] h-full flex flex-col justify-center items-center mt-4">
        <input
          value={accountName}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter a name for the account"
          className="w-[80%] bg-white/10 mt-4 text-xl font-Montserrat font-normal outline-none py-4 pl-6 border border-zinc-400 py-6 pl-6 mt-4"
        />
        <input
          value={accountNumber}
          onChange={(e) => setAccNum(e.target.value)}
          type="text"
          placeholder="Enter an Id account"
          className="w-[80%] bg-white/10 mt-4 text-xl font-Montserrat font-normal outline-none py-4 pl-6 border border-zinc-400 py-6 pl-6 mt-4"
        />
        <input
          value={balance}
          onChange={(e) => setBalance(e.target.value)}
          type="text"
          placeholder="Enter budget's balance"
          className="w-[80%] bg-white/10 mt-4 text-xl font-Montserrat font-normal outline-none py-4 pl-6 border border-zinc-400 py-6 pl-6 mt-4"
        />
        <input
          value={cardType}
          onChange={(e) => setCard(e.target.value)}
          type="text"
          placeholder="Enter type of card"
          className="w-[80%] bg-white/10 mt-4 text-xl font-Montserrat font-normal outline-none py-4 pl-6 border border-zinc-400 py-6 pl-6 mt-4"
        />
        <button
          onClick={update}
          type="submit"
          className="w-[80%] bg-blue-500 mt-4 text-white font-semibold text-xl font-Montserrat font-normal py-4 pl-6"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default Edit;
