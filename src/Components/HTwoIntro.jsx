import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/HTwoIntro.css";

const HTwoIntro = () => {
  return (
    <div className="container">
      <div className="header">
        <h3 className="litleHeader">Audio performance</h3>
        <h2 className="bigHeader">
          H2. More
          <br />
          immersive by
          <br />
          every measure.
        </h2>
      </div>
      <div className="content">
        <p className="inroduction">
          The Apple-designed H2 chip is the force behind the advanced audio
          performance of AirPods Pro, working with the driver and amplifier to
          create crisp, high-definition sound. It uses computational algorithms
          to deliver noise cancellation, superior three-dimensional sound, and
          efficient battery life — all at once.
        </p>
      </div>
    </div>
  );
};
export default HTwoIntro;
