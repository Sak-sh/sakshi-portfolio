import React from 'react';
import './style.css'; // Make sure your CSS is properly imported
import './Home.css';

// Replace these URLs with your actual photo and social links
const photoUrl = '/path/to/your-photo.jpg';
const githubUrl = 'https://github.com/yourusername';
const linkedinUrl = 'https://linkedin.com/in/yourprofile';

const Home = () => {
  return (
    <section
      id="home"
      className="home-section"
      style={{ minHeight: '100vh', paddingTop: '60px', paddingBottom: '60px' }}
    >
      <div className="home-container">
        <div className="intro">
          <h2 className="display-4">Hello, I'm Sakshi Chavan</h2>
           <p>I am a passionate developer focused on building responsive and engaging web applications using modern technologies.A web developer specializing in frontend development, building robust backend systems, and solving complex problems with creative, efficient solutions.</p>

          <div className="btn-social-group">
           <a href="https://drive.google.com/file/d/1bQ98KGOAnc5uOk_2QZTT6ESUtUmcSD5i/view?usp=sharing" download class="btn-emerald">
  Download Resume
</a>

            <div className="social-icons">
              <a href="https://github.com/Sak-sh" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <img src="/git.webp" alt="GitHub" className="social-icon1" />
              </a>
              <a href="https://www.linkedin.com/in/sakshi-chavan-721935291" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <img src="/linkedin.webp" alt="LinkedIn" className="social-icon2" />
              </a>
            </div>
          </div>
        </div>

        <div className="photo-container">
          <img src="/profile_photo.jpeg" alt="My Portrait" className="profile-photo" />
        </div>
      </div>
    </section>
  );
};

export default Home;
