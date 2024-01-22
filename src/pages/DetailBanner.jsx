import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
// import dayjs from "dayjs";

import "../styles/detailbanner.scss";

import ContentWrapper from "../components/Contentwrapper";
import useFetch from "../Hooks/UseFetch";
import Rating from "../components/Rating";
import Img from "../components/Img";
import PosterFallback from "../assets/no-poster.png";
import Playbutton from "../components/Playbutton";

const DetailsBanner = ({ video, crew }) => {
  const { mediatype, id } = useParams();
  const { data, loading } = useFetch(`/${mediatype}/${id}`);
  const { url } = useSelector((state) => state.home);

  // const director = crew.filter((f) => f.job === "Director");
  // const writer = crew.filter(
  //   (f) => f.job === "Screenplay" || f.job === "Story" || f.job === "Writer"
  // );

  // movie kitne time ki hai uska func. hai ye
  const toHoursAndMinutes = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
  };

  return (
    <div className="detailsBanner">
      {!loading ? (
        <>
          {!!data && (
            <React.Fragment>
              <div className="backdrop-img">
                <Img src={url.backdrop + data.backdrop_path} />
              </div>
              <div className="opacity-layer"></div>
              <ContentWrapper>
                <div className="content">
                  <div className="left">
                    {data.poster_path ? (
                      <Img
                        className="posterImg"
                        src={url.backdrop + data.poster_path}
                      />
                    ) : (
                      <Img className="posterImg" src={PosterFallback} />
                    )}
                  </div>
                  <div className="right">
                    <div className="title">{data.title}</div>
                    <div className="subtitle">{data.tagline}</div>
                    <div className="row">
                      <Rating rating={data.vote_average.toFixed(1)} />
                      <div className="playbtn" onClick={() => {}}>
                        <Playbutton />
                        <span className="text">Watch Trailer</span>
                      </div>
                    </div>
                    <div className="overview">
                      <div className="heading">Overview</div>
                      <div className="description">{data.overview}</div>
                    </div>
                    <div className="info">
                      {data.status && (
                        <div className="infoItem">
                          <span className="text bold">Status: </span>
                          <span className="text">{data.status}</span>
                        </div>
                      )}
                      {data.release_date && (
                        <div className="infoItem">
                          <span className="text bold">Release: </span>
                          <span className="text">{data.release_date}</span>
                        </div>
                      )}
                      {data.runtime && (
                        <div className="infoItem">
                          <span className="text bold">Time: </span>
                          <span className="text">
                            {toHoursAndMinutes(data.runtime)}
                          </span>
                        </div>
                      )}
                    </div>
                    {/* {director.length >0 &&(
                      <div className="info">
                        <span className="text bold">Director:{" "}</span>
                        <span className="text">
                          {director.map((d,i)=>(
                            <span key={i}>
                              {d.name}
                            </span>
                          ))}
                        </span>
                      </div> 
                    )}
                    */}
                  </div>
                </div>
              </ContentWrapper>
            </React.Fragment>
          )}
        </>
      ) : (
        <div className="detailsBannerSkeleton">
          <ContentWrapper>
            <div className="left skeleton"></div>
            <div className="right">
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
            </div>
          </ContentWrapper>
        </div>
      )}
    </div>
  );
};

export default DetailsBanner;
