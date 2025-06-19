import React from 'react';
import './Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faJava, faGitAlt, faGithub, faPhp, faJs, faHtml5, faCss3Alt, faBootstrap 
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faCode } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
  const skills = [
    { name: 'JAVA', icon: faJava, color: '#007396' },
    { name: 'C', icon: faCode, color: '#555' },          // generic code icon for C
    { name: 'C++', icon: faCode, color: '#00599C' },     // generic code icon for C++
    { name: 'DSA', icon: null, color: '#0f4c81' },       // no icon, custom styled
    { name: 'SQL', icon: faDatabase, color: '#e38c00' },

    { name: 'PHP', icon: faPhp, color: '#787CB5' },
    { name: 'MERN STACK', icon: null, color: '#6f42c1' },
    { name: 'DBMS', icon: faDatabase, color: '#28a745' },
    { name: 'JAVASCRIPT', icon: faJs, color: '#f0db4f' },
    { name: 'HTML/CSS', icon: null, color: '#e34c26' }, // will combine icons below

    { name: 'BOOTSTRAP', icon: faBootstrap, color: '#563d7c' },
    { name: 'Git and Github', icon: faGithub, color: '#fff' }
  ];

  return (
    <section id="skills" className="skills-section">
      <h2>My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, i) => (
          <div className="skill-card" key={i}>
            {skill.icon ? (
              <FontAwesomeIcon 
                icon={skill.icon} 
                size="3x" 
                style={{ color: skill.color }} 
              />
            ) : skill.name === 'HTML/CSS' ? (
              // Show HTML and CSS side by side icons
              <div className="html-css-icons">
                <FontAwesomeIcon icon={faHtml5} size="2x" color="#e34c26" />
                <FontAwesomeIcon icon={faCss3Alt} size="2x" color="#264de4" />
              </div>
            ) : (
              <div 
                className="skill-text-icon" 
                style={{ backgroundColor: skill.color }}
              >
                {skill.name}
              </div>
            )}
            {skill.icon !== null && skill.name !== 'HTML/CSS' && (
              <p>{skill.name}</p>
            )}
            {skill.icon === null && skill.name !== 'HTML/CSS' && (
              <p>{skill.name}</p>
            )}
            {/* For HTML/CSS, show label */}
            {skill.name === 'HTML/CSS' && <p>HTML / CSS</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
