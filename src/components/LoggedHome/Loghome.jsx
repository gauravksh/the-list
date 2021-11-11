import React, { useState, useEffect } from "react";

import "./Loghome.css";
import HomeNav from "../HomeNav";
import Movie from "../Movie/Movie";
import axios from "axios";
import CusPagination from "../CusPagination/CusPagination";
import { useParams } from "react-router-dom";

const Loghome = () => {
  const [page, setPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState();
  const [content, setContent] = useState([]);
  const { id } = useParams;

  const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_TMDB_KEY}&page=${page}`;
  const fetchTrending = async () => {
    await axios.get(url).then((response) => {
      // console.log(response);
      setContent(response.data.results);
      // console.log(content);
      setNumOfPages(response.data.total_pages);
    });
  };

  useEffect(() => {
    // window.scroll(0, 0);
    fetchTrending();
    // eslint-disable-next-line
  }, [page]);
  return (
    <div className="trendBound">
      <div className="trending">
        <span className="trendingTitle">Trending Today</span>
        {/* {console.log(content)} */}
        {content &&
          content.map((c) => (
            <Movie
              key={c.id}
              index={c.id}
              id={c.id}
              mediaType={c.media_type}
              l={true}
            />
          ))}
        <div className="Pagination">
          <CusPagination setPage={setPage} numOfPages={numOfPages} />
        </div>
        <div className="homenav">
          <HomeNav />
        </div>
      </div>
    </div>
  );
};

export default Loghome;
