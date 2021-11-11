import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import PlaylistAddCheckRoundedIcon from "@material-ui/icons/PlaylistAddCheckRounded";
import PlaylistAddRoundedIcon from "@material-ui/icons/PlaylistAddRounded";
import FavoriteBorderRoundedIcon from "@material-ui/icons/FavoriteBorderRounded";
import { useNavigate } from "react-router-dom";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";

const useStyles = makeStyles({
  root: {
    width: "100% ",
    position: "fixed",
    bottom: "0",
    color: "white",
    backgroundColor: "#282c34",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    zIndex: 100,
    // textOrientation: "vertical",
  },
});
const HomeNav = () => {
  const [value, setValue] = useState();
  const classes = useStyles();
  const navigate = useNavigate();

  useEffect(() => {
    if (value === 0) {
      navigate("/watched");
    } else if (value === 1) {
      navigate("/Plan");
    } else if (value === 2) {
      navigate("/Favs");
    } else if (value === 3) {
      navigate("/search");
    }
  }, [value, navigate]);

  return (
    <div className="bottomNav">
      <BottomNavigation
        showLabels
        value={value}
        className={classes.root}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Watched"
          style={{ color: "black" }}
          icon={<PlaylistAddCheckRoundedIcon />}
        />
        <BottomNavigationAction
          label="Plan to Watch"
          style={{ color: "black" }}
          icon={<PlaylistAddRoundedIcon />}
        />
        <BottomNavigationAction
          label="Favorites"
          style={{ color: "black" }}
          icon={<FavoriteBorderRoundedIcon />}
        />
        <BottomNavigationAction
          label="Search"
          style={{ color: "black" }}
          icon={<SearchRoundedIcon />}
        />
      </BottomNavigation>
    </div>
  );
};

export default HomeNav;
