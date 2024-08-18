import React from 'react';
import "./Aboutme.css";
import myimage from "../../my_img2.jpg";
import { FaKaggle } from 'react-icons/fa';

const Aboutme = () => {
  return (
    <div className='aboutme'>
      <div className='left-section'>
        <img src={myimage} alt="Soumyajit Jalua" />
        <div className='details'>
          <p><strong>My Name:</strong> Soumyajit Jalua</p>
          <p><strong>Currently Pursuing:</strong> Master's in AI & ML</p>
          <p><strong>Institute:</strong> Indian Institute of Information Technology, Lucknow</p>
          <p><strong>Address:</strong> Lucknow, India</p>
        </div>
        <div className='skills'>
          <h3>Skills</h3>
          <div className='skill-bar'>
            <span>Python</span>
            <div className='progress'><div className='progress-bar python'></div></div>
          </div>
          <div className='skill-bar'>
            <span>Machine Learning</span>
            <div className='progress'><div className='progress-bar stat-analysis'></div></div>
          </div>
          <div className='skill-bar'>
            <span>Web Devolapement</span>
            <div className='progress'><div className='progress-bar web-devolapement'></div></div>
          </div>
          <div className='skill-bar'>
            <span>Statistical Analysis </span>
            <div className='progress'><div className='progress-bar ml'></div></div>
          </div>
          <div className='skill-bar'>
            <span>Natural Language processing(NLP)</span>
            <div className='progress'><div className='progress-bar nlp'></div></div>
          </div>
          <div className='skill-bar'>
            <span>DL Frameworks(Tenserflow,keras,etc.)</span>
            <div className='progress'><div className='progress-bar dl-frameworks'></div></div>
          </div>
        </div>
      </div>

      <div className='right-section'>
        <h1>About Me</h1>
        <p>I am Soumyajit Jalua, currently pursuing an M.Sc in Artificial Intelligence and Machine Learning at the Indian Institute of Information Technology, Lucknow. I hold a BSc (Honours) in Mathematics from Panskura Banamali College (Autonomous). With a robust foundation in mathematics and statistics, I specialize in developing scalable machine learning models using Python, SQL, and various ML frameworks. I am also proficient in web development, with skills in JavaScript, HTML, CSS, and React, allowing me to create dynamic and responsive web applications. Passionate about contributing to innovative AI solutions, I am driven by a keen interest in data science, the exploration of advanced AI models, and the integration of AI into user-friendly web interfaces.</p>

        <div className='aboutProfile'>
            <div className='profileHeading'>
                <h4>Profile:</h4>
                <h4>Domain:</h4>
                <h4>Education:</h4>
                <h4>Language:</h4>
                <h4>Programming Skills:</h4>
                <h4>Tools:</h4>
                <h4>Hobbies:</h4>

            </div>
            <div className='profileEnding'>
                <p>AI Engineer, Data Science & Data Analyst, Web Developer</p>
                <p>AI & ML, Data Science, Web Development</p>
                <p>Master of Science (MSc)</p>
                <p>English, Hindi, Bengali</p>
                <p>Python, JavaScript, HTML, CSS, React, SQL</p>
                <p>Advanced Excel, VS Code, MongoDB, Git, Power BI, & Matplotlib</p>
                <p>Running, Reading, Playing Cricket, Watching Movies</p>
            </div>
        </div>
        <div className='kaggleSection'>
          <h3>5+ Projects Completed</h3>
          <button className='kagglebtn'>
            <a href='https://www.kaggle.com/soumyajitjalua'>
              <span className="kaggleIconWrapper">
                <FaKaggle className="kaggleIconBtn" />
              </span>
              Kaggle
            </a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Aboutme;
