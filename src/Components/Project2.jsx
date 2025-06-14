import React from 'react';
import './ProjectPage.css';

const Project2 = () => {
  return (
    <div className="project-page">
      <h1>Interlinked platform for campus placement in Government Polytechnic Karad</h1>

      <section>
        <h2>Overview</h2>
        <p>
          Developed a PHP-based system with separate logins for students, companies, and admins. Allows resume uploads, company access to profiles, and rule enforcement.
        </p>
      </section>

      <section>
        <h2>Technologies Used</h2>
        <ul>
          <li>PHP, MySQL</li>
          <li>HTML, CSS, JavaScript</li>
        </ul>
      </section>

     <section>
        <h2>Project Screenshots</h2>
        <img src="/camp5.jpeg" alt="Home Page" />
        <img src="/camp1.jpeg" alt="Profile Page" />
        <img src="/camp2.jpeg" alt="Profile Page" />
        <img src="/camp3.jpeg" alt="Profile Page" />
        <img src="/camp4.jpeg" alt="Profile Page" />
        <img src="/camp6.jpeg" alt="Profile Page" />
      </section>
    </div>
  );
};

export default Project2;
