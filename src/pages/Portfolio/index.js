import React, { memo } from "react";
import Fade from "react-reveal/Fade";
import { Col, Row } from "react-bootstrap";

import { PortfolioWrapper } from "./style";
import Button from "@/components/button";
import bushlandscouts from "@/assets/images/bushlandscouts_mockup.jpg";
import pearmusic from "@/assets/images/pearmusic_mockup.jpg";
import peartv from "@/assets/images/peartv_mockup.png";

export default memo(function Portfolio() {
  const projects = [
    {
      name: "PearTV Web App",
      tags: [
        "React",
        "React-router",
        "Redux",
        "Hooks",
        "Styled Components",
        "Node",
        "MongoDB",
        "RestFul API",
      ],
      description:
        "PearTV web app is a movie database that IMDb and TMDb inspire. The website allows user to search, find ratings and reviews for the newest movie with the help of TMDb's API service.",
      mockup: peartv,
      url: "https://peartv-308208.ts.r.appspot.com/",
      github: "https://github.com/syhua4/pear-tv",
    },
    {
      name: "PearMusic Mobile Web App",
      tags: ["Vue", "Scss", "Node", "NetEaseAPI"],
      description:
        "PearMusic web app is a mobile web application inspired by a Chinese music platform - NetEase Music. The website provides users with the ability to get recommendations, search tracks, playlists, and audio features that a music player has.",
      mockup: pearmusic,
      url: "https://pearmusic.online/",
      github: "https://github.com/syhua4/pear-music-app",
    },

    {
      name: "Bushland Scouts Website",
      tags: ["Vue", "Scss", "Node", "RestFul API", "Express", "MySQL"],
      description:
        "Bushland Scouts is a website that aims to help young children to raise awareness on bushland preservation. The website provides users with the ability to check nearby weeds, know the weed species and report on suspicious weeds.",
      mockup: bushlandscouts,
      url: "https://bushlandscouts.tk/",
      github: "https://github.com/syhua4/BushlandScouts",
    },
  ];

  const toggleClick = (url) => {
    const link = window.open(url, "_blank");
    link.focus();
  };
  return (
    <PortfolioWrapper>
      <Fade top>
        <h2 className="header-underlined">Portfolio</h2>
      </Fade>
      {projects.map((project) => {
        return (
          <Row key={project.name} className="align-items-center project">
            <Col className="col-12 col-md-4 project-info">
              <Fade bottom>
                <h3>{project.name}</h3>
                <div className="tags">
                  {project.tags.map((tag) => {
                    return <span key={tag}>{tag}</span>;
                  })}
                </div>
                <div>{project.description}</div>
                <div className="links">
                  <Button
                    btnContent="See Live"
                    btnWidth="90px"
                    toggleClick={(e) => toggleClick(project.url)}
                  />
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Source Code
                  </a>
                </div>
              </Fade>
            </Col>
            <Col className="col-12 col-md-8 project-img">
              <Fade right>
                <img src={project.mockup} alt={project.name} />
              </Fade>
            </Col>
          </Row>
        );
      })}
    </PortfolioWrapper>
  );
});
