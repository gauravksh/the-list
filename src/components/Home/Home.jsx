import React from "react";
import "./Home.css";
// import { Header } from '../Header/Header';
// import Modal from 'react-modal'

const Home = () => {
  return (
    <div className="home_div">
      <div className="home_hero">
        <h1 className="home_h11">This is</h1>
        <h1 className="home_h12">
          <span className="mainLine">the</span>
          <span className="mainLine listID">LIST.</span>
        </h1>
      </div>
      <div className="center-con">
        {/* <IoIosArrowDown /> */}
        <a
          class="ca3-scroll-down-link ca3-scroll-down-arrow"
          data-ca3_iconfont="ETmodules"
          data-ca3_icon=""
        ></a>
      </div>
    </div>
  );
};

export default Home;
