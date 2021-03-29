import React, { memo, useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";

import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { IoClose, IoMenu } from "react-icons/io5";

import { SideNavWrapper } from "./style";

export default memo(function SideNav() {
  const history = useHistory();
  const location = useLocation();
  const [activeKey, setActiveKey] = useState("home");
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    if (showNav) {
      window.scrollTo(0, 0);
      document.body.classList.add("prevent_scroll");
    } else {
      document.body.classList.remove("prevent_scroll");
    }
    const path = location.pathname.split("/")[1];
    if (path !== activeKey) {
      setActiveKey(path);
    }
  }, [showNav, location, activeKey]);

  const changeActiveKey = (key) => {
    if (key !== "resume") {
      setActiveKey(key);
      history.push(`/${key}`);
      setShowNav(false);
    } else {
      const resume = window.open(
        "https://syhua4.github.io/v2/ShirleyHuangResume.pdf",
        "_blank"
      );
      resume.focus();
    }
  };

  const toggleSocialBtn = (link) => {
    let url = "";
    link === "github"
      ? (url = "https://github.com/syhua4")
      : (url = "https://linkedin.com/in/shirley-huang-867bb0141/");
    const socialBtn = window.open(url, "_blank");
    socialBtn.focus();
  };
  return (
    <SideNavWrapper className="col-12 " showNav={showNav}>
      <div className="side-nav flex-column justify-content-between d-none d-md-flex">
        <h1 className="nav-brand">
          <div
            className="nav-brand-img"
            onClick={(e) => history.push("/")}
          >
            Shirley Huang
          </div>
        </h1>
        <Nav
          className="sidebar flex-wrap"
          activeKey={activeKey}
          onSelect={(selectedKey) => changeActiveKey(selectedKey)}
        >
          <Nav.Item>
            <Nav.Link eventKey="home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="about">About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="portfolio">Portfolio</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="resume">Resume</Nav.Link>
          </Nav.Item>
        </Nav>

        <div className="footer">
          <div className="social-links">
            <span
              className="github"
              onClick={(e) => toggleSocialBtn("github")}
            >
              <FaGithubSquare />
            </span>
            <span
              className="linkedIn"
              onClick={(e) => toggleSocialBtn("linkedIn")}
            >
              <FaLinkedin />
            </span>
          </div>

          <p>Designed and built by Shirley Huang</p>
        </div>
      </div>
      <div
        className="nav-collapse"
        onClick={(e) => {
          setShowNav(!showNav);
        }}
      >
        {showNav ? <IoClose /> : <IoMenu />}
      </div>
      <div className="collaspse-menu">
        <div className="side-nav flex-column justify-content-between">
          <h1 className="nav-brand">
            <div
              className="nav-brand-img"
              onClick={(e) => history.push("/")}
            >
              Shirley Huang
            </div>
          </h1>
          <Nav
            className="sidebar flex-wrap"
            activeKey={activeKey}
            onSelect={(selectedKey) => changeActiveKey(selectedKey)}
          >
            <Nav.Item>
              <Nav.Link eventKey="home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="portfolio">Portfolio</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="resume">Resume</Nav.Link>
            </Nav.Item>
          </Nav>

          <div className="footer">
            <div className="social-links">
              <span
                className="github"
                onClick={(e) => toggleSocialBtn("github")}
              >
                <FaGithubSquare />
              </span>
              <span
                className="linkedIn"
                onClick={(e) => toggleSocialBtn("linkedIn")}
              >
                <FaLinkedin />
              </span>
            </div>

            <p>Designed and built by Shirley Huang</p>
          </div>
        </div>
      </div>
    </SideNavWrapper>
  );
});
