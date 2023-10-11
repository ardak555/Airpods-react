import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/DanceVideo.css";
import { useEffect, useRef, useState } from "react";

const DanceVideo = () => {
      useEffect(() => {
          const vh = window.innerHeight / 100;

          const handleScroll = () => {
            const scrollTop = document.documentElement.scrollTop;
            const start = 100 * vh;
            const stop = 200 * vh;
            const zoomElement = document.querySelector('.zoom2');

            if (scrollTop > start && scrollTop < stop && zoomElement) {
              const scale = Math.max(1 + (scrollTop - start) / 500, 1);
              zoomElement.style.transform = `scale(${scale})`;
            }
          };

          window.addEventListener('scroll', handleScroll);

          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
        }, []);

    const [scale, setScale] = useState(1);

    useEffect(() => {
      function handleScroll() {
        const vh = window.innerHeight / 100;
        const scrollTop = document.documentElement.scrollTop;
        const start = 100 * vh;
        const stop = 150 * vh;

        if (scrollTop > start && scrollTop < stop) {
          const newScale = Math.max(2.2 - (scrollTop - start) / 500, 1);
          setScale(newScale);
        }
      }

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);



  return (
    <div className="container">
      <div className="col daceHeader zoom2" style={{scale}}>
        <div className="row text-center headerOne">Adaptive Audio.</div>
        <div className="row text-center haderTwo">Now Playing.</div>
        <div></div>
      </div>
    </div>
  );
};
export default DanceVideo;
