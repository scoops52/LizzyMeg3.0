import React from "react";
import YouTube from "react-youtube";
import ReelStyles from "@/styles/ReelStyles.module.scss";

const Projects = () => {
  const eightBallId = "Rfsxk6morFk";
  const commercialId = "F-s_PBag2ac";
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
            <h2>Maddie Zahm - Eightball Girl</h2>
          </div>
          <div className={ReelStyles.video}>
            <YouTube
              videoId={eightBallId}
              opts={opts}
              className={ReelStyles.reel}
            />
          </div>
          
        </div>
        <div className={ReelStyles.item}>
        <div className={ReelStyles.description}>
            <h2>Shilpa Shetty Fitness App x Dil Mil </h2>
          </div>
          <div className={ReelStyles.video}>
            <YouTube
              videoId={commercialId}
              opts={opts}
              className={ReelStyles.reel}
            />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Projects;
