import React, { useRef } from "react";
import tereimg from "../assests/tere web.jpg";
import JPimg from "../assests/jenna portfolio.jpg";
import JNimg from "../assests/JN web clone.jpg";
import QAimg from "../assests/quiz app.jpg";
import ETimg from "../assests/expense tracker.jpg";
import ProjectCards from "../components/ProjectCards";
import Button from "../components/button";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const projects = [
  {
    id: 1,
    name: "Tere Web",
    image: tereimg,
  },
  {
    id: 2,
    name: "Portfolio Practice ",
    image: JPimg,
  },
  {
    id: 1,
    name: "JN web clone",
    image: JNimg,
  },
  {
    id: 1,
    name: "Quiz App",
    image: QAimg,
  },
  {
    id: 1,
    name: "Expense tracker",
    image: ETimg,
  },
];

const Work = () => {
  const PTtag = useRef();
  const worktag = useRef();
  const projtag = useRef();

  useGSAP(() => {
    SplitText.create(worktag.current, {
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
            trigger: PTtag.current,
            scroller: document.body,
            start: "top 50%",
            end: "top -300%",
          },
        });
      },
    });

    gsap.from(PTtag.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: PTtag.current,
        scroller: document.body,
        start: "top 60%",
        end: "top -300%",
      },
    });

    gsap.from(projtag.current.children, {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: PTtag.current,
        scroller: document.body,
        start: "top 60%",
        end: "top -300%",
      },
    });
  });

  return (
    <>
      <div
        ref={PTtag}
        className="h-screen bg-black text-white py-24 lg:py-40 sticky"
      >
        <div className="main-container flex justify-between items-center">
          <div ref={worktag}>
            <h2 className="text-4xl font-heading font-bold">Work</h2>
            <p className="text-lg">A showcase if my projects.</p>
          </div>
          <Button text="EXPLORE ALL" color="btn-white" />
        </div>

        <div
          ref={projtag}
          className="overflow-container main-container overflow-x-scroll overflow-y-hidden flex gap-4 mt-15 pb-8"
        >
          {projects.map((item, index) => {
            return (
              <ProjectCards key={index} image={item.image} name={item.name} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Work;
