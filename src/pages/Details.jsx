import React from "react";
import { useParams } from "react-router-dom";
import "../styles/details.scss";
import useFetch from "../Hooks/UseFetch";
import DetailsBanner from "./DetailBanner";
import Similar from "./Similar";
import Recommended from "./Recommended";

const Details = () => {
  const { mediatype, id } = useParams();
  const { data, loading } = useFetch(`/${mediatype}/${id}/videos`);
  // const { data: credits, loading: creditsLoading } = useFetch(
  //   `/${mediatype}/${id}/credits`
  // );

  return (
    <div>
      <DetailsBanner />
      <Similar mediatype={mediatype} id={id} />
      <Recommended  mediatype={mediatype} id={id}/>
    </div>
  );
};

export default Details;
