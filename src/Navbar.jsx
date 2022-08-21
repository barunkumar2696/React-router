import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div style={{display:'flex',justifyContent:'space-around',backgroundColor:'gray',padding:'20px'}}>
      <Link to='/' >Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/Help'>Help</Link>
    </div>
  )
}
//steps for using link:
//1.import link from react router dom.
//2.place link inside div and pass 'to' attribute to it which is the path of navigate.
//3.pass all component in the element attribute of route in routes of app.js.