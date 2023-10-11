import "./App.css";
import DanceVideo from "./Components/DanceVideo";
import HTwoCont from "./Components/HTwoCont";
import HTwoIntro from "./Components/HTwoIntro";
import Header from "./Components/Header";
import Model from "./Components/Model";
import SoundTurn from "./Components/SoundTurn";

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
        <SoundTurn />
      </div>
    </>
  );
}

export default App;
