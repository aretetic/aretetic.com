import { Routes, Route } from 'react-router-dom';
import * as React from 'react';
import { Redirect} from 'react-router';
import './App.css';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Services from './pages/services/Services';
import Footer from './components/footer/Footer';

function App() {
  return (
    	<>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/services' element={<Services />} />
				<Redirect from='*' to='/' />
			</Routes>
			<Footer />
		</>
  );
}

export default App;
