import './App.css';
import React from 'react'
import Products from "./components/Products";
import Home from './components/Home';
import Contact from './components/Contact';
import {Route, Link} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/footer'


export default function App() {
  return (
    <div className='App'>
    <Navbar></Navbar>
        <Route exact path='/' component={Home}/>
        <Route exact path='/Products' component={Products}/>
        <Route exact path='/Contact' component={Contact}/>
  <Footer></Footer>
    </div>
  )
}
