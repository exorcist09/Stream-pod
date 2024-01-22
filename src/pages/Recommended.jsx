import React from "react";

import Carousel from "../components/Carousel";
import useFetch from "../Hooks/UseFetch";

const Recommendation = ({ mediatype, id }) => {
    const { data, loading, error } = useFetch(
        `/${mediatype}/${id}/recommendations`
    );

    return (
        <Carousel
            title="Highly Recommended"
            data={data?.results}
            loading={loading}
            endpoint={mediatype}
        />
    );
};

export default Recommendation;