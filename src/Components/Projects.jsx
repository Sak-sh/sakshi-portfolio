import React from 'react';
import './Project.css';
import './style.css';

const Projects = () => {
  return (
    <section id="project" className="projects-section py-5 text-center">
      <h2>PROJECTS</h2>
      <div className="project-container">
        <div className="project-row">
          {/* Card 1 */}
          <div className="project-card interactive-border">
            <img
              src="/public/bookswap.webp"
              alt="Book Sharing Platform"
              className="project-image"
            />
            <h4>A Digital Platform for Book Sharing (One-Way Swap Model)</h4>

            <p className="project-description">
              Built a responsive MERN stack book swapping platform with JWT-based authentication, allowing users to
              give away books and send one-sided swap requests. Implemented request tracking, owner approval/rejection,
              and personalized profiles using React and Tailwind CSS.
            </p>
            <a href="/Project1" className="learn-more-btn">Learn More</a>
          </div>

          {/* Card 2 */}
          <div className="project-card interactive-border">
            <img
              src="/public/gpk.jpg"
              alt="Campus Placement Platform"
              className="project-image"
            />
            <h4>Interlinked platform for campus placement in Government Polytechnic Karad</h4>

            <p className="project-description">
              Developed a Campus Placement System using PHP with separate logins for students, companies, and admins.
              Enabled resume uploads, candidate management, and rule enforcement to streamline the recruitment process.
            </p>
            <a href="/Project2" className="learn-more-btn">Learn More</a>
          </div>

           {/* Card 2 */}
          <div className="project-card interactive-border">
            <img
              src="/public/blog.jpg"
              alt="Campus Placement Platform"
              className="project-image"
            />
            <h4>Blog Sphere: Publish and Explore Blogs</h4>

            <p className="project-description">
             Blog Sphere is a MERN stack blogging platform that allows users to publish posts effortlessly with full CRUD functionality.
              Users can create, update, view  and delete posts while managing their content securely through authentication.
            </p>
            <a href="/Project3" className="learn-more-btn">Learn More</a>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
