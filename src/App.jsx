import React from 'react'
import Nav from "./navy"
import Home from "./Home"
import {BrowserRouter,Routes,Route} from "react-router-dom"
function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      {/* <Route path="*" element={<NotFound/>}/> */}
    </Routes>
  </BrowserRouter>
  )}
    
export default App
