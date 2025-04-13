import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import About from './pages/About';
import Contactos from './pages/contactos';
import Menu from './pages/Menu';
import Faq from './pages/Faq';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactos" element={<Contactos />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
