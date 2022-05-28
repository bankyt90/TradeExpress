import React from 'react'
import { Link } from 'react-router-dom'

const Sell = () => {
  return (
    <div>
        <button>
            <Link to='./Buy'>Buy</Link>
        </button>
        <button>
            <Link to='./Sell'>Sell</Link>
        </button>
        <ul>
            <li><a href='l' alt>L</a></li>
            <li><a href='l' alt>L</a></li>
        </ul>
    </div>
  )
}

export default Sell