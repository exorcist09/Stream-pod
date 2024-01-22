import React from 'react'
import { useNavigate } from 'react-router-dom';

const Floatbutton = () => {
    const navigate = useNavigate();

  return (
    <div className='floatbutton' onClick={()=>navigate("/explore/live")}>&#128293;</div>
  )
}

export default Floatbutton