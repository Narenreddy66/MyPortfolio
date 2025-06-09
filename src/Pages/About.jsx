import React from 'react';
// import './About.css';
import '../Styles/About.css'

function About() {
  return (
<section className="about">
  <img className="profile-pic" src="/assets/WhatsApp Image 2025-06-09 at 12.07.37.jpeg" alt="Narendharreddy Profile" />
  <h2>About Me</h2>
   <div className="links">
    <a href="https://github.com/Narenreddy66" target="_blank" rel="noopener noreferrer">GitHub</a>
    <a href="https://www.linkedin.com/in/narendharreddy-bontalwad" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    {/* <a className="resume-btn" href="/home/narendhar/my-portfolio/src/assets/Naukri_BontalwadNarendharreddy[2y_1m].pdf" download>  Download Resume </a> */}
  </div>
  <p>I’m Narendharreddy Bontalwad, a passionate Frontend Developer with 2+ years of experience crafting modern, responsive, and intuitive user interfaces using Vue.js, React.js, and Tailwind CSS. My work is focused on performance, user experience, and scalable architecture.</p>
  <p>I’ve worked on real-time systems, POS applications, dynamic form builders, and menu apps for leading clients like Marriott and Parak Hyat. I'm also experienced in integrating REST APIs and WebSocket services with Frappe 15 backends.</p>
  <p>I strive for clean code, love learning modern tech, and enjoy transforming ideas into scalable applications with great UI/UX.</p>
   <section className="skills">
   <h2>Tech Skills</h2>
   <div className="skills-grid">
     <div className="skill"><img src="/assets/html.png" alt="HTML5" /><span>HTML5</span></div>
     <div className="skill"><img src="/assets/css.jpeg" alt="CSS3" /><span>CSS3</span></div>
     <div className="skill"><img src="/assets/js.png" alt="JavaScript" /><span>JavaScript</span></div>
     <div className="skill"><img src="/assets/vue.png" alt="Vue.js" /><span>Vue.js</span></div>
     <div className="skill"><img src="/assets/react.svg" alt="React.js" /><span>React.js</span></div>
     {/* <div className="skill"><img src="/icons/tailwind.svg" alt="Tailwind CSS" /><span>Tailwind</span></div> */}
     <div className="skill"><img src="/assets/redux.png" alt="Redux" /><span>Redux</span></div>
     <div className="skill"><img src="/assets/Frappe.png" alt="Frappe" /><span>Frappe</span></div>
   </div>
 </section>
 
</section>
)
}

export default About;


