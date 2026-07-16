import React from "react";
import { motion } from "motion/react";
export default function WhoWeAre() {
  return (
    <motion.div className="relative top-[50vw]"
    initial={{ x: "-80vw" }}
    whileInView={{ x: "0"  }}
    transition={{ duration:2 }}
    viewport = {{once:false}}
    > <div className="relative left-[10vw] rounded-2xl w-[80vw] h-[30vh] bg-black/50 backdrop-blur-sm  ">

      <h1 className="text-white text-3xl text-center absolute top-[30%] ">Welcome to the best online watch store, where you'll find the highest quality at the lowest prices. Welcome to GoldyTime—where time is <span className="text-yellow-300">gold</span>.</h1>
    </div>
    </motion.div>
  );
}