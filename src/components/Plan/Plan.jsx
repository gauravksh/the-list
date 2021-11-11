import React, { useEffect, useState } from "react";
import { auth } from "../../fire";
import { db } from "../../fire";
import { collection, getDocs } from "firebase/firestore";
import HomeNav from "../HomeNav";
import Movie from "../Movie/Movie";
const Plan = () => {
  const watchedRef = collection(
    db,
    `users/${auth.currentUser.uid}/${auth.currentUser.uid}Plan`
  );
  const [Pcontent, setPContent] = useState();
  // const [er, setErr] = useState(false);
  const getData = async () => {
    const data = await getDocs(watchedRef);
    setPContent(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    //   if (Pcontent === undefined) {
    //     setErr(true);
    //   }
    //   if (er === false) {
    //     if (Pcontent[0]) {
    //       setErr(false);
    //     }
    //   }

    //   // console.log(Pcontent.length);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="WatchedPage">
      <span className="trendingTitle">Plan to watch</span>
      {/* <span className={!er ? "invisible" : "nothing"}>
        Nothing to show here
      </span> */}
      {Pcontent &&
        Pcontent.map((c) => (
          <Movie
            key={c.id}
            index={c.id}
            id={c.id}
            mediaType={c.mediaType}
            p={true}
          />
        ))}
      <div className="homenav">
        <HomeNav />
      </div>
    </div>
  );
};

export default Plan;
