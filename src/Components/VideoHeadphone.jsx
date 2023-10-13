import React, { useState, useEffect } from 'react';
import videoBg from '../assets/videos/beatparticles.mp4';
import '../assets/css/VideoHeadphone.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import imgHeadphone from '../assets/images/airpodsVideoImage.jpeg';
import styled from 'styled-components';

const VideoContainer = styled.div`
  position: relative;
  transition: opacity 0.3s ease;
`;

const VideoBackground = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const OverlayImage = styled.img`
  position: absolute;
  top: 17rem;
  left: 33rem;
  object-fit: cover;
`;

const VideoHeadphone = () => {
  const [opacity, setOpacity] = useState(1);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    // You can adjust the following values to control when the opacity starts decreasing and how fast it decreases.
    const minOpacity = 0.3;
    const scrollStart = 100; // Adjust this value to control when the effect starts.
    const opacityChangeRate = 0.005; // Adjust this value to control how fast the opacity changes.

    const newOpacity = 1 - (scrollY - scrollStart) * opacityChangeRate;

    // Ensure opacity doesn't go below the minimum value.
    const clampedOpacity = Math.max(minOpacity, newOpacity);
    setOpacity(clampedOpacity);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <VideoContainer className='opacityHeadphoneVideoImg' style={{ opacity }}>
      <VideoBackground autoPlay loop muted>
        <source src={videoBg} type="video/mp4" />
      </VideoBackground>
      <OverlayImage src={imgHeadphone} alt="headphone" />
    </VideoContainer>
  );
};

export default VideoHeadphone;