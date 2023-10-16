import "./App.css";
import DanceVideo from "./Components/DanceVideo";
import DanceVideoEntry from "./Components/DanceVideoEntry";
import HTwoCont from "./Components/HTwoCont";
import HTwoIntro from "./Components/HTwoIntro";
import Header from "./Components/Header";
import HeadphoneHead from "./Components/HeadphoneHead";
import Model from "./Components/Model";
import NoiseIntro from "./Components/NoiseIntro";
import SoundTurn from "./Components/SoundTurn";
import VideoHeadphone from "./Components/VideoHeadphone";

function App() {
  
  return (
    <>
      <div className="App">
        <Header />
        <Model />
        <DanceVideoEntry />
        <HTwoIntro />
        <HTwoCont />
        <VideoHeadphone />
        <NoiseIntro />
        <HeadphoneHead />
        <SoundTurn />
      </div>
    </>
  );
}

export default App;
