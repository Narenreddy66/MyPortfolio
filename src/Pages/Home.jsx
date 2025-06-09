import React from 'react';
// import './Home.css';
import '../Styles/Home.css'

function Home() {
  return (
    <div className="home">
      <h1 className="animated-heading">Hi, I'm Narendharreddy Bontalwad</h1>
      <p className="animated-sub">Frontend Developer — Vue | React | Tailwind</p>
       <section id="contact" className="contact" >
  <h2>Talk to Me</h2>
  <p>Have a project or want to collaborate? Reach out via phone or WhatsApp.</p>
 <a href="tel:+919822817266" className="call-btn">📞 Call Now</a>   <a href="https://wa.me/919822817266" target="_blank" rel="noopener noreferrer" className="whatsapp-btn">💬 WhatsApp Us</a>
 </section>
      {/* <button className="contact-btn">Let's Talk</button> */}
    </div>
  );
}

export default Home;