import React from 'react'
import { useNavigate } from 'react-router-dom';

const Transactions = () => {
    const navigate = useNavigate();
    const redirect = () => {
      navigate('/home')
    }
  return (
    <div>
      <h1>Transactions are here!</h1>
      <button onClick={redirect}>back</button>
    </div>
  )
}

export default Transactions