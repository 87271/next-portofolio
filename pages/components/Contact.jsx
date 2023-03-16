import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {HiOutlineChevronDoubleUp } from "react-icons/hi"

function Contact() {
  return (
    <div id="contact" className=" w-full lg:h-screenxss">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className=" text-xl tracking-widest uppercase text-lime-400">
          {" "}
          Contact
        </p>
        <h2 className=" py-4">Kom in contact met mij</h2>
        <div className=" grid lg:grid-cols-5 gap-8">
          {/* Left */}
          <div className=" col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className=" lg:p-4 h-full ">
              <div>
                <Image
                  className=" rounded-xl hover:scale-105 ease-in duration-300"
                  src="/../public/assets/staand.jpg"
                  alt="/"
                  width={1000}
                  height="2000"
                />
              </div>

              <div>
                <h2 className=" py-2">Kylian Rooseman</h2>
                <p>Front-End Developer</p>
                <p className=" py-4">
                  Ik ben beschikbaar voor full time of partime posities. Stuur
                  een gerust een berichtje.
                </p>
              </div>
              <div>
                <p className=" uppercase pt-8"> Zoek contact met mij.</p>
                <div className="flex items-center justify-between py-4">
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

          {/* right */}

          <div className=" col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className=" p-4">
              <form action="https://formspree.io/f/mbjeglgo"
  method="POST">
                <div className=" grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className=" flex flex-col">
                    <label className=" uppercase text-sm py-2">Naam</label>
                    <input
                      className=" border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                    />
                  </div>

                  <div className=" flex flex-col">
                    <label className=" uppercase text-sm py-2">Telefoon Nummer</label>
                    <input
                      className=" border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                    />
                  </div>
                </div>
                <div className=" flex flex-col py-2 ">

                <label className=" uppercase text-sm py-2">Email</label>
                <input
                      className=" border-2 rounded-lg p-3 flex border-gray-300"
                      type="email" name="email"
                    />
                </div>

                <div className=" flex flex-col py-2 ">

<label className=" uppercase text-sm py-2">Onderwerp</label>
<input
      className=" border-2 rounded-lg p-3 flex border-gray-300"
      type="text"
    />
</div>
<div className=" flex flex-col py-2 ">
<label className=" uppercase text-sm py-2">Bericht</label>
<textarea className=" border-2 rounded-lg p-3 border-gray-300 " name="message" rows={10}></textarea>
</div>
<button className=" w-full p-4 text-gray-100 mt-4 bg-lime-400">
    Stuur bericht
</button>
              </form>
            </div>
          </div>
        </div>
        <div className=" flex justify-center py-12">
            <Link href='/'>
                <div className=" rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-115 ease-in duration-300">
                    <HiOutlineChevronDoubleUp className='text-lime-400' size={30} />
                </div>
            </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
