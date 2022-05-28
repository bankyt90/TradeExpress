import React from 'react'
import img from './Union 1.svg'
import img2 from './Group 28.svg'

const Section5 = () => {
  return (
    <div className='bg'>
        <div className='container'>
        <h2 className='text-center pt-5 pb-3'>Customer's Review</h2>
        <div className='sec5-flex'>
            <div className='co5'>
                <img className='pur-box' src={img} alt=''/>
                <div className='text-co'>
                    <blockquote>Trading on TradExpress mobile & web platforms has been a smooth experience for me quite easy to navigate.</blockquote>
                </div>
                <div>
                <cite><img src={img2} alt=''/>Ireti<br/>Nigeria</cite></div>
            </div>
            <div className='co5'>
               <img className='pur-box' src={img} alt=''/>
               <div className='text-co'>
               <blockquote>Trading on TradExpress mobile & web platforms has been a smooth experience for me quite easy to navigate.</blockquote>
                </div>
                <div>
                <cite><img src={img2} alt=''/>Bayo<br/>USA</cite></div>
            </div>
            <div className='co5'>
                <img className='pur-box' src={img} alt=''/>
                <div className='text-co'>
                <blockquote>Trading on TradExpress mobile & web platforms has been a smooth experience for me quite easy to navigate.</blockquote>
                </div>
                <div className='bte'>
                <cite><img src={img2} alt=''/>Olagoke<br/> Nigeria</cite></div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Section5