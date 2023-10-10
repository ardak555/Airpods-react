import "./App.css";
import DanceVideo from "./Components/DanceVideo";
import Header from "./Components/Header";
import Model from "./Components/Model";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Model />
        <DanceVideo/>
      </div>
    </>
  );
}

export default App;
