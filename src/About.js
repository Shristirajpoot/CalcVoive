import React, { useEffect } from 'react';
import './About.css';
import ProfileImage from './assets/resume.jpeg.jpg'; // Import the image

const About = () => {
  useEffect(() => {
    const aboutPage = document.querySelector('.about-page');
    aboutPage.classList.add('fade-in'); // Apply fade-in animation on page load
  }, []);

  return (
    <div className="about-page">
      <div className="about fade-in">
        <h1>About the Project</h1>
        <p>
          This is a voice-controlled calculator that allows users to perform arithmetic operations
          using voice commands, making the calculator more interactive and accessible.
        </p>

        <h3>Technologies Used:</h3>
       
        <ul style={{ listStyleType: "none", padding: "0", margin: "0" }}>
  <li style={{ marginBottom: "10px", fontSize: "20px", display: "flex", alignItems: "center" }}>
    <i
      className="fab fa-html5"
      style={{
        fontSize: "24px",
        color: "#e34c26",
        marginRight: "10px",
        transition: "transform 0.2s ease-in-out, color 0.3s",
      }}
      onMouseEnter={(e) => (e.target.style.color = "#ff5722")}
      onMouseLeave={(e) => (e.target.style.color = "#e34c26")}
    ></i>
    HTML
  </li>
  <li style={{ marginBottom: "10px", fontSize: "20px", display: "flex", alignItems: "center" }}>
    <i
      className="fab fa-css3-alt"
      style={{
        fontSize: "24px",
        color: "#2965f1",
        marginRight: "10px",
        transition: "transform 0.2s ease-in-out, color 0.3s",
      }}
      onMouseEnter={(e) => (e.target.style.color = "#42a5f5")}
      onMouseLeave={(e) => (e.target.style.color = "#2965f1")}
    ></i>
    CSS
  </li>
  <li style={{ marginBottom: "10px", fontSize: "20px", display: "flex", alignItems: "center" }}>
    <i
      className="fab fa-js"
      style={{
        fontSize: "24px",
        color: "#f7df1e",
        marginRight: "10px",
        transition: "transform 0.2s ease-in-out, color 0.3s",
      }}
      onMouseEnter={(e) => (e.target.style.color = "#f9e547")}
      onMouseLeave={(e) => (e.target.style.color = "#f7df1e")}
    ></i>
    JavaScript
  </li>
  <li style={{ marginBottom: "10px", fontSize: "20px", display: "flex", alignItems: "center" }}>
    <i
      className="fas fa-microphone"
      style={{
        fontSize: "24px",
        color: "#ff5722",
        marginRight: "10px",
        transition: "transform 0.2s ease-in-out, color 0.3s",
      }}
      onMouseEnter={(e) => (e.target.style.color = "#ff784e")}
      onMouseLeave={(e) => (e.target.style.color = "#ff5722")}
    ></i>
    Web Speech API
  </li>
</ul>

        {/* Add Image Section */}
    
        <h3>Developer Info</h3>
        <div className="developer-info">
          <img src={ProfileImage} alt="Developer" className="profile-pic" />
          <p>
            Developed by Shristi Rajpoot. For more details, visit{' '}
            <a href="https://Shristirajpoot.com/your-repository-link" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>.
          </p>
        </div>

        <h3>Acknowledgments</h3>
        <p>Special thanks to the open-source libraries and resources that made this project possible.</p>
      </div>
    </div>
  );
};

export default About;
