import React from 'react'
import { useNavigate } from 'react-router-dom';

const DivisaCon = () => {
    const navigate = useNavigate();
    const redirect = () => {
        navigate('/home')
    }
return (
    <div>
        <h1>Here goes the converter</h1>
        <button onClick={redirect}>back</button>
    </div>
)
}

export default DivisaCon