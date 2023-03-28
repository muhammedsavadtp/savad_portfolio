import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMenu } from "../../store/slices/navSlice";
import Aside from "../componet/Aside";
import Header from "../header/Header";
import "./home.css";
import { motion } from "framer-motion";
import { Button, Rating, Tooltip, Typography } from "@mui/material";
import Footer from "../footer/Footer";


const Home = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const dispatch = useDispatch();
  const hamburgerMenu = useSelector((state) => state.navSlice.menu);
  useEffect(() => {
    const handleScroll = () => {
      const currentPage = Math.floor(window.pageYOffset / window.innerHeight);
      setCurrentPage(currentPage);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  console.log(currentPage);
  const skills = [
    {
      id: 1,
      skill: "html",
      width: "",
    },
    {
      id: 2,
      skill: "css",
      width: "",
    },
    {
      id: 3,
      skill: "javascript",
      width: "",
    },
    {
      id: 4,
      skill: "react",
      width: "",
    },
    {
      id: 5,
      skill: "mongodb",
      width: "",
    },
    {
      id: 6,
      skill: "express",
      width: "",
    },
    {
      id: 7,
      skill: "node js",
      width: "",
    },
  ];

  const items = [
    {
      name: "olx",
      color: "bg-blue-500",
      id: 1,
      link: "https://muhammedsavadtp.github.io/olx-clone-app/",
    },
    {
      name: "netflix",

      color: "bg-red-700",
      id: 2,
      link: "https://muhammedsavadtp.github.io/netflix-clone-app/",
    },
    {
      name: "",
      // color: "bg-green-800 ",
      id: 3,
      link: "",
    },
    {
      name: "",
      // color: "bg-rose-300",
      id: 4,
      link: "",
    },
    {
      name: "",
      // color: "bg-green-300",
      id: 5,
      link: "",
    },
    {
      name: "",
      // color: "bg-blue-200",
      id: 6,
      link: "",
    },
  ];

  const contact = [
    {
      id: 1,
      contactOption: "email",
      contactValue: "www.savad34@gamil.com",
      iconName: "email",
    },
    {
      id: 2,
      contactOption: "phone",
      contactValue: "+91 7902985920",
      iconName: "phone_iphone",
    },
    {
      id: 3,
      contactOption: "location",
      contactValue: "kozhikode kerala india",
      iconName: "location_on",
    },
  ];
  function SkillBar({ skillName, width, bar }) {
    return (
      <div
        className={` skillset_box bar${bar} ${
          bar === 1 ? "md:pt-20" : "md:pt-0"
        } skill_level col-span-6 flex justify-between align-middle   `}
      >
        <div className="skill_bar overflow-hidden w-56 md:w-full flex rounded-xl h-2 mt-2 mr-2 relative before:block before:absolute before:-inset-1 before:bg-white"></div>
        <div className="skill_name w-10">
          <h1 className="uppercase font-medium whitespace-nowrap">
            {skillName}
          </h1>
        </div>
      </div>
    );
  }

 //set current page 
  const [page, setPage] = useState(1); // initial page is 1
  const [height, setHeight] = useState(0); // initial height is 0

  useEffect(() => {
    // get the height of the window
    const windowHeight = window.innerHeight;
    // set the height state to the window height
    setHeight(windowHeight);
    // add a scroll event listener
    window.addEventListener("scroll", handleScroll);
    // remove the event listener on cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    // get the current scroll position
    const scrollTop = window.pageYOffset;
    // calculate the current page based on the scroll position and the window height
    const currentPage = Math.ceil(scrollTop / height) + 1;
    // update the page state if it's different from the previous one
    if (currentPage !== page) {
      setPage(currentPage);
    }
  };

  console.log('this is current page ', page);



 




  const [rightBtn, setRightBtn] = useState(false);

  return (
    <div id="main" className=" w-full flex justify-center relative flex-wrap  ">
      <Header />
      <div
        className={`bg-black  h-screen ${
          hamburgerMenu ? "block touch-none" : "hidden"
        } w-full fixed z-40   md:hidden max-w-sm`}
      >
        <div className="pt-16">
          <ul className="">
            <a href="#">
              <li
                onClick={() => dispatch(setMenu(false))}
                className="text-xl  font-bold capitalize mb-2 text-white px-5"
              >
                home
              </li>
            </a>{" "}
            <a href="#about">
              <li
                onClick={() => dispatch(setMenu(false))}
                className="text-xl  font-bold capitalize mb-2 text-white px-5"
              >
                about
              </li>
            </a>{" "}
            <a href="#portfolio">
              <li
                onClick={() => dispatch(setMenu(false))}
                className="text-xl  font-bold capitalize mb-2 text-white px-5"
              >
                portfolio
              </li>
            </a>
            <a href="#contact">
              <li
                onClick={() => dispatch(setMenu(false))}
                className="text-xl  font-bold capitalize mb-2 text-white px-5"
              >
                contact
              </li>
            </a>{" "}
          </ul>
        </div>
      </div>

      <div className="container-fluid flex flex-col px-5 text-white max-w-sm md:max-w-7xl ">
        {/* --home--page-- */}
        <section id="home" className="h-screen w-full overflow-hidden ">
          <div className="home_container    relative">
            <Aside count={"1"} navigate={"next page"} page={"#about"} />
            <div className="    flex flex-wrap justify-center align-middle h-28 ">
              <h1 className="w-full text-center  text-white  mb-2 md:mb-10 text-3xl  md:text-7xl font-black pt-64  md:pt-64 capitalize  ">
                muhammed savad <span className="text-yellow-400">.</span>
              </h1>
              <p className=" text-center md:text-xl md:first-letter w-3/4 md:w-2/4 capitalize">
                full stack web developer
              </p>
            </div>
          </div>
        </section>
        {/* --about--page-- */}

        <section id="about" className="h-screen  overflow-hidden">
          <div className="heading relative w-full ">
            <h1 className=" md:text-2xl uppercase font-bold   text-center absolute z-20 left-36 md:left-1/2 top-16 border-white border-b-2">
              about me 
            </h1>
          </div>

          <div className="about_container   relative  grid md:grid-rows-6 md:grid-cols-6 md:h-screen  auto-cols-auto">
            <Aside count={"2"} navigate={"next page"} page={"#portfolio"} />
            <div className="more_sill  block md:hidden ">
              <div className="absolute right-0 top-56 z-20">
                <div className="h-10">
                  <span
                    onClick={() => setRightBtn(true)}
                    className={`${
                      rightBtn ? "bg-blue-100 " : "bg-blue-300"
                    } material-symbols-outlined  cursor-pointer bg-blue-300 rounded-xl`}
                  >
                    arrow_right
                  </span>
                </div>
                <div className="h-10">
                  <span
                    onClick={() => setRightBtn(false)}
                    className={`${
                      rightBtn ? "bg-blue-300 " : "bg-blue-100"
                    } material-symbols-outlined cursor-pointer  rounded-xl`}
                  >
                    arrow_left
                  </span>
                </div>
              </div>
            </div>
            {/* about heading */}
            <div
              className={`about_heading ${
                rightBtn ? "hidden" : "block"
              } md:block  md:row-start-1 md:row-end-2 md:pt-24  md:col-span-4 px-8 md:px-16  `}
            >
              <h1 className="capitalize my-1  text-sm md:text-2xl  font-bold md:mb-5">
                Hi there, my name is muhammed savad
              </h1>
              <p className="md:w-full text-justify text-xs md:text-sm ">
                I am a MERN stack developer with a strong understanding of both front end and back end development. I specialize in creating scalable, robust and responsive web applications using technologies such as MongoDB, ExpressJS, ReactJS, and NodeJS. On the front end, I have a keen eye for design and user experience, and on the back end, I am experienced in server-side technologies such as Node.js and Express.js. I am a team player who enjoys collaborating with others, and I am always looking to improve my skills and stay up-to-date with the latest technologies.
              </p>
            </div>
            {/* skill bar */}
            <div
              className={`skill_section overflow-hidden ${
                rightBtn ? "block" : "hidden "
              }   md:block    md:px-16  pr-10 mt-5 md:mt-0   md:col-span-4 md:row-start-3   md:row-end-6   `}
            >
              <div className="skill_container pl-8 pr-1 md:px-0 grid grid-cols-6 grid-flow-row md:gap-y-5">
                {skills.map(({ skill, id, width }) => (
                  <SkillBar key={id} skillName={skill} width={width} bar={id} />
                ))}
              </div>
            </div>
            {/* user profile */}
            <div className="user_profile   mt-24 md:mt-0  row-start-1 md:col-start-5 md:place-self-center   md:col-end-7 md:row-start-3 md:row-end-6  ">
              <div className="profile_box  overflow-hidden h-60   md:h-auto md:w-full place-self-center ">
                <img
                  className=" h-auto w-full  px-8  md:px-0     "
                  src="/src/assets/image/photo.jpg"
                  alt="user profile"
                />
              </div>
            </div>
          </div>
        </section>
        {/* --portfolio--page-- */}

        <section id="portfolio" className="h-screen overflow-hidden ">
          <div className="about_container    relative">
            <Aside count={"3"} navigate={"next page"} page={"#contact"} />
            {/* --portfolio_items-- */}
            <div className="heading relative w-full ">
              <h1 className=" md:text-2xl uppercase font-bold   text-center absolute z-20 left-36 md:left-1/2 top-28 border-white border-b-2 md:top-16">
                portfolio
              </h1>
            </div>

            <div className="portfolio_items  grid grid-cols-1 gap-2 pt-48 px-8 md:grid-cols-3 md:grid-row-3 place-items-center md:h-screen md:gap-7 md:p-28 relative">
              {/* box */}

              {items.map(({ color, name, id, link }) => (
                <div
                  key={id}
                  className="relative w-full md:h-52 h-32 left-3 md:left-0  overflow-hidden   ease-in-out"
                 
                >
                  <div
                    onClick={() => {
                      window.location.href=link
                      
                    }}
                    className={`${color} md:h-52 w-full h-28 rounded-xl cursor-pointer  absolute z-20 hover:scale-110 `}
                  >
                    <h1 className="text-center  block md:h-full md:mt-24 mt-10 md:text-xl font-bold uppercase ">
                      {name}
                    </h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* --contact--page-- */}

        <section id="contact" className="h-screen overflow-hidden ">
          <div className="about_container   relative">
            <Aside count={"4"} navigate={"back to home"} page={"#home"} />
            <div className=" contact_box grid md:grid-cols-2 md:grid-rows-1 px-16 py-32 ">
              <div className="contact_box relative md:h-screen md:pt-20 ">
                <div className="contact_with_me  absolute z-20">
                  <h1 className="font-extrabold text-xl md:text-3xl uppercase">
                    contact with me
                  </h1>
                  <div className="w-48 md:h-5 md:w-80 border-white border-b-2"></div>

                  {contact.map(
                    ({ contactOption, contactValue, id, iconName }) => (
                      <div
                        key={id}
                        className={`${contactOption} flex my-5 md:my-10`}
                      >
                        <span className="material-symbols-outlined mr-5 md:text-2xl">
                          {iconName}
                        </span>{" "}
                        <h1 className="whitespace-nowrap md:text-2xl block  font-bold">
                          {contactValue}
                        </h1>
                      </div>
                    )
                  )}
                </div>
              </div>
              <div className="Input_field relative md:h-screen pt-20">
                <div className="input-box-1 absolute z-20 left-0 top-48 md:top-20 ">
                  <div className="md:mb-5 mb-2">
                    <input
                      type="text"
                      className="md:w-96 w-64 px-3 py-2 placeholder-gray-500 text-gray-900   rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Email"
                    />
                  </div>
                  <div className="md:mb-5 mb-2 ">
                    <input
                      type="text"
                      className=" md:w-96 w-64 px-3 py-2 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Name"
                    />
                  </div>
                  <div className="">
                    <textarea
                      className="md:w-96 w-64 px-3 py-2 md:h-40 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Message"
                    ></textarea>
                    <button className="hover:scale-105 md:w-96 w-64 flex justify-center align-middle send border-none p-3 mt-1 md:mt-3 rounded-md bg-white text-black text-base font-bold uppercase">
                      send{" "}
                      <span className="material-symbols-outlined pl-2 ">send</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* test section */}
        <section>
         
        </section>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
