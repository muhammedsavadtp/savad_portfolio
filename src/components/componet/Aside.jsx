import React from "react";

const Aside = ({ count, page, navigate }) => {
 
  return (
    <div className="aside absolute z-20 grid w-full h-screen  grid-rows-5  grid-cols-3 md:grid-rows-4 md:grid-cols-3 max-w-sm md:max-w-7xl ">
     {/* ----social-media-links---- */}
      <div className={`${count === '2' ?'block':'hidden'} social_handle   row-start-2 row-end-4 md:row-end-3 place-self-start  pt-20`}>
        <ol>
        
          <a href="https://www.instagram.com/__.savad.__/?igshid=YmMyMTA2M2Y%3D"><li className="pb-5 list-none ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height={20}
                fill={"white"}
                className="ionicon"
                viewBox="0 0 512 512"
              >
                <title>Instagram</title>
                <path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z" />
                <path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z" />
              </svg>
            </li></a>
          <a href="https://github.com/muhammedsavadtp"> <li className="mb-5 list-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ionicon"
                viewBox="0 0 512 512"
                height={20}
                fill={"white"}
              >
                <title>Github</title>
                <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
              </svg>
            </li></a>
          <a href="https://www.linkedin.com/in/muhammed-savad-361a71241/"> <li className="mb-5 list-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height={20}
                fill={"white"}
                className="ionicon"
                viewBox="0 0 512 512"
              >
                <title>Linkedin</title>
                <path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z" />
              </svg>
            </li></a>
         
        </ol>
      </div>
      {/* ----page-number------ */}
      <div className="counter  col-start-1 col-end-3  row-end-6    md:row-start-4 md:row-end-4  place-self-start  border-b-4 border-white-500   ">
        <div className="counter bg-black text-white ">
          <h1 className="font-extrabold text-4xl  md:pt-0 md:mt-14 md:text-8xl">
            0{count}
          </h1>
        </div>
      </div>
      {/* ----next-page-btn--- */}
      <div className=" dropdown   w-full col-start-3 row-start-4 row-end-6 md:row-start-4 md:row-end-4  ">
        
          {" "}
          <div className="navigate_next_page_arrow relative h-full overflow-hidden ">
            {/* <h3 className="absolute   top-20 md:top-8 rotate-90 right-0 p-2 translate-x-7  whitespace-nowrap">
              {navigate}
            </h3> */}
            <div className="absolute animate-bounce p-1 right-0 top-36 md:top-32 bg-white rounded-2xl w-8 h-8">
            <a href={page}> <span className="material-symbols-outlined text-black">{count === '4' ? 'arrow_upward' :'arrow_downward'}</span>  </a>
            </div>
          </div>{" "}
      
      </div>
    </div>
  );
};

export default Aside;
