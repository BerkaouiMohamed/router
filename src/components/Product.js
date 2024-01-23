import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Product() {
    const param=useParams()
    console.log(param);

    
const [prod,SetProd]=useState()

useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/${param.Id}`)
            .then(res=>res.json())
            .then(json=>SetProd(json))

},[])

console.log(prod);
  return (
    <div>
      {prod&&<>
      <img src={prod.image} />
      </>
      }
    </div>
  )
}

export default Product
