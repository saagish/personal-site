import React from 'react';
import './App.css';
import './i18n'
import Header from './components/Header';
import Biography from "./components/Biography";
import Footer from './components/Footer';
import Hero from './components/Hero';

function App() {
  return (
    <div className="font-system flex flex-col min-h-screen">
      <Header/>
      <div className="flex-1">
      <Hero/>
      <Biography/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
