import React from "react";
import { Redirect } from "react-router";
const Home = React.lazy((_) => import("@/pages/Home"));
const About = React.lazy((_) => import("@/pages/About"));
const Portfolio = React.lazy((_) => import("@/pages/Portfolio"));

const routes = [
  {
    path: "/",
    exact: true,
    render: () => <Redirect to="/home" />,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/portfolio",
    component: Portfolio,
  },
];

export default routes;
