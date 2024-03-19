import React from "react";
import YouTube from "react-youtube";
import ReelStyles from "@/styles/ReelStyles.module.scss";

const Reels = () => {
  const danceReel = "LTaSZgVgc5Q";
  const choreReel = "0ZLWms4-7wU";
  const opts = {
    playerVars: {
      autoplay: 0,
    },
    width: "100%",
    height: "100%",
  };

  return (
    <div className={ReelStyles.container}>
      <h1 className={ReelStyles.title}>Projects</h1>
      <div className={ReelStyles.videosContainer}>
        <div className={ReelStyles.item}>
        <div className={ReelStyles.description}>
            <h2>Dance Reel</h2>
          </div>
          <div className={ReelStyles.video}>
            <YouTube
              videoId={danceReel}
              opts={opts}
              className={ReelStyles.reel}
            />
          </div>
          
        </div>
        <div className={ReelStyles.item}>
        <div className={ReelStyles.description}>
            <h2>Choreography Reel</h2>
          </div>
          <div className={ReelStyles.video}>
            <YouTube
              videoId={choreReel}
              opts={opts}
              className={ReelStyles.reel}
            />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Reels;
