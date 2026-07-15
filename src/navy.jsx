import React from "react"
import watch_dial from "./assets/Gemini_Generated_Image_jev2njjev2njjev2.png"
import {Link} from "react-router-dom"

export default function Navbar(){
    return(
    <>
        <div className=" relative w-[100vw] h-15 bg-linear-to-l bg-black flex justify-center items-center gap-30 ">
        <img className="hover:rotate-350 ease-in-out transition-all absolute left-10 rounded-full h-10 " src={watch_dial} alt="watch_dial"/>
            <Link to="/home"><h3 className="text-xl text-white hover:underline ease-in-out hover:shadow-lg transition-all hover:scale-110">Home</h3></Link>
            <h3 className="text-xl text-white hover:underline ease-in-out hover:shadow-lg transition-all hover:scale-110">Products</h3>
            <h3 className="text-xl text-white hover:underline ease-in-out hover:shadow-lg transition-all hover:scale-110">About</h3>
        </div>
    </>)
}