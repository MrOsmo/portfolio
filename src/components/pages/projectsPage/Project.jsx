import React from 'react'
import scss from "./Project.module.scss"
import line from "../../../assets/line.svg"
import hydraImg from "../../../assets/projects/Hydra.png"
import portfolioImg from "../../../assets/projects/PortfolioSarah.png"
import advupImg from "../../../assets/projects/Advup.png"
import toDoListImg from "../../../assets/projects/ToDoList.png"
import linkIcon from "../../../assets/link.svg"
import gitHubIcon from "../../../assets/social_media/github.svg"

const Project = ({ language }) => {
  return (
    <section id="projects" className={scss.project}>
      <div className={scss.container}>
        <div className={scss.content}>
          <div className={scss.heading}>
            <h1>{language === "EN" ? "Projects" : language === "DE" ? "Projekte" : "Проекты"}</h1>
            <img className={scss.line} src={line} alt="Line" />
          </div>
          <div className={scss.project_description}>
            <p>{language === "EN" ? "Each project is unique by its own way." : language === "DE" ? "Jedes Projekt ist auf seine eigene Weise einzigartig." : "Каждый проект уникален по-своему."}</p>
          </div>
          <div className={scss.parts}>
            <div className={scss.part_right}>
              <div className={scss.part}>
                <h1>Hydra 👾</h1>
                <p className={scss.description}>{language === "EN" ? "Welcome to my website dedicated to the fascinating world of virtual reality and the innovative virtual glasses known as Hydra. With Hydra glasses, you can experience games, movies, educational content, and much more in a whole new way. Explore my site to learn more about the technology behind Hydra glasses." : language === "DE" ? "Willkommen auf meiner Website, die der faszinierenden Welt der virtuellen Realität und den innovativen VR-Brillen namens Hydra gewidmet ist. Mit Hydra-Brillen können Sie Spiele, Filme, Bildungsinhalte und vieles mehr auf völlig neue Weise erleben. Entdecken Sie meine Seite, um mehr über die Technologie hinter den Hydra-Brillen zu erfahren." : "Добро пожаловать на мой веб-сайт, посвященный захватывающему миру виртуальной реальности и инновационным виртуальным очкам под названием Hydra. С помощью очков Hydra вы можете испытать игры, фильмы, образовательный контент и многое другое совершенно по-новому. Исследуйте мой сайт, чтобы узнать больше о технологии, лежащей в основе очков Hydra."}</p>
                <div className={scss.part_tools}>
                  <button>HTML</button>
                  <button>SCSS</button>
                  <button>JavaScript</button>
                  <button>React</button>
                </div>

                <div className={scss.part_code}>
                  <a href="https://github.com/MrOsmo/hydra" target="_blank">
                    <div className={scss.code}>
                      <p>Code</p>
                      <img src={gitHubIcon} alt="GitHubIcon" />
                    </div>
                  </a>
                  <a href="https://hydra-indol.vercel.app" target="_blank">
                    <div className={scss.link}>
                      <p>Live Demo</p>
                      <img src={linkIcon} alt="LinkIcon" />
                    </div>
                  </a>
                </div>
              </div>
              <a href="https://hydra-indol.vercel.app" target="_blank">
                <img src={hydraImg} alt="HydraImg" />
              </a>
            </div>

            <div className={scss.part_left}>
              <a href="https://portfolio-sarah-jackson.vercel.app">
                <img src={portfolioImg} alt="PortfolioImg" />
              </a>
              <div className={scss.part}>
                <h1>Portfolio - Sarah 💃</h1>
                <p className={scss.description}>{language === "EN" ? "This is a simple portfolio of Sarah Jackson. There are no special functions or something like this. Just enjoy the structure of the website and the showcase of Sarah's work." : language === "DE" ? "Dies ist ein einfaches Portfolio von Sarah Jackson. Es gibt keine besonderen Funktionen oder ähnliches. Genießen Sie einfach die Struktur der Website und die Präsentation von Sarahs Arbeit." : "Это простое портфолио Сары Джексон. Здесь нет никаких особых функций или чего-то подобного. Просто наслаждайтесь структурой сайта и демонстрацией работ Сары."}</p>
                <div className={scss.part_tools}>
                  <button>HTML</button>
                  <button>CSS</button>
                </div>

                <div className={scss.part_code}>
                  <a href="https://github.com/MrOsmo/PortfolioSarahJackson" target="_blank">
                    <div className={scss.code}>
                      <p>Code</p>
                      <img src={gitHubIcon} alt="GitHubIcon" />
                    </div>
                  </a>
                  <a href="https://portfolio-sarah-jackson.vercel.app" target="_blank">
                    <div className={scss.link}>
                      <p>Live Demo</p>
                      <img src={linkIcon} alt="LinkIcon" />
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className={scss.part_right}>
              <div className={scss.part}>
                <h1>To-Do-List 📝</h1>
                <p className={scss.description}>{language === "EN" ? "This marks the inception of my very first to-do list, crafted without reliance on frameworks like React. Within this space, you're invited to input your tasks and collaboratively refine them." : language === "DE" ? "Dies markiert den Beginn meiner allerersten To-Do-Liste, erstellt ohne Abhängigkeit von Frameworks wie React. In diesem Raum sind Sie eingeladen, Ihre Aufgaben einzugeben und gemeinsam zu verfeinern." : "Это отмечает начало моего самого первого To-Do-List, созданного без зависимости от фреймворков, таких как React. В этом пространстве вы приглашены вводить свои задачи и совместно их уточнять."}</p>
                <div className={scss.part_tools}>
                  <button>HTML</button>
                  <button>CSS</button>
                  <button>JavaScript</button>
                </div>

                <div className={scss.part_code}>
                  <a href="https://github.com/MrOsmo/todolist" target="_blank">
                    <div className={scss.code}>
                      <p>Code</p>
                      <img src={gitHubIcon} alt="GitHubIcon" />
                    </div>
                  </a>
                  <a href="https://todolist-seven-amber.vercel.app" target="_blank">
                    <div className={scss.link}>
                      <p>Live Demo</p>
                      <img src={linkIcon} alt="LinkIcon" />
                    </div>
                  </a>
                </div>
              </div>
              <a href="https://todolist-seven-amber.vercel.app" target="_blank" >
                <img src={toDoListImg} alt="ToDoListImg" />
              </a>
            </div>

            <div className={scss.part_left}>
              <a href="https://advup.vercel.app" target="_blank">
                <img src={advupImg} alt="ADVUPImg" />
              </a>
              <div className={scss.part}>
                <h1>ADVUP 🌂</h1>
                <p className={scss.description}>{language === "EN" ? "This website was created for people who need advertisement. Whether you're a blogger seeking exposure or an advertiser looking to promote your products or services, this platform caters to both." : language === "DE" ? "Diese Website wurde für Menschen erstellt, die Werbung benötigen. Egal, ob Sie ein Blogger sind, der nach Exposition sucht, oder ein Werbetreibender, der Ihre Produkte oder Dienstleistungen bewerben möchte, diese Plattform richtet sich an beide." : "Этот веб-сайт создан для людей, которым нужна реклама. Будь то блогер, ищущий экспозицию, или рекламодатель, стремящийся продвигать свои продукты или услуги, эта платформа предназначена для обоих."}</p>
                <div className={scss.part_tools}>
                  <button>HTML</button>
                  <button>SCSS</button>
                  <button>JavaScript</button>
                  <button>React</button>
                  <button>Vite</button>
                  <button>React-toastify</button>
                  <button>Axios</button>
                  <button>ElchoCrud</button>
                  <button>Keen-Slider</button>
                </div>

                <div className={scss.part_code}>
                  <a href="https://github.com/MrOsmo/ADVUP" target="_blank">
                    <div className={scss.code}>
                      <p>Code</p>
                      <img src={gitHubIcon} alt="GitHubIcon" />
                    </div>
                  </a>
                  <a href="https://advup.vercel.app" target="_blank">
                    <div className={scss.link}>
                      <p>Live Demo</p>
                      <img src={linkIcon} alt="LinkIcon" />
                    </div>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Project