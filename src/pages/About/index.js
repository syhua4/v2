import React, { memo } from "react";
import { Col, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import { RiMedalFill, RiMedalLine } from "react-icons/ri";

import Button from "@/components/button";
import { AboutWrapper } from "./style";
import coffee from "@/assets/images/coffee.png";

export default memo(function About() {
  const learntTech = [
    "HTML/CSS",
    "JavaScript (ES6+)",
    "VueJs",
    "ReactJs",
    "NodeJs",
    "Restful API",
  ];
  const futureTech = ["TypeScript", "NextJs", "Gatsby"];
  const toggleClick = () => {
    const resume = window.open(
      "https://syhua4.github.io/v2/ShirleyHuangResume.pdf",
      "_blank"
    );
    resume.focus();
  };
  return (
    <AboutWrapper>
      <Row className="align-items-center">
        <Col className="about-content col-12 col-md-8 ">
          <Fade top>
            <h2 className="header-underlined">About Me</h2>
          </Fade>

          <Fade bottom>
            <div>
              Hello! I'm Shirley, a web developer based in Melbourne, VIC.
              I recently graduated from <span>Monash University</span>.
            </div>
            <div>
              I enjoy the process of turning simple ideas into a fantastic
              website. My goal is to build projects that provide the best
              user experiences constantly.
            </div>
            <div>
              I am a <span>passionate & dedicated learner</span>. I love to
              learn about new web development technologies. Here are some
              technologies that I have worked with:
            </div>
            <ul className="learnt">
              {learntTech.map((item) => {
                return (
                  <li key={item}>
                    <RiMedalFill />
                    {item}
                  </li>
                );
              })}
            </ul>
            <div>My current and future learning list:</div>
            <ul className="future">
              {futureTech.map((item) => {
                return (
                  <li key={item}>
                    <RiMedalLine />
                    {item}
                  </li>
                );
              })}
            </ul>
            <Button
              btnContent="Download CV"
              btnWidth="150px"
              toggleClick={toggleClick}
            />
          </Fade>
        </Col>
        <Col className="about-animation col-12 col-md-4">
          <Fade right>
            <img
              src={coffee}
              alt="coffee illustration"
              className="coffee"
            />
          </Fade>
        </Col>
      </Row>
    </AboutWrapper>
  );
});
