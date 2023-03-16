import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  AiOutlineClose,
  AiOutlineExclamation,
  AiOutlineMail,
  AiOutlineMenu,
} from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Main = () => {
  return (
    <div id="home" className=" w-full h-screen text-center">
      <div className=" max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center ">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600 ">
            Laten we samen wat bouwen
          </p>
          <h1 className=" py-4 text-gray-700">
            Hi, Ik ben <span className=" text-lime-400">Kylian Rooseman</span>
          </h1>
          <h1 className=" py-4 text-gray-700">
            Een Front-End Software Developer
          </h1>
          <p className=" py-4 text-gray-600 max-w-[70%] m-auto">
         Welkom op mijn Portofolio website.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-115 ease-in duration-300">
              <FaLinkedin />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-115 ease-in duration-300">
              <FaGithub />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-115 ease-in duration-300">
              <AiOutlineMail />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-115 ease-in duration-300">
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
