import React from 'react';
import './style.css';

const About = () => {
  return (
    <section id="about" className="py-5 text-center">
      <div className="container">
        <h2 style={{ color: '#10B981',fontSize: '38px' }}>ABOUT ME</h2>

        <div className="aboutcard">
          <p >
            Hi, I’m Sakshi Chavan, a passionate web developer currently pursuing a Bachelor of Engineering in Computer Engineering at Dr. D. Y. Patil Pratishthan's D.Y. Patil College of Engineering, Akurdi, Pune. 
            I have completed my diploma from Government Polytechnic Karad. I have developed strong technical skills in full-stack web development, including proficiency in modern technologies such as JavaScript, React, Node.js, and MongoDB.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
