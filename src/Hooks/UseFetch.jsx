// This is the custom hook to be used in different component;


import React, { useState, useEffect } from "react";
import {fetchDataFromApi}  from "../utils/api";

const UseFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading("loading..."); //when it will be loading other two will ne none;
    setData(null);
    setError(null);

    fetchDataFromApi(url)
      .then((res) => {
        setLoading(false);
        setData(res);
      })
      .catch((err) => {
        setLoading(false);
        setData("Something went Wrong");
      });
  }, [url]);

  return { data, loading, error };
};

export default UseFetch;
