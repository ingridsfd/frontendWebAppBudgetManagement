import React, { useState } from 'react';

const Formulario = () => {
    const [data, setData] = useState({
        email: '',
        password:'',
    })
    
    const handleChange = (e) => {
        //setLastName(e.target.value);
        setData({ ...data, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(data);
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p>E-mail:{data.email}</p>
                <input value={data.name} name='email' onChange={handleChange} placeholder='Put E-mail...' />
                <p>Password:</p>
                <input value={data.password} name='password' onChange={handleChange} placeholder='Create Password...' />
                <button type='submit'>ENVIAR</button>
            </form>
        </div>
    )
}

export default Formulario