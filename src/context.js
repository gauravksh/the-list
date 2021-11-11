import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const BASE_URL = "https://api.themoviedb.org/3";
const API = "api_key=01539e3343f779187896ca74e1d78e6c";

const SEARCH_URL = BASE_URL + "/search/movie?" + API + "&query=";
const BASE_IMGURL = "https://image.tmdb.org/t/p/w500";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("iron man");
  const [movies, setMovies] = useState([]);
  // console.log(movies);
  // let x = encodeURIComponent(searchTerm);

  // console.log(SEARCH_URL / +searchTerm);
  const fetchMovies = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${SEARCH_URL}+${escape(searchTerm)}`);
      const data = await response.json();
      // console.log(data.results);

      if (data.results) {
        const newMovies = data.results.map((item) => {
          const {
            poster_path,
            // genre_ids,
            id,
            original_title,
            // overview,
            // release_date,
            // runtime,
            vote_average,
          } = item;
          if (poster_path) {
            return {
              id: id,
              title: original_title,
              image: BASE_IMGURL + poster_path,
              // genre_ids: genre_ids,
              // plot: overview,
              // release_date: release_date,
              // runtime: runtime,
              rating: vote_average,
            };
          }
          return "";
        });
        setMovies(newMovies);
      } else {
        setMovies([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchMovies();
  }, [searchTerm, fetchMovies]);
  // fetchDrinks()
  return (
    <AppContext.Provider value={{ loading, searchTerm, setSearchTerm, movies }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
