import React, { useEffect, useState } from "react";
import Zoom from "react-reveal/Zoom";
import danceVid from "../assets/videos/dancing.mp4";
import "../assets/css/DanceVideoEntry.css";
import { useInView } from "react-intersection-observer";

const DanceVideoEntry = () => {
  return (
    <>
      <h1 className="gizli"></h1>
      <section className="dance-section">
        <div class="section__content">
          <h2 className="daceh2header">
            Adaptive Audio.
            <br />
            Now Playing.
          </h2>
        </div>
      </section>
      <section  className="dance-section">
        <video 
          className="danceVideo"
          src={danceVid}
          autoPlay
          playsinline
          muted
          loop
        ></video>
        <div class="section__content">
          <p className="dance-par" data-splitting>
            <span>Up to 2x more Active Noise Cancellation.</span>
            <span>&nbsp;Transparency mode to hear the world around you</span>
            <span>
              &nbsp;All-new Adaptive Audio intelligently tailors noise control
              to your environment
            </span>
            <span>
              &nbsp;Spatial Audio takes immersion to a remarkably personal
              level.
            </span>
            <span>
              &nbsp;And a single charge delivers 6 hours of battery life.
            </span>
          </p>
        </div>
      </section>
    </>
  );
};

export default DanceVideoEntry;
