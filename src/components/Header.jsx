import React, { useContext } from 'react';
import "../Styles/Header.css";
import {Link} from "react-router-dom";
import { Appstate } from '../App';

const Header = () => {
  const useAppstate =useContext(Appstate);
  return (
    <div className="header">
      <div className="title">
      <h3><Link to="/">Filmyverse</Link></h3>
      </div>
      <div className="right">
        
      {useAppstate.login?
      <div className="add">
      <h3>
      <Link to="/add" style={{color:"white", textDecoration:"none"}}>Add Item</Link></h3>
      </div>
       :
      <div className="login">
      <h3><Link to="/login" style={{color:"white", textDecoration:"none"}}>Login</Link></h3>
      </div>
}
      </div>
    </div>
  )
}

export default Header