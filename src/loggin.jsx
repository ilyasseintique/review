import React from 'react'

export default function loggin(){
    return(
        <>
            <div className="w-[60vw] color-pink-400 h-[80vh] rounded-xl">   
                <form action="port">
                    <input type="email" placeholder='type your email'/>
                    <input type="passeword" placeholder='type your passeword' />
                </form>

            </div>
        </>
    )
}