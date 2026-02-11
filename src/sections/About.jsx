import { ScrollTrigger, SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { MdOpacity } from "react-icons/md";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const About = () => {
  const aboutsection = useRef();
  const text = useRef();

  useGSAP(() => {
    SplitText.create(text.current, {
      type: "lines, chars",
      onSplit(self) {
        gsap.set(self.chars, {
          opacity: 0.25,
        });

        gsap.to(self.chars, {
          opacity: 1,
          stagger: 0.05,
          scrollTrigger: {
            trigger: aboutsection.current,
            start: "top 70%",
            end: "center center  ",
            scrub: 1,
          },
        });
      },
    });
  });

  return (
    <>
      <div
        ref={aboutsection}
        className=" z-10 h-screen bg-black w-full  border-black"
      >
        <div
          ref={text}
          className="bg-white rounded-t-[5rem] description pl-30 pr-30 py-4 lg:py-14 h-full flex justify-center items-center font-heading text-black text-2xl md:text-3xl xl:text-5xl leading-[1.25] font-semibold"
        >
          As a Frontend Developer, I create responsive and interactive web apps
          using React, JavaScript, HTML, and CSS. I’ve worked on real projects
          like dashboards, login systems, and dynamic UI elements. I make sure
          the code is easy to maintain, connect with APIs, and build interfaces
          that are smooth and easy for users to work with.
        </div>
      </div>
    </>
  );
};

export default About;
