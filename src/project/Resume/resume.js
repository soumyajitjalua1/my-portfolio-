import React from 'react';
import "./resume.css"; // Make sure to create and link this CSS file

const Resume = () => {
  return (
    <div className='resume-section'>
        <div className='resume-bg-text'>Resume</div>
        <h1>Resume</h1>
        <p>
        An aspiring AI Engineer and Data Scientist, currently pursuing an MSc in Artificial Intelligence and Machine Learning at IIIT Lucknow. With a strong foundation in mathematics and statistics, I have hands-on experience in developing scalable machine learning models and dynamic web applications using Python, SQL, and modern ML frameworks. I am passionate about driving innovative AI solutions and integrating AI into user-friendly web interfaces, with a keen interest in exploring advanced models and technologies.
        </p>
        <button className='resume-button'>
            <a href='https://drive.google.com/file/d/1OQQ6L7FyudQ1Yeqy7Iotve34ZAHgoIrq/view?usp=sharing" target="_blank" rel="noreferrer'>Download Resume</a>
        </button>
    </div>
  );
}

export default Resume;
