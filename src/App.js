
import React, {useState, useEffect} from 'react';


import './App.css';

import Header from './compononts/Header/Header';
import Hero from './compononts/UI/Hero';
import Counter from './compononts/UI/Counter';
import Services from './compononts/UI/Services';
import About from './compononts/UI/About';
import Team from './compononts/UI/Team';
import Blog from './compononts/UI/Blog';
import Testimonial from './compononts/UI/Testimonial';
import Newsletter from './compononts/UI/Newsletter';
import Footer from './compononts/Footer/Footer';

function App() {

  const [theme, setTheme] = useState('')

  const toggleTheme = ()=>{
    theme === '' ? setTheme('light-theme') : setTheme('')
  }

  useEffect(() =>{
    document.body.className = theme
  }, [theme])

  return (
    <>
        <Header theme={theme} toggleTheme={toggleTheme}/>
        <Hero theme={theme}/>
        <Counter />
        <Services />
        <About />
        <Team />
        <Blog />
        <Testimonial />
        <Newsletter />
        <Footer />
    </>
  );
}

export default App;
