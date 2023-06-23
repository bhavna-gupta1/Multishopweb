import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Card from './Card';
import Home from './Home';
import Form from './Form';
import Login from './Login';
import Addtocart from './Addtocart';
import Singleproduct from './Singleproduct';
import { createContext, useState } from 'react';

export const userContext = createContext();
function App() {
const[id,setid] = useState(null);
// const[arr,setarr]=useState([]);
const[data,setdata] = useState([]);
function getdata(value){
  // console.log(value,"valueeee")
  setdata(value);
}
//  console.log(data,"dataaaaa")

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home id={id} setid={setid} getdata={getdata}/>}/>
          <Route exact path="/addproduct" element={<Form />}/>
           <Route exact path ='/login' element={<Login/>} />
           <Route exact path='/addTocart'  element={
        <userContext.Provider value={data} >
           
           <Addtocart />
      </userContext.Provider>
           } />
           <Route exact path='/detail' element={<Singleproduct id={id} setid={setid}/>}/>
        </Routes>
      </BrowserRouter>


    </>
  );
}


export default App;
