import React from 'react';
import HeroBanner from '../components/HeroBanner';
import Trending from './Trending';
import "../styles/home.scss";
import Popular from './Popular';
import TopRated from './TopRated';


const Home = () => {
  return (
    <div className='homepage'>
    <HeroBanner/>
    <Trending/>
    <Popular/>
    <TopRated/>
    </div>
  )
}

export default Home