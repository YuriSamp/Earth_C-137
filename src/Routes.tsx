import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import './fonts/get_schwifty.ttf';
import { Locations } from 'pages/Locations';
import { NavBar } from 'components/NavBar';
import { Footer } from 'components/Footer';

export const Rotas = () => {
  return (
    <Router>
      <>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Locations' element={<Locations />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
};
