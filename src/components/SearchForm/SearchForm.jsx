import {
  Button,
  createTheme,
  Tab,
  Tabs,
  TextField,
  ThemeProvider,
} from "@material-ui/core";
import "./SearchForm.css";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import { useEffect, useState } from "react";
import axios from "axios";
import CusPagination from "../CusPagination/CusPagination";
import Movie from "../Movie/Movie";
import HomeNav from "../HomeNav";
// import { useParams } from "react-router-dom";

const SearchForm = () => {
  const [type, setType] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  // const { id } = useParams;

  const darkTheme = createTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#fff",
      },
    },
  });

  const fetchSearch = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${
          process.env.REACT_APP_TMDB_KEY
        }&language=en-US&query=${searchText}&page=${page}&include_adult=false`
      );
      setContent(data.results);
      setNumOfPages(data.total_pages);
      // console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchSearch();
    // eslint-disable-next-line
  }, [type, page]);

  return (
    <>
      <div className="SearchPage">
        <ThemeProvider theme={darkTheme}>
          <div className="search">
            <TextField
              style={{ flex: 1 }}
              className="searchBox"
              label="Search"
              variant="filled"
              onChange={(e) => setSearchText(e.target.value)}
            />
            <Button
              onClick={fetchSearch}
              variant="contained"
              style={{ marginLeft: 10 }}
            >
              <SearchRoundedIcon fontSize="large" />
            </Button>
          </div>
          <div className="tabs">
            <Tabs
              value={type}
              indicatorColor="primary"
              textColor="primary"
              onChange={(event, newValue) => {
                setType(newValue);
                setPage(1);
              }}
              centered
              style={{ paddingBottom: 5 }}
              aria-label="disabled tabs example"
            >
              <Tab style={{ width: "50%" }} label="Search Movie" />
              <Tab style={{ width: "50%" }} label="Search Series" />
            </Tabs>
          </div>
        </ThemeProvider>
        <div className="trending">
          {content &&
            content.map((c) => (
              <Movie
                key={c.id}
                index={c.id}
                id={c.id}
                poster={c.poster_path}
                title={c.title || c.name}
                rating={c.vote_average}
                mediaType={type}
                l={true}
              />
            ))}
          {searchText &&
            !content &&
            (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)}
        </div>
        {numOfPages > 1 && (
          <CusPagination setPage={setPage} numOfPages={numOfPages} />
        )}
        <div className="homenav">
          <HomeNav />
        </div>
      </div>
    </>
  );
};

export default SearchForm;
