import React, { useEffect, useState } from "react";
import "../styles/search.scss";
import InfiniteScroll from "react-infinite-scroll-component";

import { useParams } from "react-router-dom";
import {fetchDataFromApi} from "../utils/api";
import Contentwrapper from "../components/Contentwrapper";
import MovieCard from "../components/MovieCard";
// import Spinner from "../components/Spinner.jsx";
import { Audio } from "react-loader-spinner";
import noResults from "../assets/no-results.png";
import Img from "../components/Img";

const SearchResult = () => {
  const [data, setData] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);
  const { query } = useParams();

  const fetchInitialData = () => {
      setLoading(true);
      fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then(
          (res) => {
              setData(res);
              setPageNum((prev) => prev + 1);
              setLoading(false);
          }
      );
  };

  const fetchNextPageData = () => {
      fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then(
          (res) => {
              if (data?.results) {
                  setData({
                      ...data,
                      results: [...data?.results, ...res.results],
                  });
              } else {
                  setData(res);
              }
              setPageNum((prev) => prev + 1);
          }
      );
  };

  useEffect(() => {
      setPageNum(1);
      fetchInitialData();
  }, [query]);


  return (
    <div className="searchResultsPage">
      <div
        className="loading"
        style={{
          marginTop: "10%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {loading && <Audio height="80" width="80" radius="9" color="white" />}
      </div>
      {!loading && (
        <Contentwrapper>
          {data?.results?.length > 0 ? (
            <>
              <div className="PageTitle">{`Search ${
                data?.total_results > 1 ? "results" : "result"
              } of "${query}"`}</div>
              <InfiniteScroll
                className="content"
                dataLength={data?.results.length || []}
                next={fetchNextPageData}
                hasMore={pageNum <= data?.total_pages}
                loader={<Audio  />}
              >
                {data?.results.map((item, index) => {
                  if (item.media_type === "person") return;
                  return (
                    <MovieCard key={index} data={item} fromSearch={true} />
                  );
                })}
              </InfiniteScroll>
            </>
          ) : (
            <span className="resultNotFound">
              <Img src={noResults}/>
              <p>Sorry, No Results Were found</p>
            </span>
          )}
        </Contentwrapper>
      )}
    </div>
  );
};

export default SearchResult;
