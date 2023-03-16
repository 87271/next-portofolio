import React from "react";
import Image from "next/image";
import Link from "next/link";


const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className=" col-span-2">
          <p className=" py-1 uppercase text-xl tracking-widest text-lime-400">
            Over
          </p>
          <h2 className=" py-4">Wie ik ben</h2>
          <p className=" py-2 text-gray-600 ">
            Ik ben niet je normale Software Developer.
          </p>
          <p className=" py-2 text-gray-600 ">
            {" "}
            Mijn naam is Kylian Rooseman en ik ben een ambitieuze jonge man van
            17 jaar oud. Momenteel volg ik de opleiding Software Developer MBO 4
            aan het Grafisch Lyceum. Naast mijn studie ben ik ook erg
            geïnteresseerd in het ontwikkelen van software en code, en ik ben
            altijd op zoek naar manieren om mijn vaardigheden te verbeteren.
          </p>
          <p className=" py-2 text-gray-600 ">
          Wat onderscheidt mij van andere software developers is mijn breed scala aan vaardigheden en mijn passie voor het vak. Ik ben niet alleen goed met PHP en SQL en databases, maar werk ook met moderne technologieën zoals Tailwind en Next.js. Daarnaast beheers ik HTML, CSS en JavaScript op een hoog niveau. Ik ben constant bezig met het verbeteren van mijn vaardigheden en blijf op de hoogte van de laatste ontwikkelingen in de branche.
          </p>
          <Link href='/#project '>
          <p className=" py-2 text-gray-600 underline cursor-pointer ">
            Kijk naar me laaste projecten
          </p></Link>
        </div>
        <div className=" w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            className="rounded-xl"
            src="/../public/assets/gezicht.jpg"
            alt=""
            width={1000}
            height="2000"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
