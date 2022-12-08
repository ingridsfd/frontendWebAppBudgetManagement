import { Routes, Route, Navigate } from 'react-router-dom';
//componets
import Navbar from './components/Navbar';
import ProtectorRoute from './components/ProtectorRoute';
//views
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import List from './pages/AccountsList';
import SubRutas from './pages/SubRutas';
import LogIn from './pages/LogIn';
import FormularioFormik from './pages/Register';


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/register' element={<FormularioFormik />}/>
        <Route path='/login' element={<LogIn />} />
        <Route path='/' element={<Home />} />
        <Route path='/rutas' element={<SubRutas/>}>
          <Route index element={<h1> Settings </h1>}/>
          <Route path='changePass' element={<h1> Change password</h1>}/>
        </Route>
        <Route path='/list/:id' element={<List />} />
        <Route path='/dashboard/*' element={
          <ProtectorRoute>
            <Dashboard />
          </ProtectorRoute>
        } />
        <Route path='*' element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;