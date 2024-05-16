import React from 'react'
import scss from "./TechStack.module.scss"
import Tooltip from '@mui/material/Tooltip';

import laptop from "../../../assets/notebook.png"
import line from "../../../assets/line.svg"
import connectLine from "../../../assets/straightline.png"


import javascriptIcon from "../../../assets/techstack/javascript.svg"
import reactIcon from "../../../assets/techstack/react.svg"
import reduxIcon from "../../../assets/techstack/redux.svg"
import htmlIcon from "../../../assets/techstack/html.svg"
import cssIcon from "../../../assets/techstack/css.svg"
import scssIcon from "../../../assets/techstack/scss.svg"
import windowsIcon from "../../../assets/techstack/windows.svg"
import viteIcon from "../../../assets/techstack/vite.svg"
import nextJsIcon from "../../../assets/techstack/nextjs.svg"
import typescriptIcon from "../../../assets/techstack/typescript.svg"

const TechStack = ({language}) => {
  return (
    <section id='techstack' className={scss.techstack}>
      <div className={scss.container}>
        <div className={scss.content}>
          <div className={scss.heading}>
            <img src={line} alt="Line" />
            <h1>{language === "EN" ? "Tech Stack" : language === "DE" ? "Tech Stack" : "Технический стек"}</h1>
          </div>
          <p>
            {language === "EN" ? "There are several languages, frameworks, libraries, and other tools that I used and still use in my projects. Even though I'm new to programming, I've already learned about many tools I didn't know before." : language === "DE" ? "Es gibt mehrere Sprachen, Frameworks, Bibliotheken und andere Tools, die ich in meinen Projekten verwendet habe und immer noch verwende. Obwohl ich neu im Programmieren bin, habe ich bereits viele Tools kennengelernt, die ich zuvor nicht kannte." : "Существует несколько языков, фреймворков, библиотек и других инструментов, которые я использовал в своих проектах и по-прежнему использую. Хотя я новичок в программировании, я уже изучил множество инструментов, о которых раньше не знал."}
          </p>
          <div className={scss.notebook_image}>
            <img src={laptop} alt="Laptop" />
          </div>
          <div className={scss.techstack}>
            <img className={scss.connectLine} src={connectLine} alt="ConnectLine" />
            <img className={scss.connectLine_2} src={connectLine} alt="ConnectLine" />
            <img className={scss.connectLine_3} src={connectLine} alt="ConnectLine" />
            <img className={scss.connectLine_4} src={connectLine} alt="ConnectLine" />
            <img className={scss.connectLine_5} src={connectLine} alt="ConnectLine" />
            <img className={scss.connectLine_6} src={connectLine} alt="ConnectLine" />
            <img className={scss.connectLine_7} src={connectLine} alt="ConnectLine" />
            <img className={scss.connectLine_8} src={connectLine} alt="ConnectLine" />
            <img className={scss.connectLine_9} src={connectLine} alt="ConnectLine" />
            <img className={scss.connectLine_10} src={connectLine} alt="ConnectLine" />
            <img className={scss.connectLine_11} src={connectLine} alt="ConnectLine" />
            <img className={scss.connectLine_12} src={connectLine} alt="ConnectLine" />
            <img className={scss.connectLine_13} src={connectLine} alt="ConnectLine" />

            <div className={scss.e_background}>
              <Tooltip title="JavaScript" arrow>
                <div className={scss.stack_background}>
                  <img src={javascriptIcon} alt="JavaScript" />
                </div>
              </Tooltip>
            </div>

            <div className={scss.e_background_2}>
              <Tooltip title="Redux Toolkit" arrow>
                <div className={scss.stack_background}>
                  <img src={reduxIcon} alt="Redux-Toolkit" />
                </div>
              </Tooltip>
            </div>

            <div className={scss.e_background_3}>
              <Tooltip title="React" arrow>
                <div className={scss.stack_background}>
                  <img src={reactIcon} alt="React" />
                </div>
              </Tooltip>
            </div>

            <div className={scss.e_background_4}>
              <Tooltip title="HTML" arrow>
                <div className={scss.stack_background}>
                  <img src={htmlIcon} alt="HTML" />
                </div>
              </Tooltip>
            </div>

            <div className={scss.e_background_5}>
              <Tooltip title="CSS" arrow>
                <div className={scss.stack_background}>
                  <img src={cssIcon} alt="CSS" />
                </div>
              </Tooltip>
            </div>

            <div className={scss.e_background_6}>
              <Tooltip title="Windows" arrow>
                <div className={scss.stack_background}>
                  <img src={windowsIcon} alt="Windows" />
                </div>
              </Tooltip>
            </div>

            <div className={scss.e_background_7}>
              <Tooltip title="SCSS" arrow>
                <div className={scss.stack_background}>
                  <img src={scssIcon} alt="SCSS" />
                </div>
              </Tooltip>
            </div>

            <div className={scss.e_background_8}>
              <Tooltip title="Next.js" arrow>
                <div className={scss.stack_background}>
                  <img src={nextJsIcon} alt="Next.js" />
                </div>
              </Tooltip>
            </div>

            <div className={scss.e_background_9}>
              <Tooltip title="Vite" arrow>
                <div className={scss.stack_background}>
                  <img src={viteIcon} alt="Vite" />
                </div>
              </Tooltip>
            </div>

            <div className={scss.e_background_10}>
              <Tooltip title="TypeScript" arrow>
                <div className={scss.stack_background}>
                  <img src={typescriptIcon} alt="Typescript" />
                </div>
              </Tooltip>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default TechStack