import React from 'react';
import Navbar from './Navbar';
import './ProjectPage.css';
const Project1 = () => {
  return (
    <div className="project-page">
      <h1>Blog Sphere: Publish and Explore Blogs</h1>

      <section>
        <h2>Overview</h2>
        <p>
                      Blog Sphere is a MERN stack blogging platform that allows users to publish posts effortlessly with full CRUD functionality.
              Users can create, update, view  and delete posts while managing their content securely through authentication.
        </p>
      </section>

      <section>
        <h2>Technologies Used</h2>
        <ul>
          <li>MongoDB</li>
          <li>Express.js</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>JWT Authentication</li>
          
        </ul>
      </section>

      <section className="screenshot-section">
        <h2>Project Screenshots</h2>
        <img src="/blog1.png" alt="Home Page" />
         <img src="/blog2.png" alt="Home Page" />
          <img src="/blog3.png" alt="Home Page" />
          
            <img src="/blog5.png" alt="Home Page" />
       
      </section>
    </div>
  );
};

export default Project1;
