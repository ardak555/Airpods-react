import {
    AiFillApple,
    AiOutlineDown,
    AiOutlineMenu,
    AiOutlineSearch,
  } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import "../assets/css/Header.css"
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
  
  function Header() {
    
    useEffect(() => {
      const navLine = document.querySelector(".navLine");
  
      function handleScroll() {
        if (window.scrollY > 50) {
          navLine.classList.add("bigLine");
        } else {
          navLine.classList.remove("bigLine");
        }
      }
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
  
    useEffect(() => {
      const scroledSecondLine = document.querySelector(".secondHeader");
  
      function handleScrolll() {
        if (window.scrollY > 50) {
          scroledSecondLine.classList.add("scroledSecondLine");
        } else {
          scroledSecondLine.classList.remove("scroledSecondLine");
        }
      }
      window.addEventListener("scroll", handleScrolll);
      return () => {
        window.removeEventListener("scroll", handleScrolll);
      };
    }, []);
  
    return (
      <>
        <div className="App">
          <div className="container mainHeader">
            <div className="col-lg-12 firstalign">
              <ul className="navBarUl d-flex  justify-content-space-between">
                <li className="navBarLi">
                  <AiFillApple className="logo" />
                </li>
                <li className="navBarLi non">Store</li>
                <li className="navBarLi non">Mac</li>
                <li className="navBarLi non">iPad</li>
                <li className="navBarLi non">iPhone</li>
                <li className="navBarLi non">Watch</li>
                <li className="navBarLi non">Vision</li>
                <li className="navBarLi non">AirPods</li>
                <li className="navBarLi non">TV&Home</li>
                <li className="navBarLi non">Music</li>
                <li className="navBarLi non">Acsessories</li>
                <li className="navBarLi non">Support</li>
  
                <div className="firstsmalicon">
                <li className="navBarLi navBaritem">
                  <AiOutlineSearch className="logo trans" />
                </li>
                <li className="navBarLi navBaritem">
                  <BsBag className="logo trans" />
                </li>
                <li className="navBarMenu">
                  <AiOutlineMenu />
                </li>
                </div>
              </ul>
            </div>
            <div className="secondHeader">
              <div className="navgroup">
                <h3 className="navHeader">AirPods Pro (2nd generation)</h3>
                <ul className="secondList">
                  <li className="no">Overview</li>
                  <li className="no">Tech Specs</li>
                  <li className="no">Compare</li>
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
        </div>
      </>
    );
  }
  
  export default Header;