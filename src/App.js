import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom' 
import Home from './Home';
import Instant from './Instant';
import Buy from './Buy';
import Sell from './Sell'
import Navbar from './Navbar';
// import Fetch from './Fetch';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element ={<Home/>}/>
        <Route path='Instant' element={<Instant/>}/>
        <Route path='Buy' element={<Buy/>}/>        
        <Route path='Sell' element={<Sell/>}/> 
        {/* <Route path='Fetch' element={<Fetch/>}/>  */}
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
