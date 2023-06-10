import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Landing from './components/landing/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard';
import NewCard from './components/dashboard/NewCard';
import Review from './components/dashboard/Review';
import Visualise from './components/dashboard/Visualise';
import NotFound from './components/pages/NotFound';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import TermsOfService from './components/pages/TermsOfService';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import FAQ from './components/pages/FAQ';
import PasswordReset from './components/auth/PasswordReset';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/newCard" element={<NewCard />} />
        <Route path="/review" element={<Review />} />
        <Route path="/visualise" element={<Visualise />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/reset-password" element={<PasswordReset />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
