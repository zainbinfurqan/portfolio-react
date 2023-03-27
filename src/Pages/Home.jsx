import React from "react";
import Navigation from "../Components/Navigation";
const Home = () => {
  return (
    <>
      <Navigation />
      <div className="contaner">
        <div className="row">
          <div className="heading-title-animation">
            <h2> Hassan Farooq</h2>
          </div>
          <div className="front-end-animation">Front-End Web Developer</div>
        </div>
        <div class="social-menu">
          <ul>
            <li>
              <a href="https://github.com/hsnfarooq99" target="blank">
                <i class="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/hassanfarooq258/"
                target="blank"
              >
                <i class="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
