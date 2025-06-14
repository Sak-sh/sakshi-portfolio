import React from 'react';
import Navbar from './Navbar';
import './ProjectPage.css';
const Project1 = () => {
  return (
    <div className="project-page">
      <h1>A Digital Platform for Book Sharing (One-Way Swap Model)</h1>

      <section>
        <h2>Overview</h2>
        <p>
          This MERN stack application allows users to list books they want to give away and send one-way swap
          requests. Authenticated users can manage their books, requests, and view profiles. Admin approval and
          tracking is integrated.
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

      <section>
        <h2>Project Screenshots</h2>
        <img src="/book1.png" alt="Home Page" />
         <img src="/book2.png" alt="Home Page" />
          <img src="/book3.png" alt="Home Page" />
           <img src="/book4.png" alt="Home Page" />
            <img src="/book5.png" alt="Home Page" />
       
      </section>
    </div>
  );
};

export default Project1;
