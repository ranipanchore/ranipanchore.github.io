import React from "react";

const Portfolio = () => {
  return (
    <section className="portfolio" id="projects">
      <div className="container">
        <h3>PORTFOLIO</h3>
        <h1>Each project is a unique piece of development</h1>
        <div className="all-projects">
          <div className="project-reverse">
            <div className="project-text">
              <h3>Hospital - Dr. Appointment APP</h3>
              <p className="project-desc">
              A Hospital Doctor Appointment App is a mobile application 
              that allows patients to book, manage, and track their medical
              appointments with doctors. The app typically offers features
              like searching for doctors by specialty,time slots.
              </p>
              <div className="project-stack">
                <p>Angular</p>
                <p>RxJs</p>
                <p>Node</p>
                <p>MongoDB</p>
                <p>JWT</p>
                <p>CSS</p>
                <p>Material UI</p>
              </div>
              <div className="project-links">
                <a href="https://github.com/ranipanchore/AuthApiHospital" target="_blank">
                  Code
                  <i class="fa-brands fa-github"></i>
                </a>
                <a href="https://github.com/ranipanchore/AuthApiHospital" target="_blank">
                  Live Demo
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
            <div className="project-img">
              <a
                href=""
                target="_blank"
              >
                <img src="assets/Task_UI_Pages/Hospital_dashboard.png" alt="social-media-app" />
              </a>
            </div>
          </div>

          <div className="project">
            <div className="project-img">
              <a href="https://github.com/ranipanchore/serverSideRenderNG" target="_blank">
                <img src="assets/Task_UI_Pages/JobPortal_dashboard.png" alt="motor-rental" />
              </a>
            </div>
            <div className="project-text">
              <h3>JOB PORTAL</h3>
              <p className="project-desc">
                {/* A motorbike rental website is an online platform that allows
                users to rent motorbikes for personal or business use. The
                website provides an interface for searching, comparing, and
                reserving cars. */}
                A Job Portal is an online platform that connects job seekers 
                with employers. It allows candidates to create profiles, upload 
                resumes, search for job openings, and apply directly to positions
                across various industries.
              </p>
              <div className="project-stack">
                <p>Angular/CLI</p>
                <p>Material UI</p>
                <p>Typescript</p>
                <p>Rxjs</p>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/ranipanchore/serverSideRenderNG"
                  target="_blank"
                >
                  Code
                  <i class="fa-brands fa-github"></i>
                </a>
                <a href="https://github.com/ranipanchore/serverSideRenderNG" target="_blank">
                  Live Demo
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="project-reverse">
            <div className="project-text">
              <h3>Video Conferencing</h3>
              <p className="project-desc">
                {/* A gym website is a comprehensive resource for fitness
                information, class schedules, membership options, and tools to
                help users achieve their fitness goals. */}
                The frontend implements features like joining, scheduling, 
                muting, and chat. Additional security features like unique 
                meeting IDs and password protection ensure privacy.
              </p>
              <div className="project-stack">
                <p>Angular/CLI</p>
                <p>SCSS</p>
                <p>Typescript</p>
              </div>
              <div className="project-links">
                <a href="https://github.com/ranipanchore/Video-Confressing-UI" target="_blank">
                  Code
                  <i class="fa-brands fa-github"></i>
                </a>
                <a
                  href="https://github.com/ranipanchore/Video-Confressing-UI"
                  target="_blank"
                >
                  Live Demo
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
            <div className="project-img">
              <a
                href="https://github.com/ranipanchore/Video-Confressing-UI"
                target="_blank"
              >
                <img src="assets/Task_UI_Pages/promeet_dashboard.png" alt="fitfinity-gym-center" />
              </a>
            </div>
          </div>

          <div className="project">
            <div className="project-img">
              <a href="https://phucmaicryptoverse.netlify.app/" target="_blank">
                <img src="assets/Task_UI_Pages/Quick_job_manager_dashboard.png" alt="cryptoverse" />
              </a>
            </div>
            <div className="project-text">
              <h3>QUICK JOB MANAGER</h3>
              <p className="project-desc">
                {/* Cryptocurrencies Website with in-depth data about all coins,
                crypto markets and popular news. Fetch data from 2 different
                sources using Rapid Api. Create charts of market prices in
                real-time using Chart.js */}
                Quick Job Manager is an app designed to help users manage 
                and organize job tasks efficiently. It allows users to create,
                assign, and track tasks or projects, set deadlines, and 
                monitor progress in real-time. 
              </p>
              <div className="project-stack">
                <p>Angular</p>
                <p>Material UI</p>
                <p>RXJS</p>
                <p>Typescript</p>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/ranipanchore"
                  target="_blank"
                >
                  Code
                  <i class="fa-brands fa-github"></i>
                </a>
                <a
                  href="https://github.com/ranipanchore"
                  target="_blank"
                >
                  Live Demo
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
          </div>

          {/* <div className="project-reverse">
            <div className="project-text">
              <h3>YOUTUBE MEDIA</h3>
              <p className="project-desc">
                YouTube Clone to play media from RapidAPI with video section,
                custom categories, responsive channel & video cards. Allow users
                to play the video straight from the app and see related videos
                on the right side
              </p>
              <div className="project-stack">
                <p>React</p>
                <p>Material UI</p>
                <p>Javascript</p>
                <p>RapidApi</p>
                <p>Redux</p>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/ranipanchore/youtube_clone"
                  target="_blank"
                >
                  Code
                  <i class="fa-brands fa-github"></i>
                </a>
                <a href="https://phuc-mai-media.netlify.app/" target="_blank">
                  Live Demo
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
            <div className="project-img">
              <a href="https://phuc-mai-media.netlify.app/" target="_blank">
                <img src="assets/Task_UI_Pages/bigBasket.png" alt="youtube" />
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
