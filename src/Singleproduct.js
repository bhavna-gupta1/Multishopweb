import React, { useEffect, useState } from "react";
import Card from "./Card";
function Singleproduct(props){
console.log(props.id,"props2334")
    const[product,setproduct]= useState([]);
    const[num,setnum]= useState([]);
    async function handleProduct() {
        let a = process.env.REACT_APP_SECRET_KEY
  
      let result = await fetch(`${a}/api/v1/product/${props.id}/`);
     let response = await result.json();
      setproduct(response)
      // props.setid()
      // props.setid(products.id)
    }
    // console.log(product,"resposingle")
    useEffect(()=>{
        handleProduct()
         
    },[])
    function incNum(){
  {
 setnum(Number(num+1))
}}
function decNum(){
  if(num>0){
  setnum(num-1)
}}
function handleChange(e){
setnum(e.target.value);
}
    return(
        <>
        
            <div className="div_element">
            <h5 className="card-title">{product.title}</h5>
           <img src= {product.image} style={{height:"30pc",width:"30pc"}}/> 
           <h5>Price:{product.price} rs</h5>
           <h6>Detail:{product.description}</h6>
           <h6>Size:{product.size}</h6>
           <h6>Color:{product.color}</h6>
      
        {/* <button>Add to cart</button> */}
        <button onClick={()=> incNum()}>+</button>
             <input type="text" placeholder="0" value={num}  onChange={handleChange} style={{width:"3pc",textAlign:"center"}}/>
            <button onClick={()=> decNum()}>-</button>
           </div>
           <div className="div_cartbuton">
           {/* <button ><img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" style={{height:"3pc",width:"5pc",color:"red",float:"left"}}/></button>
          </div> */}
          </div>
        </>

    )
}
export default Singleproduct;