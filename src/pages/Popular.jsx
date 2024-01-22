import React, { useState } from "react";
import Carousel from "../components/Carousel";
import Contentwrapper from "../components/Contentwrapper";
import Switchtabs from "../components/Switchtabs";
import UseFetch from "../Hooks/UseFetch";

const Popular = () => {
  const [endpoint, setEndPoint] = useState("movie");

  const { data, loading } = UseFetch(`/${endpoint}/popular`);

  const onTabChange = (tab) => {
    setEndPoint(tab === "Movies" ? "movie" : "tv")
  };

  return (
    <div className="carouselSection">
      <Contentwrapper>
        <span className="carouselTitle">Popular</span>
        <Switchtabs data={["Movies", "Tv Show"]} onTabChange={onTabChange} />
      </Contentwrapper>
      <Carousel data={data?.results} loading={loading} 
      endpoint={endpoint}/>
    </div>
  );
};

export default Popular;
