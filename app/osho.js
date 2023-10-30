"use client"
import React from 'react'
import { useState } from 'react'
const osho = () => {
    const [show,setShow]=useState(false)
  return (
    <div>
      {
        show ?  <div>come</div> : null
      }
         <button onClick={()=>setShow(!show)} >button</button>
    </div>
  )
}

export default osho