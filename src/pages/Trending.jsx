import React, { useState } from "react";
import Carousel from "../components/Carousel";
import Contentwrapper from "../components/Contentwrapper";
import Switchtabs from "../components/Switchtabs";
import UseFetch from "../Hooks/UseFetch";

const Trending = () => {
  const [endpoint, setEndPoint] = useState("day");

  const { data, loading } = UseFetch(`/trending/movie/${endpoint}`);

  const onTabChange = (tab) => {
    setEndPoint(tab === "Day" ? "day" : "week")
  };

  return (
    <div className="carouselSection">
      <Contentwrapper>
        <span className="carouselTitle">Trending</span>
        <Switchtabs data={["Day", "Week"]} onTabChange={onTabChange} />
      </Contentwrapper>
      <Carousel data={data?.results} loading={loading} />
    </div>
  );
};

export default Trending;
