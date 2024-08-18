import React from 'react'
import Navbar from './project/Navbar/navbar'
import Header from './project/Header/header'
import Aboutme from './project/About Me/Aboutme'
import Resume from './project/Resume/resume'
import Eduction from './project/Eduction/eduction'
import Projects from './project/Projects/projects'
import Moreproject from './project/More Project/Moreproject'
import ContuctMe from './project/ContuctMe/ContuctMe'
import SocialMediaLinks from './project/SocalMedia/socalmedia'

const App = () => {
  return (
    <div>
      <Navbar />
      <section id="home">
        <Header />
      </section>
      <section id="about">
        <Aboutme />
      </section>
      <section id="resume">
        <Resume />
        <Eduction />
      </section>
      <section id="projects">
        <Projects />
        <Moreproject />
      </section>
      <section id="contact">
        <ContuctMe />
        <SocialMediaLinks />
      </section>
    </div>
  )
}

export default App
