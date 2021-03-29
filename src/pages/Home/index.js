import React, { memo } from "react";
import Typical from "react-typical";
import Fade from "react-reveal/Fade";

import Button from "@/components/button";
import { HomeWrapper } from "./style";
import greetings from "@/assets/images/greeting.png";
import { useHistory } from "react-router";

export default memo(function Home() {
  const history = useHistory();
  const toggleClick = () => {
    history.push("/about");
  };
  return (
    <HomeWrapper>
      <Fade bottom cascade>
        <div>
          <h2>
            Hello!{" "}
            <span role="img" aria-label="wave">
              👋🏻
            </span>
          </h2>
          <h2 className="intro">
            I am <em>Shirley Huang</em>. A front-end developer focused on{" "}
            <Typical
              steps={[
                "building beautiful user interface.",
                1500,
                "provide quality user experience.",
                1000,
              ]}
              loop={Infinity}
              wrapper="span"
            />
          </h2>
          <Button
            btnContent="Know More"
            btnWidth="125px"
            toggleClick={toggleClick}
          />
        </div>
      </Fade>
      <Fade right>
        <img src={greetings} alt="greetings" />
      </Fade>
    </HomeWrapper>
  );
});
