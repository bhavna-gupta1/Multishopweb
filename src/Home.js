import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Form from "./Form";
import Card from "./Card";
import Addtocart from "./Addtocart";
import Singleproduct from "./Singleproduct";
function Home(props){
   
const navigate = useNavigate()
function navigates(){
  navigate('/addproduct')
}
function firstpg(){
navigate("/")
}
function login(){
  navigate('/login')
}
function addTocart(){
  navigate('/addTocart')
  
}
function receivedata(data){
  // console.log(data,"datanwww")
   props.getdata(data);
}

    return(
        <>
        {/* NAV BAR */}
    <nav class="navbar navbar-expand-lg bg-body-tertiary">

    <div class="container-fluid">
      <a class="navbar-brand" href="#">Multishop</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Category
            </a>
            <ul class="dropdown-menu">
              
              <li><a class="dropdown-item" href="#">Clothes</a>
              
              </li>
              <li><a class="dropdown-item" href="#">Electronics</a></li>
              <li class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Toys</a></li>
            </ul>
          </li>
          </li>
        
          
          <button onClick={firstpg}>Home</button>
          <button onClick={navigates}>Add product</button>
          <button onClick={login}>Login</button>
          <button onClick={addTocart}><img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" style={{height:"2pc",width:"2pc"}}/></button>
          </ul>
          </div>
    </div>
  </nav>
  {/* CAROUSEL START */}
  <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://img.freepik.com/free-photo/full-length-portrait-cheerful-family_171337-2283.jpg?w=1380&t=st=1685422594~exp=1685423194~hmac=f73a439385fcf65f8b32234a16da50885b734fffb08483ccbc0a50985eeb4518" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://img.freepik.com/premium-photo/parents-their-daughter-are-holding-shopping-bags_85574-7622.jpg?w=1380" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://img.freepik.com/premium-photo/parents-their-daughter-are-holding-shopping-bags_85574-7622.jpg?w=1380" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
{/* <Card id={props.id} setid={props.setid} arr={props.arr} setarr={props.setarr}/> */}
<Card  receiveData={receivedata}  id={props.id} setid={props.setid}/>
</>
    )
}
export default Home;