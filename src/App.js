import { Routes, Route, useLocation } from 'react-router-dom';
import * as React from 'react';
import { useEffect } from 'react';
import './App.css';
import { Navigate } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Products from './pages/products/Products';
import CDI from './pages/products/cdi/CDI';
import DigitalCabinet from './pages/products/digitalcabinet/DigitalCabinet'
import PrioPeak from './pages/products/priopeak/PrioPeak'
import SoChoice from './pages/products/sochoice/SoChoice'
import Services from './pages/services/Services';
import Contact from './pages/contact/Contact';
import Footer from './components/footer/Footer';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

function App() {
  const location = useLocation();

  return (
	<>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-aretetic-solutions' element={<About />} />
        <Route path='/aretetic-products' element={<Products />} />
        <Route path='/aretetic-products/community-driven-innovation' element={<CDI />} />
		<Route path='/aretetic-products/digital-cabinet' element={<DigitalCabinet />} />
		<Route path='/aretetic-products/priopeak' element={<PrioPeak />} />
		<Route path='/aretetic-products/sochoice' element={<SoChoice />} />
        <Route path='/aretetic-solutions-services' element={<Services />} />
        <Route path='/contact-us' element={<Contact />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
      {location.pathname !== '/' && <Footer />}
	  </>
  );
}

export default App;
