import React from "react"
import { useState,useEffect } from "react"
import photo1 from "../assets/carousel/Photo1_pepsi.png"
import photo2 from "../assets/carousel/Photo2_hulk.png"
import photo3 from "../assets/carousel/Photo3.png"
import photo4 from "../assets/carousel/photo4.png"
import photo5 from "../assets/carousel/photo5.png"
import photo6 from "../assets/carousel/photo6.png"
import firstbg from "../assets/bg1.jpg"
import secondbg from "../assets/bg2.jpg"
import gif3 from "../assets/gif3.mp4"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft , faAngleRight} from '@fortawesome/free-solid-svg-icons'
import { Parallax,ParallaxLayer } from "@react-spring/parallax"
import WhoWeAre from "./whoWeAre.jsx"
import {motion} from "motion/react"
const images = [photo1,photo2,photo3,photo4,photo5,photo6]
export default function Home(){
    useEffect(()=>{
        const Int = setInterval(()=>{
            setCurrentindex((prev)=> prev === images.length-1 ? 0 : prev+1 )
        },3000)
        return ()=> clearInterval(Int)
    },[])
    const [currentIndex,setCurrentindex] = useState(0)
    const nextIndex = () => {setCurrentindex((prevind)=>prevind === images.length-1 ? 0 : prevind + 1)}
    const prevIndex = () => {setCurrentindex((prevind)=>prevind === 0 ? images.length-1 : prevind - 1)}
    
    return(
    <>
            <Parallax pages={4} className="bg-black" >
                <ParallaxLayer offset={0} >
                    <section className="relative h-[100vh] w-[100vw]" >
                        <button onClick={prevIndex} className="bg-gray-400 rounded-xl hover:bg-gray-200  hover:scale-110 ease-in-out transition-all absolute left-10 top-[50%] h-20 -translate-y-[50%]">
                            <FontAwesomeIcon icon={faAngleLeft} />
                        </button>
                        <button onClick={nextIndex} className="bg-gray-400 rounded-xl hover:bg-gray-200  hover:scale-110 ease-in-out transition-all absolute right-10 top-[50%] h-20 -translate-y-[50%]">
                            <FontAwesomeIcon icon={faAngleRight} />
                        </button>
                        <motion.button animate={{opacity:[1,0.2,0.6]}} while transition={{duration:1,repeat:Infinity}} className="hover:scale-115 hover:cursor-pointer absolute left-[50%] top-[4%] -translate-x-1/2 rounded-md bg-black/20 backdrop-blur-sm w-[310px] text-3xl text-white "><b>Shop Now</b></motion.button>
                        <img className="h-[100%] w-[100%]" src={images[currentIndex]} alt="watches_imgs" />
                    </section>
                </ParallaxLayer>
    <ParallaxLayer offset={0.999} factor={2} speed={0.2} className="relative">
    <video
      className="absolute w-full"
      autoPlay
      loop
      muted
      playsInline
      src={gif3}
    />
      <WhoWeAre />
</ParallaxLayer>
            <ParallaxLayer offset={1} speed={0.8} >
                <h1 className="text-white text-3xl text-center underline mt-5"> <b>Welcome To GoldyTime !</b> </h1>
            </ParallaxLayer>
            <ParallaxLayer offset={3} speed={1}  style={{backgroundImage:`url(${secondbg})`, backgroundSize:"cover", backgroundPosition:"center"}}></ParallaxLayer>
                <h1 className="text-white text-3xl text-center absolute top-[30%]"></h1>
            </Parallax>  
    </> 
        )
}