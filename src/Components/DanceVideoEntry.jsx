import React, { useEffect, useState } from "react";
import Zoom from "react-reveal/Zoom";
import danceVid from "../assets/videos/dancing.mp4";
import "../assets/css/DanceVideoEntry.css";
import { useInView } from "react-intersection-observer";

const DanceVideoEntry = () => {
  const [opacity, setOpacity] = useState(1);
  const [opacityVid, setOpacityVid] = useState(1);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const vh = window.innerHeight;
    const scrollThreshold = 2.6 * vh;

    if (scrollY > scrollThreshold) {
      const opacityValue = 1 - (scrollY - scrollThreshold) / (vh * 0.7);
      setOpacity(opacityValue > 0 ? opacityValue : 0);
    } else {
      setOpacity(1);
    }

    //   const vidScrollThreshold = 1 * vh;

    //   if (scrollY > vidScrollThreshold) {
    //     const vidOpacityValue = 1 - (scrollY - vidScrollThreshold) / (vh * 0.7);
    //     setOpacityVid(vidOpacityValue > 0 ? vidOpacityValue : 0);
    //   } else {
    //     setOpacityVid(1);
    //   }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const [opacitySpan, setOpacitySpan] = useState(0);

  // useEffect(() => {

  //   const handleScroll = () => {
  //     if (window.scrollY > 200) {
  //       setOpacitySpan(0.4);
  //     } else {
  //       setOpacitySpan(0);
  //     }
  //   };

  //   const h1 = document.querySelector("h1").style.opacity = 0.1;
  //   const firstLook = document.getElementsByClassName(".firstLook");
  //   const secondLook = document.querySelector(".secondLook");
  //   const thirdLook = document.querySelector(".thirdLook");
  //   const fourthLook = document.querySelector(".fourthLook");
  //   const fifthLook = document.querySelector(".fifthLook");

  //   let firstTemp = getComputedStyle(firstLook).opacity= 0;
  //   let secondTemp = getComputedStyle(secondLook.opacity) = 0;
  //   let thirdTemp = getComputedStyle(thirdLook).opacity = 0;
  //   let fourthTemp = getComputedStyle(fourthLook).opacity = 0;
  //   let fifthTemp = getComputedStyle(fifthLook).opacity = 0;

  //   if(h1 === 0){
  //       firstTemp = 1
  //       secondTemp = 0.4;
  //       thirdTemp = 0.4;
  //       fourthTemp = 0.4;
  //       fifthTemp = 0.4;

  //   }
  //   if(window.scrollY > 200){
  //       if(firstTemp === 1){
  //         firstLook.style.opacity = 0.4;
  //         secondLook.style.opacity = 1;
  //         thirdLook.style.opacity = 0.4;
  //         fourthLook.style.opacity = 0.4;
  //         fifthLook.style.opacity = 0.4;
  //       }

  //     }

  //   if(firstTemp !== 0.4){

  //   }

  //   if(thirdTemp === 0.4){
  //     firstLook.style.opacity = 0.4;
  //     secondLook.style.opacity = 0.4;
  //     thirdLook.style.opacity = 1;
  //     fourthLook.style.opacity = 0.4;
  //     fifthLook.style.opacity = 0.4;
  //   }

  //   if(fourthTemp === 0.4){
  //     firstLook.style.opacity = 0.4;
  //     secondLook.style.opacity = 0.4;
  //     thirdLook.style.opacity = 0.4;
  //     fourthLook.style.opacity = 1;
  //     fifthLook.style.opacity = 0.4;
  //   }

  //   if(fifthTemp === 0.4){
  //     firstTemp = 0.4;
  //     secondLook.style.opacity = 0.4;
  //     thirdLook.style.opacity = 0.4;
  //     fourthLook.style.opacity = 0.4;
  //     fifthLook.style.opacity = 1;
  //   }

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };

  // }, []);

  const { ref } = useInView({
    threshold: 1,
  });

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
