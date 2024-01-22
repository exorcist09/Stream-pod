
import React from "react";

import Carousel from "../components/Carousel";
import useFetch from "../Hooks/UseFetch";

const Similar = ({ mediatype, id }) => {
    const { data, loading, error } = useFetch(`/${mediatype}/${id}/similar`);

    const title = mediatype === "tv" ? "Similar TV Shows" : "Similar Movies";

    return (
        <Carousel
            title="You may also Like"
            data={data?.results}
            loading={loading}
            endpoint={mediatype}
        />
    );
};

export default Similar;