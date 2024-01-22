import React from 'react';
import "../styles/contentwrapper.scss";


// gives the side-space around the movie poster on full-website 
const Contentwrapper = ({children}) => {
  return (
    <div className="contentWrapper">{children}</div>
  )
}

export default Contentwrapper