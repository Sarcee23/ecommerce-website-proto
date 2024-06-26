import React from 'react'
import'./Newsletter.css'
const Newsletter = () => {
  return (
    <div className='newsletter'>
      <h1>Get exclusive offfers on your email!</h1>
      <p>Subscribe to our newsletter and stay updated.</p>
      <div>
      <input type="email" placeholder="xyz@gmail.com"/>
      <button>Subscribe</button>
  </div>
  </div>)
}

export default Newsletter
