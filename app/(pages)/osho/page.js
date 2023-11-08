"use client"

import { useState } from 'react'
import React from 'react'



const todo = () => {
  const [show,setShow] = useState(true)
  return (
    <div>
     <h1>conditional rendering </h1>
     {
      show ? <h2>you are Goddamn right</h2>
      : <p>mujh pagal ki bat mano</p>
     }
     <br /><br />
     <button onClick={()=>setShow(!show)} >onClick</button>
    </div>
  )
}

export default todo