import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const Services = () => {
  const partTag = useRef();
  const fDtag = useRef();
  const Dtag = useRef();
  const VEtag = useRef();

  useGSAP(() => {
    gsap.from(fDtag.current, {
      x: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: partTag.current,
        scroller: document.body,
        start: "top 40%",
        end: "top -300%",
      },
    });
    gsap.from(Dtag.current, {
      x: -100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: Dtag.current,
        scroller: document.body,
        start: "top 60%",
        end: "top -300%",
      },
    });
    gsap.from(VEtag.current, {
      x: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: VEtag.current,
        scroller: document.body,
        start: "top 80%",
        end: "top -300%",
      },
    });
  });

  return (
    <>
      <div className="bg-white text-black">
        <div className="main-container pb-8 lg:pb-12 ">
          <h3 className="font-bold">Services in Details</h3>
        </div>
      </div>

      <div ref={partTag} className="relative">
        <div
          ref={fDtag}
          className=" bg-black text-white pt-16 lg:pb-[55rem] sticky top-20 "
        >
          <div className="main-container flex max-md:flex-col justify-between gap-10 items-center">
            <div className="left-side flex gap-10 items-center w-full justify-start max-md:gap-4">
              <p className="text-gray-400">01</p>
              <h3 className="text-5xl min-lg:w-[29rem] text-stroke font-heading font-semibold max-lg:text-3xl">
                Frontend <br />
                Developement
              </h3>
            </div>
            <p className="ml-50 max-xl:m-0">
              As a Frontend Developer, I create responsive and interactive web
              apps using React, JavaScript, HTML, and CSS. I’ve worked on real
              projects like dashboards, login systems, and dynamic UI elements.
              I make sure the code is easy to maintain, connect with APIs, and
              build interfaces that are smooth and easy for users to work with.
            </p>
          </div>
        </div>
        <div className=" gradient-background text-white py-16 lg:pb-[40rem] sticky top-80">
          <div
            ref={Dtag}
            className="main-container flex max-md:flex-col justify-between gap-10 items-center"
          >
            <div className="left-side flex gap-10 items-center w-full justify-start max-md:gap-4">
              <p className="text-gray-400">02</p>
              <h3 className="text-5xl max-xl:w-[18rem] min-lg:w-[29rem] font-heading font-semibold max-lg:text-3xl">
                Media Designing
              </h3>
            </div>
            <p className="ml-50 max-xl:m-0">
              As a Frontend Developer, I create responsive and interactive web
              apps using React, JavaScript, HTML, and CSS. I’ve worked on real
              projects like dashboards, login systems, and dynamic UI elements.
              I make sure the code is easy to maintain, connect with APIs, and
              build interfaces that are smooth and easy for users to work with.
            </p>
          </div>
        </div>
        <div className=" bg-white text-black py-16 lg:pb-[25rem] sticky top-20">
          <div
            ref={VEtag}
            className="main-container flex max-md:flex-col justify-between gap-10 items-center"
          >
            <div className="left-side flex gap-10 items-center w-full justify-start max-md:gap-4">
              <p className="text-gray-400">03</p>
              <h3 className="text-5xl w-2xs min-lg:w-[29rem] designer-text font-heading font-semibold max-lg:text-3xl">
                Video <br />
                Editing
              </h3>
            </div>
            <p className="ml-50 max-xl:m-0">
              As a Frontend Developer, I create responsive and interactive web
              apps using React, JavaScript, HTML, and CSS. I’ve worked on real
              projects like dashboards, login systems, and dynamic UI elements.
              I make sure the code is easy to maintain, connect with APIs, and
              build interfaces that are smooth and easy for users to work with.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
