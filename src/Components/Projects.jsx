import React from 'react';
import './Project.css';
import './style.css';

const Projects = () => {
  return (
    <section id="project" className="py-5 text-center">
      <h2>PROJECTS</h2>
      <div className="project-container">
        <div className="project-row">
          {/* Card 1 */}
          <div className="project-card">
            <h4>A Digital Platform for Book Sharing (One-Way Swap Model)</h4>

            <p className="project-description">
              Built a responsive MERN stack book swapping platform with JWT-based authentication, allowing users to
              give away books and send one-sided swap requests. Implemented request tracking, owner approval/rejection,
              and personalized profiles using React and Tailwind CSS.
            </p>
            <a href="/Project1" className="learn-more-btn">Learn More</a>
          </div>

          {/* Card 2 */}
          <div className="project-card">
            <h4>Interlinked platform for campus placement in Government Polytechnic Karad</h4>

            <p className="project-description">
              Developed a Campus Placement System using PHP with separate logins for students, companies, and admins.
              Enabled resume uploads, candidate management, and rule enforcement to streamline the recruitment process.
            </p>
            <a href="/Project2" className="learn-more-btn">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
