import React from 'react';
import './About.css';
import { FaUserGraduate } from 'react-icons/fa';
const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-heading">
 <FaUserGraduate style={{ marginRight: '12px', color: '#00ffae' }} /> ABOUT ME</h2>
        <div className="about-card fade-in">
          <p>
            Hi, I’m <strong>Sakshi Chavan</strong>, a passionate full-stack web developer currently pursuing my Bachelor of Engineering in Computer Engineering at <strong>Dr. D. Y. Patil College of Engineering, Akurdi, Pune</strong>. 
            I have successfully completed my diploma from <strong>Government Polytechnic Karad</strong>.
          </p>
          <p>
            My expertise lies in building full-stack applications using modern technologies like <strong>JavaScript</strong>, <strong>React.js</strong>, <strong>Node.js, Express.js</strong>, <strong>MongoDB</strong>, . I love solving complex problems and turning creative ideas into real-world projects.
          </p>
          <p>
            Apart from coding, I enjoy learning new technologies, collaborating with teams, and continuously improving my skills to build efficient and scalable web solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
