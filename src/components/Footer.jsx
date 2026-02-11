import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io";

const Footer = () => {
  const maindiv = useRef();

  useGSAP(() => {
    gsap.from(maindiv.current.children, {
      opacity: 0.5,
      delay: 0.5,
      duration: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: maindiv.current,
        scroller: document.body,
        start: "top 80%",
        end: "top -300%",
      },
    });
  });

  return (
    <>
      <div ref={maindiv} className="bg-gray-200 text-black">
        <div className="main-container py-20 flex justify-center gap-80 items-start">
          <div className="services flex flex-col gap-4">
            <h1 className="font-extrabold">Services</h1>
            <p className="text-gray-400 text-lg">Front-end Developement</p>
            <p className="text-gray-400">Designer</p>
            <p className="text-gray-400">Video editor</p>
          </div>
          <div className="Accessbility flex flex-col gap-4">
            <h1>Accessbility</h1>
            <p className="text-gray-400">Mon-Fri, 9:00 - 5:00</p>
            <p className="text-gray-400">24/7 Whatsapp & Email</p>
          </div>
          <div className="Contact flex flex-col gap-4">
            <h1>Contact</h1>
            <p className="text-gray-400">owaisrehman6790@gmail</p>
            <p className="text-gray-400">+923452181651</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
