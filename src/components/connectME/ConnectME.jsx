import React from 'react'
import './connect.css'
export default function ConnectMe(props) {
  return (
    <div  className='connectME'>
      <h1 className='ConnectmeTitle'>find my number</h1>
     <h5 className='dode'  onMouseMove={props.Enter} onMouseLeave={props.Leave}>
       <span>09105234976</span>
       <span>09353143089</span>
       <span>amirhosianahmadi4976@gmail.com</span> <img src="./qr-code.svg" alt="" />
     </h5>
    
    </div>
  )
}
