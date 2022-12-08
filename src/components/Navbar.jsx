import React from 'react'
import { Link, useNavigate }from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const redirect = ()=>{
        navigate('/dashboard')
    }
  return (
    <div>
        <Link to='/'>Home</Link>
        <Link to='/dashboard'>Dashboard</Link>
        <Link to='/rutas'>Settings</Link>
        <button onClick={redirect}>dashboard redirect javascript</button>
    </div>
  )
}

export default Navbar