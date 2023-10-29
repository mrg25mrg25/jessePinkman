"use client"

import { useState } from 'react'


const whatever =()=>{

    const [btnState,setBtnState]=useState(false);

    function handleClick(){
      setBtnState(btnState=> !btnState)
    }

    let toggle = btnState ? ' active' : null;
    
    return<>
     <button onClick={handleClick} >button</button> 
      <p  className={`btn${toggle}`} >let me think first</p>
    </>
}

export default whatever;