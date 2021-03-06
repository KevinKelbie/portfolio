import React, { useState } from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Link } from "react-router-dom";

import Projects from "../Projects/Projects.jsx";
import Sandboxes from "../Sandboxes/Sandboxes.jsx";

import "../styles.css";

import styled from "styled-components";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

library.add(faGithub);

function About(props) {
  return (
    <div {...props}>
      <h1>Kevin Kelbie</h1>
      <div className="socials">
        <a href="https://github.com/KevinKelbie">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://linkedin.com/in/kelbie/">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
      </div>
      <div className="links">
        <span>
          <a href="/projects">Projects</a>
        </span>
        <span>
          <a href="/sandboxes">Sandboxes</a>
        </span>
        <span>
          <a href="/cv.pdf">Resume</a>
        </span>
      </div>
    </div>
  );
}

About = styled(About)`
  color: #4a5568;
  text-align: center;
  margin-top: 100px;
  margin-bottom: 100px;
  h1 {
    font-size: 32px;
  }

  svg {
    cursor: pointer;
    font-size: 18px;
    color: #4a5568;
  }

  .socials {
    display: flex;
    justify-content: space-evenly;
    width: 64px;
    margin: auto;
  }

  .links {
    color: #718096;
    > * {
      color: inherit;
      margin: 4px;
      > a {
        color: inherit;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

function Router(props) {
  return (
    <BrowserRouter>
      <div {...props}>
        <About />
        <>
          <Route path="/(projects)?" exact component={Projects} />
          <Route path="/sandboxes" exact component={Sandboxes} />
        </>
      </div>
    </BrowserRouter>
  );
}

Router = styled(Router)`
  margin: auto;
  width: 800px;
  max-width: 100%;
`;

export default Router;
