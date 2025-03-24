import {BrowserRouter as Router ,Routes, Route } from 'react-router-dom';
import Landing from './Pages/Landing';
import Login from './Pages/Login';
import Signup from './Pages/SignUp';
import Profile from './Pages/Profile';

function App() {
  return (
    <Router>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-[375px] h-[667px] bg-white shadow-lg rounded-xl overflow-hidden">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
