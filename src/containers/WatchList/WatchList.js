import React, { useEffect, useContext } from "react";
import "./WatchList.scss";
import TopBar from "../../components/WatchListComponents/TopBar/TopBar";
import Main from "../../components/WatchListComponents/Main/Main";
import { MainContext } from "../../context/MainContext/mainContext";
import { SEND_FILMS } from "../../context/types";
import Loader from "react-loader-spinner";

const WatchList = () => {
  const { getMessages, filmsList, loading } = useContext(MainContext);
  useEffect(() => {
    getMessages("films", SEND_FILMS);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="wraper">
      {loading ? (
        <div className="loader">
          <Loader
            type="BallTriangle"
            color="#ffffff"
            height={100}
            width={100}
          />
        </div>
      ) : (
        <div className="WatchList">
          <TopBar />
          {filmsList && <Main />}
        </div>
      )}
    </div>
  );
};

export default WatchList;
