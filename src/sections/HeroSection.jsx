import React, { useRef } from "react";
import image from "../assests/image.png";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Button from "../components/button";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const HeroSection = () => {
  const sectiontag = useRef();
  const heroref = useRef();
  const h1tag = useRef();
  const h2tag = useRef();
  const imgtag = useRef();

  useGSAP(
    () => {
      SplitText.create(h1tag.current, {
        type: "lines,words",
        mask: "lines",
        autoSplit: true,
        onSplit(self) {
          gsap.from(self.words, {
            y: 100,
            opacity: 0,
            stagger: 0.2,
            duration: 1.5,
            delay: 0.5,
          });
        },
      });

      SplitText.create(h2tag.current, {
        type: "lines,words",
        mask: "lines",
        autoSplit: true,
        onSplit(self) {
          gsap.from(self.words, {
            y: 100,
            opacity: 0,
            stagger: 0.2,
            duration: 1.5,
            delay: 0.5,
          });
        },
      });

      gsap.from(sectiontag.current, {
        opacity: 0,
        duration: 2,
      });

      gsap.from(imgtag.current, {
        rotate: 160,
        scale: 0.5,
        opacity: 0,
        duration: 2,
        delay: 1,
      });
    },
    { scope: heroref },
  );

  return (
    <>
      <section
        ref={sectiontag}
        className="bg-black -z-10 relative overflow-hidden"
      >
        <div
          ref={heroref}
          className="main-container herosection h-screen lg:py-12 flex flex-col lg:justify-center items-start max-lg:pt-40 mt-10 max-sm:ml-3"
        >
          <h1
            ref={h1tag}
            id="classForLines"
            className=" text-3xl lg:text-[3.2vw] font-heading font-semibold"
          >
            OWAIS REHMAN
          </h1>
          <h2
            ref={h2tag}
            className="z-10 text-6xl lg:text-[8vw] font-heading font-bold leading-[1] mt-3 mb-6"
          >
            Web Developer <br /> &{" "}
            <span className="text-stroke">
              Digital Media
              <br />
              Designer
            </span>
          </h2>
          <Button text="let's Talk" color="btn hover" />
        </div>

        <div>
          <img
            ref={imgtag}
            src={image}
            alt="material"
            className="absolute -z-1 h-[40vh] lg:h-[90vh] top-15 right-10 max-md:top-35 max-lg:top-35 max-sm:top-50 max-md:right-0"
          />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
