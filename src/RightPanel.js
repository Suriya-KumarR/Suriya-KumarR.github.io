import React, { useEffect, useRef } from "react";
import "./RightPanel.css";

function RightPanel() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    sectionsRef.current.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="right-panel">
      <section ref={(el) => (sectionsRef.current[0] = el)} className="about-section">
        <h3>About</h3>
        <p>
          I am a passionate data analyst with experience in machine learning, data visualization, and natural language processing.
        </p>
      </section>
      
      <section ref={(el) => (sectionsRef.current[1] = el)} className="skills-section">
        <h3>Skills</h3>
        <p>Python, Data Analysis, Machine Learning, SQL, React, HTML, CSS, JavaScript, and more.</p>
      </section>

      <section ref={(el) => (sectionsRef.current[2] = el)} className="projects-section">
        <h3>Projects</h3>
        <ul>
          <li><strong>Sana Personal Assistant:</strong> AI Assistant with Dialogflow and FastAPI.</li>
          <li><strong>Pneumonia Detection:</strong> A project focusing on detecting pneumonia from X-ray images.</li>
          <li><strong>Highway Env RL Agents:</strong> Exploring Autonomous Driving Environments with Reinforcement Learning.</li>
        </ul>
      </section>
      <section ref={(el) => (sectionsRef.current[3] = el)} className="projects-section">
        <h3>Projects</h3>
        <ul>
          <li><strong>Sana Personal Assistant:</strong> AI Assistant with Dialogflow and FastAPI.</li>
          <li><strong>Pneumonia Detection:</strong> A project focusing on detecting pneumonia from X-ray images.</li>
          <li><strong>Highway Env RL Agents:</strong> Exploring Autonomous Driving Environments with Reinforcement Learning.</li>
        </ul>
      </section>
      <section ref={(el) => (sectionsRef.current[4] = el)} className="projects-section">
        <h3>Projects</h3>
        <ul>
          <li><strong>Sana Personal Assistant:</strong> AI Assistant with Dialogflow and FastAPI.</li>
          <li><strong>Pneumonia Detection:</strong> A project focusing on detecting pneumonia from X-ray images.</li>
          <li><strong>Highway Env RL Agents:</strong> Exploring Autonomous Driving Environments with Reinforcement Learning.</li>
        </ul>
      </section>
    </div>
  );
}

export default RightPanel;
