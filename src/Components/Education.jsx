import React from 'react';
import './Education.css';
import './style.css';

const Education = () => {
  return (
    <section id="education" className="py-5 text-center">
      <h2>EDUCATION</h2>
      <div className="education-container">

        <div className="education-row">
          {/* Card 1 */}
         <div className="education-card">
  <h4>SSC</h4>
  <ul className="education-short">
    <li>School: Shree Shivaji Vidyalaya, Surur</li>
    <li>Result : 94.80%</li>
  </ul>
  <p className="education-description">
    Completed 10th grade with distinction. Developed strong analytical and problem-solving skills through active academic and extracurricular involvement.
  </p>
</div>


          {/* Card 2 */}
           <div className="education-card">
  <h4>DIPLOMA</h4>
  <ul className="education-short">
    <li>Institute : Government Polytechnic Karad</li>
    <li>Result : 91.09 %</li>
  </ul>
  <p className="education-description">
    Successfully completed Diploma in Computer Engineering with a solid foundation in technical concepts and hands-on project experience.</p>
</div>
        </div>

        {/* Card 3 - Centered Below */}
        <div className="education-row center">
          <div className="education-card">
            <h4>B.E. in Computer Science</h4>
            <ul className="education-short">
            <li><p className="education-short">Institute :  Dr. D. Y. Patil Pratishthan's D.Y. Patil College of Engineering, Akurdi, Pune</p></li>
             <li>Result : 91.26 %</li>
             </ul>
            <p className="education-description">
              Currently pursuing a Bachelor's degree to further deepen my technical expertise.</p>
          </div>
        </div>
</div>
      
    </section>
  );
};

export default Education;
