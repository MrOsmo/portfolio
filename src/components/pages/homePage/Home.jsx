import React from 'react'
import scss from "./Home.module.scss"
import myImage from "../../../assets/myImage.png"
import fireBackground from "../../../assets/fire.gif"

const Home = ({ language }) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section id='home' className={scss.home}>
      <div className={scss.content}>
        <div className={scss.shadow}></div>
        <div className={scss.shadowTwo}></div>
        <div className={scss.shadowThree}></div>
        <div className={scss.row}>
        <h2>{language === "EN" ? "Hey there!" : language === "DE" ? "Hallo!" : "Привет!"}</h2>
        <h1>{language === "EN" ? "I am a" : language === "DE" ? "Ich bin ein" : "Я есть"} <span></span></h1>
        <p>{language === "EN" ? "I'm a young Junior Front-End developer who loves and enjoys creating cool websites." : language === "DE" ? "Ich bin ein junger Junior Front-End Entwickler, der es liebt und genießt, coole Websites zu erstellen." : "Я молодой начинающий фронтенд-разработчик, который любит и наслаждается созданием крутых"} {language === "EN" ? "Currently I am studying online in an IT course called 'Peaksoft' in Kyrgyzstan." : language === "DE" ? "Derzeit studiere ich online in einem IT-Kurs namens 'Peaksoft' in Kirgisistan." : "веб-сайтов. На данный момент я учусь онлайн на IT-курсе под названием 'Peaksoft' в Кыргызстане."}</p>
        <button onClick={() => scrollToSection("about")}>{language === "EN" ? "About me" : language === "DE" ? "Über mich" : "Обо мне"}</button>
        </div>

        <div className={scss.image}>
          <img className={scss.background_fire} height="750px" src={fireBackground} alt="" />
          <img className={scss.myImage} height="600px" src={myImage} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Home