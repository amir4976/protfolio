import './App.css'
import { motion } from "framer-motion"
import Header from './components/header/Header';
import React, { useEffect, useState } from 'react'
import Experince from './components/experience/Experince';
import Footer from './components/footer/Footer';
import {Circle2, Zoom} from "react-preloaders";
import AboutMe from './components/AboutME/AboutMe';
import { border } from '@mui/system';
import ConnectMe from './components/connectME/ConnectME';
import FormConntactME from './components/formConntectMe/FormConntactME';
export default function App(params) {
  const [mousePosition,setMousePosition] = useState({
    x:0,
    y:0
  })
  const [loading,setLoading] = useState(false)
  useEffect(()=>{
    setLoading(true)

   setTimeout(() => {
    setLoading(false)
   }, 2100);
  },[])
  
const [cursorVariant , setCursorVariant ]=useState("default")

  useEffect(()=>{
    const mouseMove=e=>{
      setMousePosition({
        x:e.pageX-10,
        y:e.pageY-10
      })
    }
    document.addEventListener('mousemove',mouseMove)
    
  },[])


  const variant={
    default:{
      x:mousePosition.x,
      y:mousePosition.y,
      z:1000,
      mixBlendMode:" difference",
      background:'#fff',
      border:0
    },
    text:{
     
      height:150,
      width:150,
      x:mousePosition.x-75,
      y:mousePosition.y-75,
      mixBlendMode:"difference",
      overFlow:'hidden',
      background:'#fff',
      border:'0',
    },
    special:{
      height:150,
      width:150,
      x:mousePosition.x-75,
      y:mousePosition.y-75,
      background:'#d50151',
      mixBlendMode:"difference",
      border:0,
    
    }
  }

  const mouseEnter=()=>{
    setCursorVariant("text")
  }

  const mouseLeave=()=>{
    setCursorVariant("default")
  }
  const testPassFunction= () =>{
    setCursorVariant("special")
  }

  const scrollDown = ()=>{
   
    window.scrollTo(0,1200)
    
  }

  return (
    <div className='App-Container'>
     <div className="App" >
      <div className="background-nois">
      </div>
      <motion.div className="mouse" variants={variant} animate={cursorVariant}/>
      <Header Enter={mouseEnter} Leave={mouseLeave} PassFunction={scrollDown}/>     
    
      <AboutMe Enter={mouseEnter} Leave={mouseLeave} testPassFunction={testPassFunction}/>
      
      <Experince Enter={mouseEnter} Leave={mouseLeave} /> 
      <ConnectMe Enter={mouseEnter} Leave={mouseLeave} />

      <Footer/>
      <h1 style={{color:'#fff'}}>i told you so</h1>
    </div>
    
    </div>
  );
};
