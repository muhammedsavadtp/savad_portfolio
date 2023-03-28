import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setMenu } from "../../store/slices/navSlice";
import "./header.css";

const Header = () => {
  // update state
  const dispatch = useDispatch();
  const menu = useSelector((state) => state.navSlice.menu);

  return (
    <div className="z-50 fixed  top-0 w-full max-w-sm md:max-w-7xl flex justify-center container-fluid rleative text-white font-medium uppercase h-14 md:h-16 ">
      <div className="px-5 pt-5 col-md-12 grid grid-cols-2 items-center w-full backdrop-blur  ">
        {/* ---user name title --- */}
        <div className="userName">
          <a href="#home">
            <h1 className=" whitespace-nowrap uppercase font-extrabold md:text-xl md:font-extrabold">
              Muhammed savad{" "}
            </h1>
          </a>
        </div>
        {/* ---nav links --- */}
        <div className="navigateLinks hidden md:block ">
          <ul className="flex justify-end  ">
            <li className="ml-16 text-gray-300 cursor-pointer   hover:text-white transition-all  ">
              <a href="#about">
                <h1>about</h1>
              </a>
            </li>
            <li className="ml-16 text-gray-300 cursor-pointer  hover:text-white transition-all">
              <a href="#portfolio">
                <h1>Portfolio</h1>
              </a>
            </li>
            <li className="ml-16 text-gray-300 cursor-pointer  hover:text-white transition-all">
              <a href="#contact">
                <h1>contact</h1>
              </a>
            </li>
          </ul>
        </div>
        {/* ---hamburger menu --- */}
        <div className="hamburger flex justify-end  md:hidden ">
          <span
            onClick={() => {
              dispatch(setMenu(!menu));
              console.log("menu btn clicked");
              console.log(menu);
            }}
            className="material-symbols-outlined"
          >
            {menu ? "close" : "menu"}
          </span>
        </div>
       
      </div>
         
    </div>
  );
};

export default Header;
