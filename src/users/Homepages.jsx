import React from 'react'

import '../public/main.css';

import Nav from './components/Nav'
import Header from './homeComp/Header';
import Activities from './homeComp/Activities';
import Highlight from './homeComp/Highlight';
import CareerP from './homeComp/CareerP';
import Exp from './homeComp/Exp';

const Homepages = () => {
  return (
    <>
      <Nav/>
      {/* <Header /> */}
      <Activities />
      <Highlight />
      <CareerP />
      <Exp />
    </>
  )
}

export default Homepages