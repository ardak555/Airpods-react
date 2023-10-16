import "../assets/css/HeadphoneHead.css";
import xs from "../assets/images/airpodsHead/xsHead.jpeg";
import s from "../assets/images/airpodsHead/sHead.jpeg";
import m from "../assets/images/airpodsHead/mHead.jpeg";
import l from "../assets/images/airpodsHead/lHead.jpeg";
import headless from "../assets/images/airpodsHead/headless.jpeg";
import { useEffect, useState} from "react";
import { useInView } from "react-intersection-observer";

//const headphoneHeadsArr = [xs, s, m, l];

const HeadphoneHead = () => {
  const [smallOpacity, setSmallOpacity] = useState(1);

  /* const scrollY = window.scrollY;
  const threshold = 100; // Örnek bir eşik değeri

  if (scrollY > threshold) {
    // Eşik değerini aştığınızda opacity'yi azaltın
    setSmallOpacity(0.5); // Örnek bir opacity değeri
  } else {
    // Eşik değeri aşılmadığında opacity'yi geri yükleyin
    setSmallOpacity(1);
  }  */


  const { ref, inView } = useInView({
    threshold: 0
  });

  useEffect(() => {
    const handleScroll = () => {
      const xsmallHead = document.getElementsByClassName("xs")[0];
      const smallHead = document.getElementsByClassName("s")[0];
      const mdHead = document.getElementsByClassName("m")[0];
      const lgHead = document.getElementsByClassName("l")[0];

      let xsmallTemp = window.getComputedStyle(xsmallHead).opacity;

      if (xsmallTemp !== 0) {
        xsmallHead.style.opacity = 0;
        setTimeout(() => {
          smallHead.style.opacity = 0;

          setTimeout(() => {
            mdHead.style.opacity = 0;
              
            setTimeout(() => {
              lgHead.style.opacity = 0;
            }, 3000);
          }, 3000);
        }, 3000);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Temizleme işlemi: bileşen çözümlendiğinde scroll olayını kaldırın
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //   elements.forEach((element, index) => {
  //     // Calculate the opacity based on the scroll position and index
  //     const opacity = 1 - (scrollPosition - index * 200) / 400;

  //     // Ensure opacity is within the range [0, 1]
  //     const clampedOpacity = Math.min(1, Math.max(0, opacity));

  //     // Apply the opacity to the element
  //     element.style.opacity = clampedOpacity;
  //   });
  //     };

  //     window.addEventListener('scroll', handleScroll);
  //     // Cleanup the event listener when the component unmounts
  //     return () => {
  //       window.removeEventListener('scroll', handleScroll);
  //     };

  //   }, []);

  return (
    <div className="head-headphone-all">
      <div className="head-headphone-container ">
        <div>
          <div className="col-6">
            <p className="par-cop">
              <strong className="white"> Four pairs </strong>of silicone tips
              are included to fit a wide range of ears. The tips secure AirPods
              Pro in place and create an{" "}
              <strong className="green"> acoustic seal</strong> that closes in
              the sound.
            </p>
          </div>
          <div className="col-6"></div>
        </div>
      </div>

      <div className="head-headphone-image-all">
        <div className="head-headphone-image-container">
          <div className="baslik" ref={ref}>
            <div className="xs bas" style={{ smallOpacity }}>
              <img src={xs} alt="" />
              <div className="headphone-lable">XS</div>
            </div>
            <div className="s bas">
              <img src={s} alt="" />
              <div className="headphone-lable">S</div>
            </div>
            <div className="m bas">
              <img src={m} alt="" />
              <div className="headphone-lable">M</div>
            </div>
            <div className="l bas">
              <img src={l} alt="" />
              <div className="headphone-lable">L</div>
            </div>
          </div>
          <div className="headless">
            <img src={headless} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadphoneHead;
