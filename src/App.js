import "./App.css";
import DanceVideo from "./Components/DanceVideo";
import HTwoCont from "./Components/HTwoCont";
import HTwoIntro from "./Components/HTwoIntro";
import Header from "./Components/Header";
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
        <DanceVideo/>
        {/* jfjg */}
        <HTwoIntro />
        <HTwoCont />
        <VideoHeadphone />
        <NoiseIntro />
        <SoundTurn />
      </div>
    </>
  );
}

export default App;
