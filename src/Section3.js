import React from 'react'
import img from './Group 52.svg'

const Section3 = () => {
  return (
    <div className='bg'>
        <h2 className='textcen'>Buy and Sell your Cryptocurrency in 3 simple steps</h2>
        <div className='container'>
            <div className='sec3'>
                <div className='coll11'>
                    <div className='purple-box'>1</div>
                    <div className='sec-box'>
                    <h3>Create a free Account</h3>
                    <p>Sign up for your free TradExpress Wallet on web, iOS, or Android devices and follow our easy process to set up your profile.</p>
                    </div>
                </div>
                <div className='coll11'><img className='img-box' src={img} alt=''/></div>
            </div>

            <div className='sec3 mt-5'>
                <div className='coll11'><img className='img-box img-box-pos' src={img} alt=''/></div>
                <div className='coll11'>
                    <div className='purple-box'>2</div>
                    <div className='sec-box'>
                    <h3>Deposit</h3>
                    <p>Choose your preferred deposit option like bank transfer, credit/debit card or send digital asset directly to your wallet for easy funding/withdrawal.</p>
                    </div>                 
                </div>
            </div>

            <div className='sec3 margin-t'>
                <div className='coll11'>
                    <div className='purple-box'>3</div>
                    <div className='sec-box'>
                    <h3>Buy/ Sell Crypto</h3>
                    <p>Buy BTC, USDT, ETH, LTC, XRP, DOGE and securely store it in your wallet or send it easily to friends and family.</p>
                    </div>
                </div>
                <div className='coll11'><img className='img-box' src={img} alt=''/></div>
            </div>
        </div>
    </div>
  )
}

export default Section3