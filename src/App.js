import logo from './logo.svg';
import './App.css';
import CustomButton from './components/Button/';
import LoginForm from './components/Pages/LoginForm';
import Register from './components/Pages/Register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Fragments/Navbar';
import Homepage from './components/Pages/Homepage';
import LandingPage from './components/Pages/LandingPage';

function App() {
  const handleFormSubmit = () => {
    alert('Form Submitted!');
  }

  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginForm onsubmit={handleFormSubmit} />} />
        <Route path='/register' element={<Register onsubmit={handleFormSubmit} />} />
        <Route path='/navbar' element={<Navbar />} />
        <Route path='/homepage' element={<Homepage />} />
        <Route path='/landingpage' element={<LandingPage />} />
      </Routes>
    </Router>
  )
}

export default App;
