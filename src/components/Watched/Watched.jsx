import React, { useEffect, useState } from "react";
import { auth } from "../../fire";
import { db } from "../../fire";
import { collection, getDocs } from "firebase/firestore";
import HomeNav from "../HomeNav";
import Movie from "../Movie/Movie";
import "./Watched.css";

const Watched = () => {
  const watchedRef = collection(
    db,
    `users/${auth.currentUser.uid}/${auth.currentUser.uid}Watched`
  );
  const [wcontent, setWContent] = useState();
  // const [er, setErr] = useState(false);
  const getData = async () => {
    const data = await getDocs(watchedRef);
    setWContent(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="WatchedPage">
      <span className="trendingTitle">Finished Watching</span>

      {wcontent &&
        wcontent.map((c) => (
          <Movie
            delId={c.id}
            key={c.id}
            index={c.id}
            id={c.id}
            mediaType={c.mediaType}
            w={true}
          />
        ))}
      <div className="homenav">
        <HomeNav />
      </div>
    </div>
  );
};

export default Watched;
