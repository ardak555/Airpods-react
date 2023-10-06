import "../assets/css/Model.css";
import { AiOutlinePlayCircle } from "react-icons/ai";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Zoom from "react-reveal/Zoom";

import Frame1 from "../assets/images/firstImages/heroairpod_3.png";
import Frame2 from "../assets/images/firstImages/heroairpod_4.png";
import Frame3 from "../assets/images/firstImages/heroairpod_5.png";
import Frame4 from "../assets/images/firstImages/heroairpod_6.png";
import Frame5 from "../assets/images/firstImages/heroairpod_7.png";
import Frame6 from "../assets/images/firstImages/heroairpod_8.png";
import Frame7 from "../assets/images/firstImages/heroairpod_9.png";
import Frame8 from "../assets/images/firstImages/heroairpod_10.png";
import Frame9 from "../assets/images/firstImages/heroairpod_11.png";
import Frame10 from "../assets/images/firstImages/heroairpod_12.png";
import Frame11 from "../assets/images/firstImages/heroairpod_13.png";
import Frame12 from "../assets/images/firstImages/heroairpod_14.png";
import Frame13 from "../assets/images/firstImages/heroairpod_15.png";
import Frame14 from "../assets/images/firstImages/heroairpod_16.png";
import Frame15 from "../assets/images/firstImages/heroairpod_17.png";
import Frame16 from "../assets/images/firstImages/heroairpod_18.png";
import Frame17 from "../assets/images/firstImages/heroairpod_19.png";
import Frame18 from "../assets/images/firstImages/heroairpod_20.png";
import Frame19 from "../assets/images/firstImages/heroairpod_21.png";
import Frame20 from "../assets/images/firstImages/heroairpod_22.png";
import Frame21 from "../assets/images/firstImages/heroairpod_23.png";
import Frame22 from "../assets/images/firstImages/heroairpod_24.png";
import Frame23 from "../assets/images/firstImages/heroairpod_25.png";
import Frame24 from "../assets/images/firstImages/heroairpod_26.png";
import Frame25 from "../assets/images/firstImages/heroairpod_27.png";
import Frame26 from "../assets/images/firstImages/heroairpod_28.png";
import Frame27 from "../assets/images/firstImages/heroairpod_29.png";
import Frame28 from "../assets/images/firstImages/heroairpod_30.png";
import Frame29 from "../assets/images/firstImages/heroairpod_31.png";
import Frame30 from "../assets/images/firstImages/heroairpod_32.png";
import Frame31 from "../assets/images/firstImages/heroairpod_34.png";
import Frame32 from "../assets/images/firstImages/heroairpod_35.png";
import Frame33 from "../assets/images/firstImages/heroairpod_36.png";
import { Slide } from "react-reveal";

const Model = () => {
  const [scrolled, setScrolled] = useState(1);

  useEffect(() => {
    window.addEventListener("scroll", scrollProgress);
    return () => window.removeEventListener("scroll", scrollProgress);
  }, []);

  const scrollProgress = () => {
    const scrollPx = document.documentElement.scrollTop;
    const winHeightPx =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollLen = Math.ceil(((scrollPx / winHeightPx) * 20) / 0.5);
    setScrolled(scrollLen);
  };

  const frames = [
    Frame1,
    Frame2,
    Frame3,
    Frame4,
    Frame5,
    Frame6,
    Frame7,
    Frame8,
    Frame9,
    Frame10,
    Frame11,
    Frame12,
    Frame13,
    Frame14,
    Frame15,
    Frame16,
    Frame17,
    Frame18,
    Frame19,
    Frame20,
    Frame21,
    Frame22,
    Frame23,
    Frame24,
    Frame25,
    Frame26,
    Frame27,
    Frame28,
    Frame29,
    Frame30,
    Frame31,
    Frame32,
    Frame33,
  ];

  const normalizedCount = Math.min(Math.max(scrolled, 0), frames.length - 1);

  return (
    <div className="container containerArea">
      <div className="col">
        <div className=" row text-center">
          <div className="title">
            <Zoom delay={1600}>
              <h1>AirPodsPro</h1>
            </Zoom>
            <Zoom delay={1000}>
              <img
                className="imageOne"
                src={frames[normalizedCount]}
                alt="headphones"
              />
            </Zoom>
          </div>
        </div>

        <div className="row hole"></div>

        <Zoom delay={2000}>
        <Slide  delay={2000} top>
          <div className="down text-center">
            <div className="col-lg-6">
              <h5>
                <a
                  className="watchLink"
                  href="https://"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch Quiet the noise
                  <span>
                    <AiOutlinePlayCircle />
                  </span>
                </a>
              </h5>
            </div>
            <div className="col-lg-6">
              <h5>
                <a
                  className="watchLink"
                  href="https://"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch the film
                  <span>
                    <AiOutlinePlayCircle />
                  </span>
                </a>
              </h5>
            </div>
          </div>
        </Slide>
        </Zoom>
      </div>
    </div>
  );
};

export default Model;
