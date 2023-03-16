import React from "react";
import propertyImg from "public/assets/projects/property.jpg";
import Image from "next/image";
import Link from "next/link";
import Projectitem from "./Projectitem";
import cryptoImg from "public/assets/projects/crypto.jpg";
import netflixImg from "public/assets/projects/netflix.jpg";
import PattaImg from "public/assets/projects/pattaImg.jpg";
import reseveringImg from "public/assets/projects/reseveringImg.jpg";
import gpImg from "public/assets/projects/gp.jpg";
import jumpImg from "public/assets/projects/jump.jpg";







const Project = () => {
  return (
    <div id="project" className=" w-full">
      <div className=" max-w-[1240px] mx-auto px-2 py-16">
        <p className=" text-xl tracking-widest uppercase text-lime-400">
          Project
        </p>
        <h2 className=" py-4">Wat ik allemaal heb gemaakt</h2>
        <div className="grid md:grid-cols-2 gap-8">
            
       

          <Projectitem
            title="Reseveringsite"
            backgroundImg={reseveringImg}
            projectUrl="https://87271.stu.sd-lab.nl/resevering/home.html"
          />
          <Projectitem
            title="Shoe Collector"
            backgroundImg={PattaImg}
            projectUrl="https://87271.stu.sd-lab.nl/Pattacollector/index2.html"
          />
          <Projectitem
          title="GP Zandvoort"
          backgroundImg={gpImg}
          projectUrl="https://87271.stu.sd-lab.nl//GP/index.html"
        />
  
      <Projectitem
      title="Jump"
      backgroundImg={jumpImg}
      projectUrl="https://87271.stu.sd-lab.nl/jump/index.html"
    />






        </div>
      </div>
    </div>
  );
};

export default Project;
