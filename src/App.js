import { Routes, Route, useLocation } from 'react-router-dom';
import * as React from 'react';
import './App.css';
import { Navigate} from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import About from './pages/about/About'
import Services from './pages/services/Services';
import Products from 'pages/products/Products';
import Footer from './components/footer/Footer';

function App() {
  const location = useLocation();

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-aretetic-solutions' element={<About />} />
        <Route path='/aretetic-solutions-services' element={<Services />} />
        <Route path='/aretetic-products' element={<Products />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
      {location.pathname !== '/' && <Footer />}
    </>
  );
}

export default App;

