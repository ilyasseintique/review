import React from 'react'
import Nav from "./Components/navy"
import Home from "./Components/Home"
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
