import React, { useEffect, useState } from 'react';
import "../Styles/Card.css";
import Reactstars from 'react-stars'
import { TailSpin } from 'react-loader-spinner';
import { getDocs } from 'firebase/firestore';
import { moviesRef } from '../firebase/firebase';

const Card = () => {
  const[data,setData]=useState([]);
  const [loading,setLoading] =useState(false);

   useEffect(()=>{
    async function getData(){
      setLoading(true);
      const _data= await getDocs(moviesRef);
      _data.forEach((doc)=>{
        setData((prv)=>[...prv,doc.data()])
      });
      setLoading(false);
    }
    getData();
   },[])


  return (
    <>
    { loading ?<div className="flex justify-center items-center min-h-screen"><TailSpin/></div>
    :data.map((e,i)=>{
      return(
    <div className='card'>
      <div className="img">
        <img src= {e.image}/>
      </div>
      <div className="text">
        <h3>Name: {e.name}</h3>
        <h3>Year: {e.year}</h3>
        <h3>
        <Reactstars size={20} half={true} edit={false}
        value={5}/></h3>
      </div>
    </div>
      
    )})
    }
      
    </>
  )
}

export default Card