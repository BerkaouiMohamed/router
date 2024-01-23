import React,{useState,useEffect} from 'react'
import ProductBox from './ProductBox';
import "./index.css"

function Products() {
    const [prod,SetProd]=useState()

useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>SetProd(json))

},[])
console.log(prod);

  return (
    <div className='products'>
      {
    prod?prod.map((p,i)=><ProductBox key={i} product={p}/>):null
}

    </div>
  )
}

export default Products
