import { Link } from "react-router-dom";
import "./index.css"

function ProductBox(props) {
    console.log(props);
  return (
    <div className='productBox'>
        <img src={props.product.image}alt=''/>
      <h1>
    {props.product.title}
      </h1>
<p>{props.product.description.slice(0,50)} ...</p>
<button>go to product</button>
    </div>
  )
}

export default ProductBox
