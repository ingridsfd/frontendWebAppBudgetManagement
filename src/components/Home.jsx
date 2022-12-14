import React from 'react'
import {Link} from 'react-router-dom'
const home = () => {
  return (
    <div>
      <h1><Link to='/accounts'>Accounts/your account</Link></h1>
      <h1><Link to='/transactions'>Make a transaction</Link></h1>
      <h1><Link to='/divconverter'>Divisa converter</Link></h1>
    </div>
  )
}

export default home