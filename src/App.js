import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import './App.css';
//componets
import Dashboard from './components/Dashboard';
import History from './components/History';
import Home from './components/Home';
import Accounts from './components/Accounts'
import DivisaCon from './components/DivisaCon'
//pages
import NavbarVar from './pages/Navbar';
import Transactions from './components/Transactions';



function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavbarVar />} >
          <Route index element={<Home />}/>
          <Route path='dashboard' element={<Dashboard />} />
            <Route path='history' element={<History />} />
            <Route path='accounts' element={<Accounts />} />
            <Route path='divconverter' element={<DivisaCon />} />
            <Route path='transactions' element={<Transactions />} />
            
          <Route path='*' element={ <Navigate replace to="/"/> }/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;