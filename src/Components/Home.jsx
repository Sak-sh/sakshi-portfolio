import React from 'react';
import './style.css';
import './Home.css';

const Home = () => {
  return (
    <section
      id="home"
      className="home-section"
      style={{ minHeight: '100vh', paddingTop: '60px', paddingBottom: '60px' }}
    >
      <div className="home-container">
        <div className="intro fade-in">
         <br></br> <h2 className="display-4">Hello, I'm Sakshi Chavan</h2><br></br>
          <p>
            I am a passionate developer focused on building responsive and engaging web
            applications using modern technologies. A web developer specializing in frontend
            development, building robust backend systems, and solving complex problems with
            creative, efficient solutions.
          </p>
<br></br>
          <div className="btn-social-group">
            <a
              href="https://drive.google.com/file/d/1MseLSgAMJpOiQ7lzJ_rgI_zgasUrl7E4/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-emerald btn-hover"
              aria-label="Download Resume"
            >
              Download Resume
            </a>

            <div className="social-icons">
              <a
                href="https://github.com/Sak-sh"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="social-link"
              >
                <img src="/git.webp" alt="GitHub" className="social-icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/sakshi-chavan-721935291"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="social-link"
              >
                <img src="/linkedin.webp" alt="LinkedIn" className="social-icon" />
              </a>
            </div>
          </div>
        </div><br></br>

        <div className="photo-container">
          
        <img
  src="/profile_photo.jpeg"
  alt="My Portrait"
  className="circle-photo interactive-border"
/></div>


        
      </div>
    </section>
  );
};

export default Home;
