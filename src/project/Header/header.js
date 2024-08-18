import React from 'react';
import "./header.css";
import Typical from "react-typical";
import profileImg from "../../my_img.jpg";

const header = () => {
  return (
    <div className='header-container'>
      <div className='header-content'>
        <div className='text-content'>
          {/* <h3>Hello!</h3> */}
          <h1>Hi, I'm</h1>
          <h1 className='fillname'>Soumyajit Jalua 👨‍🎓</h1>
          <h2>
            I'm a{" "}
            <Typical
              steps={[
                "React Developer ❤️😍",
                1000,
                // "Full Stack Developer 🚀",
                // 1000,
                "Frontend Developer 🧑‍💻",
                1000,
                "AI Engineer 🧠",
                1000,
                "Data Scientist ✅",
                1000,
              ]}
              loop={Infinity}
              wrapper="b"
            />
          </h2>
          <p>
            I'm a passionate developer with a strong interest in building scalable and efficient software solutions.
          </p>
        <div className='connectMe'>
            <button className='linkedin'>
            <a href='https://www.linkedin.com/in/soumyajit-jalua-09a98a270/'>Linkedin</a>
            </button>
            <button className='Github'>
            <a href='https://github.com/SoumyajitJalua1'>Github</a>
            </button>
        </div>
        </div>
        <div className='imageContainer'>
          <img src={profileImg} alt="Profile" />
        </div>
      </div>
    </div>
  );
}

export default header;
