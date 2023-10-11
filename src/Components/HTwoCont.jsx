import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/HTwoCont.css"
import videos from "../assets/videos/h2chip.mp4"
import { useRef, useEffect } from "react";

const HTwoCont = () => {

  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Videonun yarısı göründüğünde işlem yap
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          video.play(); // Videonun oynatılması
        } else {
          video.pause(); // Videonun durdurulması
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(video);

    return () => {
      observer.disconnect(); // bileşen kaldırıldığında gözlemciyi temizle
    };
  }, []);
  
  return (
    <div className="all-container">
      <div className="parH2 conH2">
        <div className="chipCont ened loded">
          <video height={500} width={500} src={videos} muted autoPlay ref={videoRef}></video>
        </div>
      </div>
      <div className="parH2">
        <div className="parH2-cop">
          <p className="paragraph gray">
            AirPods Pro will pair with Apple Vision Pro (available early next year in the U.S.) to deliver
            <strong className="green"> Lossless Audio with ultra-low latency</strong>, for an unprecedented sound
            experience. Both feature the <strong className="green"> H2 chip </strong>, communicating at
            industry-shattering speed and unlocking a revolutionary new format
            rendering pure, uncompressed sound in real time. So your movies,
            shows, and games become breathtakingly immersive.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HTwoCont;
