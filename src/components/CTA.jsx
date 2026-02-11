import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import React, { useRef } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io";

const CTA = () => {
  const texttags = useRef();
  const parenttg = useRef();
  const icontag = useRef();
  const anchtag = useRef();

  useGSAP(() => {
    SplitText.create(texttags.current, {
      type: "lines,words",
      mask: "lines",
      autoSplit: true,
      onSplit(self) {
        gsap.from(self.words, {
          y: 100,
          opacity: 0,
          stagger: 0.2,
          duration: 1,
          scrollTrigger: {
            trigger: parenttg.current,
            scroller: document.body,
            start: "top 50%",
            end: "top -300%",
          },
        });
      },
    });

    gsap.from(icontag.current.children, {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: texttags.current,
        scroller: document.body,
        start: "top 50%",
        end: "top -300%",
      },
    });
  });

  return (
    <>
      <div ref={parenttg} className="text-black bg-gray-200">
        <div className="main-container py-10 lg:pt-28 h-full flex flex-col justify-center items-center">
          <h4
            ref={texttags}
            className="max-w-6xl text-2xl lg:text-5xl text-center leading-[1.25]"
          >
            Freelance projects, collaborations and full-time opportunities.
            let's get accquainted
          </h4>
        </div>
        <div
          ref={icontag}
          className="text-black flex text-6xl justify-center items-center gap-10"
        >
          <a ref={anchtag} href="">
            <AiFillInstagram />
          </a>
          <a href="">
            <IoLogoLinkedin />
          </a>
        </div>
      </div>
    </>
  );
};

export default CTA;
