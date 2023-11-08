
"use client"
import { useState } from 'react'
import React from 'react'

const nav_ds = () => {
const [btnState,setBtnState]=useState(false);
function handleClick(){
  setBtnState(btnState=> !btnState)
}
let toggle = btnState ? ' active' : null;
  return (
    <div>
      <button onClick={handleClick} >button</button>

      
      <p  className={`btn${toggle}`} >let me think first</p>
    </div>
  )
}

export default nav_ds