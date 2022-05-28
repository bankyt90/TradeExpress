import React, {useEffect, useState} from 'react'

const Fetch = () => {
    const [info, setInfo] = useState([])
    useEffect (() => {
        fetch('https://api.coinlore.net/api/tickers/?start=100&limit=5')
        .then(response => response.json())
        .then(json => setInfo(json.data))
    }, []);
  return (
    <div className='fle'>
         {info.map((d)=> {
            const {symbol,name, rank, price_usd,id } = d
            return(
                <div key={id} className='mpfl' >
                    <h1 className='map1'>{symbol}  {name}</h1>
                    <h1 className='map2'>{rank} <br/> {price_usd}</h1>
                </div>
            )
        })}
    </div>
  )
}

export default Fetch