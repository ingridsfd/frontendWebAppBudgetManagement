import React from 'react'
import { Routes, Route } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h1>Actual balance: *insert balance*</h1>
      <Routes>
        <Route path='/' element={<h2> Record Local transactions</h2>} />
        <Route path='/' element={<h2> Add expense or income</h2>}/>
        <Route path='/config' element={<h2> config dashboard</h2>}/>
        <Route path='/list' element={<h2> list dashboard</h2>}/>
      </Routes>
    </div>
  )
}

export default Dashboard