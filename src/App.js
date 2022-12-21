import './App.css';
import { Routes, Route } from 'react-router-dom'
//pages
import Navbar from './pages/Navbar';
import Home from './pages/Home'
//components
import Accounts from './components/Accounts' 
import Dashboard from './components/Dashboard'
import History from './components/History'
import Transactions from './components/Transactions'
import DivisaCon from './components/DivisaCon'
//components-crud
import User from './components/crud/User'
import AddUser from './components/crud/AddUser'


function App() {

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/users/:id" element={<User />} />
        <Route path="/add-user" element={<AddUser/>}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/history" element={<History />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/divisas" element={<DivisaCon/>} />
      </Routes>
    </div>
  );
}

export default App;