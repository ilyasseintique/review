import React from 'react'

export default function card({title,description}) {
  return (
      <div className="h-[10vh] w-[10vw] bg-gris-400 rounded-lg" >
        <h3>{title}</h3>
        <p className="flex justify-center items-center">{description}</p>
      </div>
  )
}
