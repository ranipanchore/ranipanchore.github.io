import React from "react";
import TechStack from "./TechStack";

const Hero = () => {
 let  myProfile = {
  width: "25%",
 
 }
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-main">
          <div className="hero-overall">
            <div className="hero-text">
              <h1>
                Full Stack Developer{" "}
                <span>
                  <img src="assets/wave hand.png" />
                </span>
              </h1>
              <p>
               Hi, I am Rani Sharma. Passionate Full Stack Developer. Work with mern stack and mean stack.
               <br/>
               Feel Free to connect with me.
              </p>
              <div className="profile-links">
                <a href="https://github.com/ranipanchore">
                  <i class="fa-brands fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/ranipanchore">
                  <i class="fa-brands fa-linkedin"></i>
                </a>
              </div>
            </div>
            <img src="assets/my-profile.jpg" alt="profile" id="myProfile"/>
          </div>

          <TechStack />
        </div>
      </div>
    </section>
  );
};

export default Hero;
