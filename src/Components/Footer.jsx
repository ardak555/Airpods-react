import "../assets/css/Footer.css";
import "bootstrap/dist/css/bootstrap.min.css"

const Footer = () => {
  return (
    <div className="footer">
        <div className="container genel">
      <div className="firts-line-footer">
        More ways to shop:&nbsp;
        <a href="#">Find an Apple Store</a>
        &nbsp;or&nbsp;
        <a href="#">other retailer</a>
        &nbsp;near you. Or call 1-800-MY-APPLE.
      </div>
      <div className="footer-line"></div>
      <div className="second-line-footer">
        <span className="footer-span">Coppyright © 2023 Developed by Arda Koyuncu. </span>

        <ul className="footer-navi">

          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms of Use</a>
          </li>
          <li>
            <a href="#">Sales and Refunds</a>
          </li>
          <li>
            <a href="#">Legal</a>
          </li>
          <li>
            <a href="#">Site Map</a>
          </li>
        </ul>          
        
        <div>
            <a href="#">United States</a>
        </div>

      </div>
      </div>
    </div>
  );
};

export default Footer;
