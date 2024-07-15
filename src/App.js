import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import AboutHydrogen from './components/AboutHydrogen';
import Advantages from './components/Advantages';
import Challenges from './components/Challenges';
import PromisingAreas from './components/PromisingAreas';

const App = () => (
  <>
    <Header />
    <main>
      <div className="container fade-in">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-hydrogen" element={<AboutHydrogen />} />
          <Route path="/advantages" element={<Advantages />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/promising-areas" element={<PromisingAreas />} />
        </Routes>
      </div>
    </main>
    <Footer />
  </>
);

export default App;
