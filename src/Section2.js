import React from 'react'
import img from './Group 52.svg'
import img2 from './Group 28.svg'

const Section2 = () => {
  return (
    <div className='bg'>
        <div className='container'>
        <h2 className='textcen'>Why do people get involved with Cryptocurrencies?</h2>
        <div className='sec2'>
            <div className='co3'>
                <img src={img} alt=''/>
                <h3>Easy Mode of Payment</h3>
                <p>People can now easily send and receive money<br/> from anywhere in the world to purchase goods and <br/>pay for services</p>
            </div>
            <div className='co3'>
                <img src={img2} alt=''/>
                <h3>Easy Mode of Payment</h3>
                <p>People can now easily send and receive money<br/> from anywhere in the world to purchase goods and <br/>pay for services</p>
            </div>
            <div className='co3'>
                <img src={img} alt=''/>
                <h3>Easy Mode of Payment</h3>
                <p>People can now easily send and receive money<br/> from anywhere in the world to purchase goods and <br/>pay for services</p>
            </div>
        </div>
        <button className='btnco3'>Learn More</button>
        </div>
    </div>
  )
}

export default Section2