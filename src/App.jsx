import React from 'react';
import { Header } from './componenets/Header/Header';
import { Hero } from './componenets/Hero/Hero';
import './App.css';
import { Companies } from './componenets/Companies/Companies';
import { Residencies } from './componenets/Residencies/Residencies';
import { Value } from './componenets/value/Value';
import Contact from './componenets/Contact/Contact';
import { Getstarted } from './componenets/GetStarted/Getstarted';
import { Footer } from './componenets/Footer/Footer';

const App = () => {
  return ( 
    <div className='App'>
      <div>
        <div className="white-gradient"/>
        <Header/>
        <Hero/>
      </div>
      <Companies/>
      <Residencies/>
      <Value/>
      <Contact/>
      <Getstarted/>
      <Footer/>
    </div>
   
  )
}

export default App