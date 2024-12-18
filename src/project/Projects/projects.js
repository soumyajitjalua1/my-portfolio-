import React from 'react'
import "./projects.css"
import Stock from "../../Image/stock-market.avif"
import WeatherMusic from "../../Image/Music recomendation.jpg"
import Crime from "../../Image/crime data.png"
const projects = () => {
  return (
    <div className='all-projects'>
        <div className='big-projects-project'>Projects</div>
        <h2 className='project-heading'>Projects</h2>
        <div className='Container'>
            <div className='project1'>
                <img src={Stock}></img>
                <h1>StockVision Pro</h1>
                <p>StockVision Pro is a comprehensive stock analysis platform designed to provide real-time market insights, advanced analytics, and personalized investment recommendations</p>
                <div className='project-button'>
                    <button>
                        <a href='https://stockvision-pro.streamlit.app/'>Demo link</a>
                    </button>
                    <button>
                        <a href='https://github.com/soumyajitjalua1/StockVision-Pro' >Github</a>
                    </button>
                </div>
            </div>
            <div className='project2'>
                <img src={Crime}></img>
                <h1>Crime Data Analysis</h1>
                <p>An advanced platform for analyzing and visualizing crime data to uncover patterns
                and trends to improve public safety and inform policy decisions</p>
                <div className='project-button'>
                    <button><a href='https://safecity.streamlit.app/'> Demo Link</a></button>
                    <button><a href='https://github.com/soumyajitjalua1/SafeCity' > Github</a></button>
                </div>
            </div>
            <div className='project3'>
                <img src={WeatherMusic}></img>
                <h1> MelodyMoods</h1>
                <p>That is personalized music recommendation system, that suggests songs based on weather conditions and user preferences and artist name and there best song</p>
                <div className='project-button'>
                    <button>
                        <a href='https://github.com/soumyajitjalua1/MelodyMoods/blob/main/website%20view.mp4'>Demo Link</a>
                    </button>
                    <button>
                        <a href='https://github.com/soumyajitjalua1/MelodyMoods' >Github</a>
                    </button>
                </div>
            </div>
            <div className='project4'>
                <img src="https://media.licdn.com/dms/image/v2/D5612AQGz299_tooNvQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1697968915996?e=2147483647&v=beta&t=v-JEsKvAAbwU4cnAnNdPkd17NEaakzMGObbaC7KcF1w"></img>
                <h1>Cancer Prediction Using GAN</h1>
                <p>An AI-powered application leveraging Generative Adversarial Networks(GAN) for precise cancer probability predictions and advanced medical image analysis.</p>
                <div className='project-button'>
                    <button>
                        <a href='https://safecity.streamlit.app/'> Damo link</a>
                    </button>
                    <button>
                        <a href='https://github.com/soumyajitjalua1/Cancers_prediction_Using_GAN' >Github</a>
                    </button>
                </div>
            </div>
            <div className='project5'>
                <img src="https://media.istockphoto.com/id/1412282189/photo/lock-network-technology-concept.jpg?s=612x612&w=0&k=20&c=hripuxLs9pS_7Ln6YWQR-Ow2_-BU5RdQ4vOY8s1q1iQ="></img>
                <h1>Common Vulnerabilities and Exposures analysis using NLP</h1>
                <p>An AI-integrated system that retrieves detailed information about a CVE ID and generates user-friendly explanations using natural language processing.</p>
                <div className='project-button'>
                    <button>
                        <a href='https://nlp-project-0axg.onrender.com/'> Damo link</a>
                    </button>
                    <button>
                        <a href='https://github.com/soumyajitjalua1/NLP_CVE_project' >Github</a>
                    </button>
                </div>
            </div>
            <div className='project6'>
                <img src="https://cdn.dribbble.com/users/7100460/screenshots/17226460/media/439e1a24100096d5e900781a10ae1449.jpg?format=webp&resize=400x300&vertical=center"></img>
                <h1>Flutter app Making of finance</h1>
                <p>Developing a Flutter mobile application for the financial domain that uses system prompt engineering to generate six types of vouchers (e.g., payment, receipt) based on user inputs</p>
                <div className='project-button'>
                    <button>
                        <a href='https://github.com/soumyajitjalua1/Flutter-mobile-app/blob/main/Screenshot%202024-10-18%20194635.png'> Damo link</a>
                    </button>
                    <button>
                        <a href='https://github.com/soumyajitjalua1/Flutter-mobile-app' >Github</a>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default projects