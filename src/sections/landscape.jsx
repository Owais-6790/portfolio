import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Landscape = () => {
  const h1tag = useRef();
  const parentTag = useRef();

  useEffect(() => {
    gsap.to(h1tag.current, {
      transform: "translateX(-456%)",
      scrollTrigger: {
        trigger: parentTag.current,
        scroller: document.body,
        start: "top 20%",
        end: "top -300%",
        scrub: 1,
        pin: true,
      },
    });

    gsap.from(h1tag.current, {
      x: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: parentTag.current,
        scroller: document.body,
        start: "top 50%",
        end: "top -300%",
      },
    });
  }, []);

  return (
    <>
      <div ref={parentTag} className="overflow-hidden py-5 bg-black text-white">
        <h1
          ref={h1tag}
          className="text-[25vw] whitespace-nowrap font-heading font-extrabold"
        >
          <span id="Create">CREATE</span>
          <span className="designer-text"> DESIGN</span>
          <span className="bg-white text-black rounded-full pl-40 pr-40 mx-40">
            {" "}
            INSPIRE
          </span>
        </h1>
      </div>
    </>
  );
};

export default Landscape;
