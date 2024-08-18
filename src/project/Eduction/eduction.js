import React from 'react'
import "./eduction.css"

const Eduction = () => {
  return (
    <div className="education-section">
        <div className='big-heading'>Education</div>
        <h1 className='heading'>Education</h1>
        <div className="container">
            <div className="col1">
                <h1 className='year'>2023-2025</h1>
                <h2>Master of Science</h2>
                <h3>Indian Institute of Information Technology, Lucknow</h3>
                <h3>CGPA: 8.14</h3>
            </div>
            <div className='col2'>
                <h1 className='year'>2019-2023</h1>
                <h2>Bachelor of Science</h2>
                <h3>Panskura Banamali College, West Bengal</h3>
                <h3>CGPA: 8.1</h3>
            </div>
        </div>
        <button className='resume'>
            <a href="https://drive.google.com/file/d/1OQQ6L7FyudQ1Yeqy7Iotve34ZAHgoIrq/view?usp=sharing" target="_blank" rel="noreferrer">View Resume</a>
        </button>
    </div>
  )
}

export default Eduction
