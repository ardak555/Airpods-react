import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/DanceVideo.css";
import Zoom from "react-reveal/Zoom";
import danceVid from "../assets/videos/dancing.mp4";
import { Animator, ScrollContainer, ScrollPage } from "react-scroll-motion";

const DanceVideo = () => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;

      // Belirli bir scroll pozisyonu belirlemek için burada istediğiniz değeri kullanabilirsiniz.
      const scrollThreshold = 2.1 * vh; // Örneğin, 80vh'de kaybolacaksa

      // Scroll pozisyonu scrollThreshold'dan büyükse opacity'yi azalt
      if (scrollY > scrollThreshold) {
        const opacityValue = 1 - (scrollY - scrollThreshold) / (vh * 0.7);
        setOpacity(opacityValue > 0 ? opacityValue : 0);
      } else {
        setOpacity(1); // Eğer scroll pozisyonu threshold'dan küçükse opacity'yi sıfırla
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [opacityVid, setOpacityVid] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;

      // Belirli bir scroll pozisyonu belirlemek için burada istediğiniz değeri kullanabilirsiniz.
      const scrollThreshold = 1.5 * vh; // Örneğin, 80vh'de kaybolacaksa

      // Scroll pozisyonu scrollThreshold'dan büyükse opacity'yi azalt
      if (scrollY > scrollThreshold) {
        const opacityValue = 1 - (scrollY - scrollThreshold) / (vh * 0.7);
        setOpacityVid(opacityValue > 0 ? opacityValue : 0);
      } else {
        setOpacityVid(1); // Eğer scroll pozisyonu threshold'dan küçükse opacity'yi sıfırla
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div class="bg-video-wrap d-flex justify-content-center align-items-center">
      <video className="video" style={{ opacityVid }} src={danceVid} autoPlay loop muted></video>
      <div class="overlay"></div>
      <h1 style={{ opacity }}>
        <Zoom>
          <div className="daceHeader zoom2">
            <div className="headerOne">Adaptive Audio.</div>
            <div className="haderTwo">Now Playing.</div>
            <div></div>
          </div>
        </Zoom>
      </h1>
    </div>
  );
};

export default DanceVideo;
