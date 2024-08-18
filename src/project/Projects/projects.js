import React from 'react'
import "./projects.css"
import Stock from "../../Image/stock-market.avif"
import WeatherMusic from "../../Image/Music recomendation.jpg"
import Crime from "../../Image/crime data.png"
const projects = () => {
  return (
    <div className='all-projects'>
        <div className='Container'>
            <div className='project1'>
                <img src={Stock}></img>
                <h1>StockVision Pro</h1>
                <p>StockVision Pro is a comprehensive stock analysis platform designed to provide real-time market insights, advanced analytics, and personalized investment recommendations</p>
                <button>
                    <a href='https://stockvision-pro.streamlit.app/'>click me</a>
                </button>
            </div>
            <div className='project2'>
                <img src={Crime}></img>
                <h1>Crime Data Analysis</h1>
                <p>An advanced platform for analyzing and visualizing crime data to uncover patterns
                and trends to improve public safety and inform policy decisions</p>
                <button>
                    <a href='https://safecity.streamlit.app/'> Click me</a>

                </button>
            </div>
            <div className='project2'>
                <img src={WeatherMusic}></img>
                <h1> MelodyMoods</h1>
                <p>That is personalized music recommendation system, that suggests songs based on weather conditions and user preferences and artist name and there best song</p>
                <button>
                    <a href='https://github.com/soumyajitjalua1/MelodyMoods'>Click Me</a>
                </button>
            </div>
        </div>
    </div>
  )
}

export default projects