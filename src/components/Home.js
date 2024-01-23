import React, { useEffect, useState } from 'react'
import ProductBox from './ProductBox';
import "./index.css"
function Home() {

const [prod,SetProd]=useState()

useEffect(()=>{
    fetch('https://fakestoreapi.com/products?limit=5')
            .then(res=>res.json())
            .then(json=>SetProd(json))

},[])
console.log(prod);

  return (
    <div className='home'>
{
    prod?prod.map((p,i)=><ProductBox key={i} product={p}/>):null
}

      
    </div>
  )
}

export default Home
