import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const Navbar = () => {
  const navtag = useRef();
  const h1tag = useRef();
  const links = useRef();

  useEffect(() => {
    const timeline = gsap.timeline();

    timeline.from(navtag.current, {
      y: -200,
      opacity: 0,
      duration: 1.5,
    });

    timeline.from(h1tag.current, {
      opacity: 0,
      y: -30,
      duration: 0.8,
    });

    timeline.from(links.current.children, {
      opacity: 0,
      y: -30,
      duration: 0.8,
      stagger: 0.3,
    });
  }, []);

  return (
    <nav className="fixed w-full top-4 z-1">
      <div
        ref={navtag}
        className="main-container flex justify-between w-11/12 items-center text-black bg-white p-8 rounded-3xl border-2 border-black shadow-2xl"
      >
        <h1 ref={h1tag} className="text-3xl font-heading font-bold">
          PORTFOLIO
        </h1>
        <ul ref={links} className="flex justify-center items-center gap-8">
          <li>
            <a
              href="#heroDiv"
              className="navlinkdefaultpadding hovertransitions transition-all duration-500"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#heroDiv"
              className="navlinkdefaultpadding hovertransitions transition-all duration-500"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="navlinkdefaultpadding hovertransitions transition-all duration-500"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#"
              className="navlinkdefaultpadding hovertransitions transition-all duration-500"
            >
              Work
            </a>
          </li>
          <li>
            <a
              href="#"
              className="navlinkdefaultpadding hovertransitions transition-all duration-500"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
