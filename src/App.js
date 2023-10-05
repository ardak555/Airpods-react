import { AiFillApple, AiOutlineDown, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillBagFill } from "react-icons/bs";
import "./App.css";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import First from "./First/First";
import React, { useEffect } from "react";



function App() {
  // useEffect(() => {

  //   const navLine = document.querySelector(".navLine");

  //   function handleScroll() {
  //     if (window.scrollY > 300) {
  //       navLine.classList.add("bigLine");
  //     } else {
  //       navLine.classList.remove("bigLine");
  //     }
  //   }

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  // useEffect(() => {

  //   const scroledSecondLine = document.querySelector(".scroledSecondLine");

  //   function handleScrolll() {
  //     if (window.scrollY > 300) {
  //       scroledSecondLine.classList.add("scroledSecondLine");
  //     } else {
  //       scroledSecondLine.classList.remove("scroledSecondLine");
  //     }
  //   }
  //   window.addEventListener("scroll", handleScrolll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScrolll);
  //   };
  // }
  // , []);
  return (
    <>
      {/* <div className="App">
      <div className="container allnav">
        <div className="col-lg-12">    <nav className="navbar">
          <ul className="navBarUl">
            <li className="navBarLi">
              <AiFillApple className="logo" />
            </li>
            <li className="navBarLi">Store</li>
            <li className="navBarLi">Mac</li>
            <li className="navBarLi">iPad</li>
            <li className="navBarLi">iPhone</li>
            <li className="navBarLi">Watch</li>
            <li className="navBarLi">Vision</li>
            <li className="navBarLi">AirPods</li>
            <li className="navBarLi">TV&Home</li>
            <li className="navBarLi">Music</li>
            <li className="navBarLi">Acsessories</li>
            <li className="navBarLi">Support</li>
            
            
            <li className="navBarLi navBaritem">
              <AiOutlineSearch className="logo " />
            </li>
            <li className="navBarLi navBaritem">
              <BsFillBagFill className="logo" />
            </li>
            <li className="navBarMenu">
              <AiOutlineMenu/>
            </li>
          </ul>
        </nav></div>
    
        <nav className="secondline scroledSecondLine">
          <div className="navTitle">
            <h3 className="navHeader">AirPods Pro (2nd generation)</h3>
          </div>
          <div className="navBarMenu">
            <ul className="navBarTrayItem">
              <li>Overview</li>
              <li>Tech Specs</li>
              <li>Compare</li>
              <li className="navBarTraySmall">
                  <AiOutlineDown/>
              </li>
              <li>
                <div className="buyButton">Buy</div>
              </li>
            </ul>
          </div>
          <div className="navLine bigLine"></div>
        </nav>
        
      </div>
      <First/>
    </div> */}
      <div className="App">
        <div className="container mainHeader">
          <div className="col-lg-12 ">
            <ul className="navBarUl d-flex  justify-content-space-between">
              <li className="navBarLi">
                <AiFillApple className="logo" />
              </li>
              <li className="navBarLi">Store</li>
              <li className="navBarLi">Mac</li>
              <li className="navBarLi">iPad</li>
              <li className="navBarLi">iPhone</li>
              <li className="navBarLi">Watch</li>
              <li className="navBarLi">Vision</li>
              <li className="navBarLi">AirPods</li>
              <li className="navBarLi">TV&Home</li>
              <li className="navBarLi">Music</li>
              <li className="navBarLi">Acsessories</li>
              <li className="navBarLi">Support</li>

              <li className="navBarLi navBaritem">
                <AiOutlineSearch className="logo " />
              </li>
              <li className="navBarLi navBaritem">
                <BsFillBagFill className="logo" />
              </li>
              <li className="navBarMenu">
                <AiOutlineMenu />
              </li>
            </ul>
          </div>
          <div className="secondHeader">
              <h3 className="navHeader">AirPods Pro (2nd generation)</h3>
              <ul className="secondList">
                <li>Overview</li>
                <li>Tech Specs</li>
                <li>Compare</li>
                <li className="navBarTraySmall">
                  <AiOutlineDown />
                </li>
                <li>
                  <div className="buyBtn">Buy</div>
                </li>
              </ul>
            <div className="navLine"></div>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default App;
