import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Projects from './Projects.js';
import Contact from './Contact.js';
import About from './About.js';
import './App.css';

function App() {
  return (
      <BrowserRouter>
    <div className="App">

      <Route exact path="/" component={Projects} />
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />

      <div className="navigation">
        <div className = "navigation-sub">

        <Link to = "/" className = "item">Projects</Link>
        <Link to = "/contact" className = "item">Contact</Link>
        <Link to = "/about" className = "item">About</Link>
    </div>
    </div>
    </div>
  </BrowserRouter>
  );
}

export default App;
