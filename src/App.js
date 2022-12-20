import './App.css';
import Navbar from './pages/Navbar';
import Home from './pages/Home'
import {Routes, Route} from 'react-router-dom'
import Accounts from './components/Accounts' 
import Dashboard from './components/Dashboard'
import History from './components/History'

function App() {

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/history" element={<History />} />
      </Routes>
    </div>
  );
}

export default App;