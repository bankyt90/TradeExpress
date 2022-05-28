import React from 'react'
import img from './Group 68.svg'
import img2 from './Group 69.svg'

const Section4 = () => {
  return (
    <div className='sec4'>
        <p>Ready to trade Buy/Sell Cryptocurrencies in just 10 minutes?</p>
        <h2>Create your account for free and start trading today!</h2>
        <button className='purple-btn'>Get Started</button>
        <div className='sec4-flex'>
                <div className='sec4-img'>
                    <img src={img} alt=''/>
                </div>
                <div className='sec4-img'>
                    <img src={img2} alt=''/>
                </div>
            </div>
    </div>
  )
}

export default Section4