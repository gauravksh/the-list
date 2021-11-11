import React, { useEffect, useState } from "react";
import { auth } from "../../fire";
import { db } from "../../fire";
import { collection, getDocs } from "firebase/firestore";
import HomeNav from "../HomeNav";
import Movie from "../Movie/Movie";
const Favs = () => {
  const watchedRef = collection(
    db,
    `users/${auth.currentUser.uid}/${auth.currentUser.uid}Favs`
  );
  const [Favcontent, setFavContent] = useState();
  // const [er, setErr] = useState(false);
  const getData = async () => {
    const data = await getDocs(watchedRef);
    setFavContent(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    // if (Favcontent === undefined) {
    //   setErr(true);
    // }
    // if (er === false) {
    //   if (Favcontent[0]) {
    //     setErr(false);
    //   }
    // }

    // console.log(Favcontent.length);
  };

  useEffect(() => {
    getData();
  });

  return (
    <div className="WatchedPage">
      <span className="trendingTitle">Favorites</span>

      {Favcontent &&
        Favcontent.map((c) => (
          <Movie
            key={c.id}
            index={c.id}
            id={c.id}
            mediaType={c.mediaType}
            f={true}
          />
        ))}
      <div className="homenav">
        <HomeNav />
      </div>
    </div>
  );
};

export default Favs;
