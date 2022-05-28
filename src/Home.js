import React from 'react'
import Fetch from './Fetch'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Footer from './Footer'
import imgi from './Group 68.svg'
import imgi2 from './Group 69.svg'

const Home = () => {
  return (
    <div>
    <div className='conh'>
        <div className='circle1'></div>
        <div className='circle2'></div>
        <div className='container-lg'>
            <h1>Buy, sell and manage your<br/>
            Crypto on TradExpress</h1>
            <p>Easily Trade Cryptocurrencies like BTC,USDT,ETH,LTC&XRP<br/>with NGN</p>
            <button className='btnh'>Get Started</button>
            <div className='flex'>
                <div className='co1 me-3'>
                    <img src={imgi2} alt=''/>
                </div>
                <div className='co1'>
                    <img src={imgi} alt=''/>
                </div>
            </div>
        </div>
    </div>
    <div>
            <Fetch/>
            <Section2/>
            <Section3/>
            <Section4/>
            <Section5/>
            <Footer/>
    </div>
    </div>
  )
}

export default Home