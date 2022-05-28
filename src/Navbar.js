import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import img from './TradExpress.svg'

const Navbar = () => {
  return (
    <div>
    <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-lg">
        <a class="navbar-brand" href="#"><img src={img} alt=''/></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item">
            {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
            <Link className='nav-text' to='/Instant'>Instant Buy/Sell</Link>
            </li>
            <li class="nav-item">
            {/* <a class="nav-link" href="#">Features</a> */}
            <Link className='nav-text' to='/Instant'>Learn</Link>
            </li>
            <li class="nav-item">
            {/* <a class="nav-link" href="#">Pricing</a> */}
            <Link className='nav-text box1' to='/Instant'>Login</Link>
            </li>
            <li class="nav-item">
            {/* <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a> */}
            <Link className='nav-text box2' to='/Instant'>Get Started</Link>
            </li>
            
        </ul>
    </div>
  </div>
</nav>
        <Outlet/>
    </div>
  )
}

export default Navbar