import React from 'react';
import "./experience.css";

const Experience = () => {
    return (
        <div className="experience-section">
            <div className='big-heading-experience'>Experience</div>
            <h2 className='Experience-heading'>Experience</h2>
            <div className="experience-item">
                <h3>Gen AI Engineer Intern</h3>
                <h4>Logiciel Analytics</h4>
                <p>Duration: 5 months</p>
                <ul>
                    <li>Zoho API integration</li>
                    <li>Model training for financial work</li>
                    <li>Developed a mobile app using Flutter</li>
                    <li>Worked with AI agents</li>
                </ul>
                <button 
                    onClick={() => window.open('https://drive.google.com/file/d/1wfcAUyWbhgLMnuDEIV0npPOXxRTRPrcM/view?usp=sharing', '_blank')}
                >
                    View Experience Certificate
                </button>
            </div>
        </div>
    );
};

export default Experience;

