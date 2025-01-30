import { Route, Routes } from 'react-router-dom';
import Userlogin from './pages/Userlogin';
import Start from './pages/Start';
import UserSignup from './pages/UserSignup';
import Captainlogin from './pages/Captainlogin'; // Correct import for Captainlogin
import CaptainSignup from './pages/CaptainSignup';
import Home from './pages/Home';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/login' element={<Userlogin />} />
        <Route path='/Signup' element={<UserSignup />} />
        <Route path='/Captain-login' element={<Captainlogin />} /> {/* Corrected this */}
        <Route path='/Captain-Signup' element={<CaptainSignup />} />
        <Route path='/home' element={<Home/>} />

      </Routes>
    </div>
  )
}

export default App;
