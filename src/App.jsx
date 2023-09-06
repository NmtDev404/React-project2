import { useState, useEffect } from 'react'
import React from 'react'
import './App.css'
import Home from './Pages/Home'
import Services from './Pages/Services'
import Nav from './Components/Nav';
import Contact from './Pages/Contact';
import About from './Pages/About';
import {BrowserRouter, Route, Routes} from "react-router-dom";
function App() {
  const [show, setShow] = useState(null);

  useEffect(() =>{
    const getdata = async() =>{
      const response = await fetch ('http://localhost:10000');
      const data = await response.json();
      setShow(data);

    }
    getdata()
  },[]);
  console.log(show);

  return (
    <>

    
  <BrowserRouter>

  <div>
<Nav/>
<Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/Services' element={<Services/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='/About' element={<About/>}/>
 </Routes>

{ show?(<div>
  {
    show.map((item, index) =>{
      return(
        <div key={index}>
        {item.name},
        {item.work},
        {item.sub}
        </div>
      )
    })
  }
 </div>):(<h1 className='text 4xl'> Loading </h1>)}
  
</div>
 

  </BrowserRouter>
   
  

   
    </>
  )
}

export default App
