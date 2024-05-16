import React from 'react'
import scss from "./Main.module.scss"
import Home from '../../pages/homePage/Home'
import About from '../../pages/aboutPage/About'
import TechStack from '../../pages/techStack/TechStack'
import Contact from '../../pages/contactPage/Contact'
import Project from '../../pages/projectsPage/Project'


const Main = ({ language }) => {
  return (
    <div className={scss.main}>
      <div className="container">
        <div className={scss.content}>
          <Home language={language} />
          <About language={language}/>
          <TechStack language={language}/>
          <Project language={language}/>
          <Contact language={language}/>
        </div>
      </div>
    </div>
  )
}

export default Main