import React, { useState ,useEffect, useContext} from "react";
// import { userContext } from "./App";
import Card from "./Card";
function Addtocart(){
  const[val,setval]= useState([]);
  const[button,setbutton]=useState(0);

// const user = useContext(userContext)
let productdata= JSON.parse(localStorage.getItem("array"));
console.log(productdata,"productdatadtocar")
useEffect(()=>{

  setval(productdata);
},[])

 function handlebutton(){
  
 }

return(
    <>
    <table className="table table-bordered border-primary">
        <thead className="thead-dark">
          <tr>
            <th>id</th>
            <th>title</th>
            <th>image</th>
            <th>price</th>
            <th>size</th>
            <th>color</th>
            <th>category</th>
            <th>quantity</th>
          </tr> </thead>
        <tbody>
          

               {productdata.map(products=> (
                 <tr key={products.id}>
                <td>{products.id}</td>
                <td>{products.title}</td>
                <td>
                  <img src={products.image} style={{ height: "10pc", width: "10pc" }} />
                </td>
                <td>{products.price}</td>
                <td>{products.size}</td>
                <td>{products.color}</td>
                <td>{products.category.word}</td>
                <td>{products.quantity}</td>
                </tr>
               ))
           }  
        
      </tbody>
      </table> 

    </>
)}
export default Addtocart;