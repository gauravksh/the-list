import { React, useState, useEffect } from "react";
import "./Movie.css";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { img_300 } from "../../config/config";
import { unavailable } from "../../config/config";
import { unavailableLandscape } from "../../config/config";
import axios from "axios";
import PlaylistAddCheckRoundedIcon from "@material-ui/icons/PlaylistAddCheckRounded";
import PlaylistAddRoundedIcon from "@material-ui/icons/PlaylistAddRounded";
import Gallery from "../Carousel/Carousel";
import { auth } from "../../fire";
import { db } from "../../fire";
import { collection, doc, setDoc, deleteDoc } from "firebase/firestore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { IconButton } from "@mui/material";

const Movie = ({ delID, index, id, mediaType, w, f, l, p, k }) => {
  // console.log(id, mediaType);
  const [content, setContent] = useState([]);
  const [isClick, setClick] = useState(false);
  const [show, setShow] = useState(true);
  // const [add, setAdd] = useState(false);
  if (mediaType === "movie") {
    mediaType = 0;
  } else if (mediaType === "tv") {
    mediaType = 1;
  }
  // setDelID(id);
  const url = `https://api.themoviedb.org/3/${
    mediaType ? "tv" : "movie"
  }/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`;
  const fetchData = async () => {
    const { data } = await axios.get(url);

    setContent(data);
    // console.log(data.poster_path);
  }; //
  // };

  const addToWatched = async (id, mediaType) => {
    // preventDefault();
    const colRef = collection(
      db,
      `users/${auth.currentUser.uid}/${auth.currentUser.uid}Watched`
    );
    await setDoc(
      doc(colRef, `${id}`),
      {
        id,
        mediaType,
      },
      { merge: true }
    );
  };
  // const delId = 1;
  const addToPlan = async (id, mediaType) => {
    // preventDefault();
    const colRef = collection(
      db,
      `users/${auth.currentUser.uid}/${auth.currentUser.uid}Plan`
    );
    await setDoc(
      doc(colRef, `${id}`),
      {
        id,
        mediaType,
      },
      { merge: true }
    );
  };
  const addToFavs = async (id, mediaType) => {
    // preventDefault();
    const colRef = collection(
      db,
      `users/${auth.currentUser.uid}/${auth.currentUser.uid}Favs`
    );
    await setDoc(
      doc(colRef, `${id}`),
      {
        id,
        mediaType,
      },
      { merge: true }
    );
  };
  const removeFrom = async (delID, w, p, f, k) => {
    if (w) {
      await deleteDoc(
        doc(
          db,
          `users/${auth.currentUser.uid}/${auth.currentUser.uid}Watched`,
          `${id}`
        )
      );
      setShow(false);

      // console.log(`delID=${delID}`, w, p, f);
    } else if (p) {
      await deleteDoc(
        doc(
          db,
          `users/${auth.currentUser.uid}/${auth.currentUser.uid}Plan`,
          `${id}`
        )
      );
      setShow(false);

      // console.log(`delID=${delID}`, w, p, f);
    } else if (k) {
      await deleteDoc(
        doc(
          db,
          `users/${auth.currentUser.uid}/${auth.currentUser.uid}Favs`,
          `${id}`
        )
      );
      // console.log(`delID=${delID}`, w, p, f);
    } else {
      await deleteDoc(
        doc(
          db,
          `users/${auth.currentUser.uid}/${auth.currentUser.uid}Favs`,
          `${id}`
        )
      );
      setShow(false);
    }
    // window.location.reload(false);
  };
  useEffect(() => {
    fetchData();
    // setDelID(id);
  }, [id]);
  return (
    <>
      <div className={show ? "movies" : "hideButton"}>
        <img
          src={
            content.poster_path
              ? `${img_300}${content.poster_path}`
              : unavailable
          }
          alt={content.name || content.title}
          className="Content_portrait"
        />
        <img
          src={
            content.backdrop_path
              ? `${img_300}${content.backdrop_path}`
              : unavailableLandscape
          }
          alt={content.name || content.title}
          className="Content_landscape"
        />

        <div className="Content_about">
          <span className="Content_title">
            {content.name || content.title} (
            {(
              content.first_air_date ||
              content.release_date ||
              "-----"
            ).substring(0, 4)}
            )
          </span>
          {content.tagline && <i className="tagline">{content.tagline}</i>}
          <span className="Content_description">{content.overview}</span>
          <span className="release">
            {content.release_date
              ? `Release Date : ${content.release_date}`
              : `First Air Date : ${content.first_air_date}`}
          </span>
          <Gallery id={id} media_type={mediaType} />
          <div className="wrapper">
            <button
              className={w || (p && !l) ? "hideButton" : "icon addToWatched"}
              onClick={() => {
                addToWatched((id = id), (mediaType = mediaType));
                // setAdd = true;
              }}
            >
              <div class="tooltip">✔</div>
              <PlaylistAddCheckRoundedIcon />
            </button>
            <button
              className={p ? "icon addToWatched" : "hideButton"}
              onClick={() => {
                addToWatched((id = id), (mediaType = mediaType));
                removeFrom((delID = id), (w = false), (p = p), (f = false));
              }}
            >
              <div class="tooltip">✔</div>
              <PlaylistAddCheckRoundedIcon />
            </button>
            <button
              className={f || l ? "icon addToWatched  " : "hideButton"}
              onClick={() => {
                addToPlan((id = id), (mediaType = mediaType));
                // p = true;
              }}
            >
              <div class="tooltip">✔</div>
              <PlaylistAddRoundedIcon />
            </button>

            <button
              className={f && !l ? "hideButton" : "favBTN"}
              onClick={() => {
                {
                  isClick
                    ? removeFrom(
                        (delID = id),
                        (w = false),
                        (p = false),
                        (f = f),
                        (k = true)
                      )
                    : addToFavs((id = id), (mediaType = mediaType));
                  setClick(!isClick);
                }
              }}
            >
              <IconButton>
                <FavoriteIcon className={isClick ? "red" : "normal"} />
              </IconButton>
            </button>

            <button
              className={w ? "" : "hideButton"}
              onClick={() => {
                removeFrom((delID = id), (w = w), (p = false), (f = false));
              }}
            >
              <DeleteOutlineIcon />
            </button>
            <button
              className={p ? "" : "hideButton"}
              onClick={() => {
                removeFrom((delID = id), (w = false), (p = p), (f = false));
              }}
            >
              <DeleteOutlineIcon />
            </button>
            <button
              className={f ? "" : "hideButton"}
              style={{ color: "white" }}
              onClick={() => {
                removeFrom((delID = id), (w = false), (p = false), (f = f));
              }}
            >
              <DeleteOutlineIcon />
            </button>
          </div>
        </div>
        <div className="img-footer">
          <h3>{content.title || content.name}</h3>
          <span
            className={`${
              content.vote_average <= 6
                ? "red"
                : content.vote_average <= 8
                ? "orange"
                : "green"
            }`}
          >
            {content.vote_average}
          </span>
        </div>
      </div>
    </>
  );
};

export default Movie;
