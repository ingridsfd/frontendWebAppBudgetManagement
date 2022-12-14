import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import './App.css';
//componets
import Dashboard from './components/Dashboard';
import Contact from './components/Contact';
import Home from './components/Home';
//pages
import NavbarVar from './pages/Navbar';



function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavbarVar />} >
          <Route index element={<Home />}/>
          <Route path='dashboard' element={<Dashboard />} />
            <Route path='contact' element={<Contact />} />
            <Route path='*' element={ <Navigate replace to="/"/> }/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;