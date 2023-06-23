import React, { useContext } from "react"
import { useState, useEffect } from "react";
import { json, useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Addtocart from "./Addtocart";
import Singleproduct from "./Singleproduct";
import { userContext } from "./App";


function Card(props) {

  const [arr, setarr] = useState([]);
  const navigate = useNavigate();
  function deTail(products) {
    navigate('/detail')
    props.setid(products.id);

  }
  const [product, setproduct] = useState([]);
  const [num, setnum] = useState([]);



  async function handleProduct() {
    let a = process.env.REACT_APP_SECRET_KEY
    let result = await fetch(`${a}/api/v1/product/`);
    let response = await result.json();
    //  console.log(response,"response")
    setproduct(response)
  }
  useEffect(() => {
    for (let x of product) {
      x.quantity = 1
    
    }
    setproduct(product)

  }, [product])

  useEffect(() => {
    handleProduct();
    let data1 = JSON.parse(localStorage.getItem("array"))
    // console.log(data1, "datacarrd")
    if (data1 === null) {

      localStorage.setItem("array", JSON.stringify([]))

    }
  }, [])

  //CONTEXT

  function addCart(products) {

    let data = JSON.parse(localStorage.getItem("array"))

    if (data.length === 0) {
      let a = [...data, products]
      localStorage.setItem("array", JSON.stringify(a))
    }
    else {
      let datas = JSON.parse(localStorage.getItem("array"))
      // console.log(datas,"datas")
      let set = datas.find(x => (x.id === products.id))
      //  console.log(set,"set")
      if (set) {
        // console.log(set,"set")
        set.quantity += 1
        // console.log(datas, "datas")
        localStorage.setItem("array", JSON.stringify(datas))
      }
      else {
        let data3 = JSON.parse(localStorage.getItem("array"))
        let z = [...data3, products]
        localStorage.setItem("array", JSON.stringify(z))

      }


    }
  }
 
  //PROPS
  // function addCart(products){
  //     (props.arr).push(products)
  //     console.log(props.arr,"array")
  //     props.setarr(props.arr)
  //     console.log(products.id,"arrid")
  //  }

  return (
    <>
      {/* CARD */}

      {product.map(products => (
        <div className="card" style={{ width: "28rem", height: "48rem" }}>
          <img src={products.image} />
          <div className="card-body">
            <h5 className="card-title">{products.title}</h5>
            <h5 className="card-price"><b> Price-{products.price}rs</b></h5>
            <p className="card-text">{products.description}</p>
            <button onClick={() => addCart(products)}>Add to cart</button>
            <button onClick={() => deTail(products)} >Detail</button>
          </div>
        </div>
      ))}


    </>
  )
}
export default Card;
