import React from 'react'
import scss from "./About.module.scss"
import line from "../../../assets/line.svg"
import profileMe from "../../../assets/profileMe.png"
import circles from "../../../assets/points.svg"
import circles2 from "../../../assets/points2.svg"
import circles3 from "../../../assets/points3.svg"

const About = ({ language }) => {
  return (
    <section id='about' className={scss.about}>
      <div className={scss.container}>
        <div className={scss.content}>
          <div className={scss.heading}>
            <h1>{language === "EN" ? "About Me" : language === "DE" ? "Über mich" : "Обо мне"}</h1>
            <img className={scss.line} src={line} alt="Line" />
          </div>
          <div className={scss.parts}>
            <img className={scss.image} width="400px" height="350px" src={profileMe} alt="Computer-Image" />
            <div className={scss.circle_images}>
              <img className={scss.circle} src={circles} alt="CircleOne" />
              <img className={scss.circle2} src={circles2} alt="CircleTwo" />
              <img className={scss.circle3} src={circles3} alt="CircleThree" />
            </div>
            <div className={scss.story}>
              <div className={scss.one_side}>
                <p>{language === "EN" ? "I was born in Kyrgyzstan, in Bishkek, but when I was 3, I moved to Germany, where I live now. I can speak" : language === "DE" ? "Ich wurde in Kirgisistan, in Bischkek, geboren, aber als ich 3 Jahre alt war, zog ich nach Deutschland, wo ich jetzt lebe. Ich spreche" : "Я родился в Кыргызстане, в Бишкеке, но когда мне было 3 года, я переехал в Германию, где я живу сейчас. Я говорю на"} <span>{language === "EN" ? "Kyrgyz, Russian, German," : language === "DE" ? "Kirgisisch, Russisch, Deutsch" : "киргизском, русском, немецком"}</span> {language === "EN" ? "and" : language === "DE" ? "und" : "и"} <span>{language === "EN" ? "English," : language === "DE" ? "Englisch" : "английском языках"}</span> {language === "EN" ? "and I can also translate basic " : language === "DE" ? "und kann auch einfache" : "а также могу переводить базовые " }<span>{language === "EN" ? "Latin" : language === "DE" ? " lateinische" : "латинские " }</span> {language === "EN" ? "texts." : language === "DE" ? "Texte übersetzen." : "тексты."}</p>
              </div>

              <div className={scss.one_side}>
                <p>{language === "EN" ? "Around 13 or 14, I wanted to make simple games on Roblox to be a developer and owner of some games. I tried learning the " : language === "DE" ? "Mit etwa 13 oder 14 Jahren wollte ich einfache Spiele auf Roblox erstellen, um Entwickler und Besitzer einiger Spiele zu sein. Ich versuchte, die " : "Около 13 или 14 лет я хотел создавать простые игры на Roblox, чтобы быть разработчиком и владельцем некоторых игр. Я пытался выучить "}<span>{language === "EN" ? "'Lua' programming language " : language === "DE" ? "Programmiersprache 'Lua'" : " язык программирования 'Lua' "}</span>{language === "EN" ? "by myself, but it was tough, so I gave up." : language === "DE" ? " selbst zu lernen, aber es war schwierig, also gab ich auf." : "самостоятельно, но это было сложно, поэтому я сдался."}</p>
              </div>

              <div className={scss.one_side}>
                <p>
                  {language === "EN" ? "After a few years, my dad suggested my mom learn programming. They found a course called " : language === "DE" ? "Ein paar Jahre später schlug mein Vater meiner Mutter vor, Programmieren zu lernen. Sie fanden einen Kurs namens " : "Через несколько лет мой отец предложил моей матери изучить программирование. Они нашли курс под названием "}<span>'Peaksoft'</span> {language === "EN" ? "in Kyrgyzstan and my dad paid for her to study for 9 months." : language === "DE" ? "in Kirgisistan, und mein Vater bezahlte für sie, um 9 Monate lang zu studieren." : " в Кыргызстане, и мой отец оплатил ей обучение на 9 месяцев."}
                </p>
              </div>

              <div className={scss.one_side}>
                <p>
                  {language === "EN" ? "But after the first lesson, my mom realized " : language === "DE" ? "Aber schon nach der ersten Lektion erkannte meine Mutter, dass " : "Но после первого урока моя мама поняла, что "} <span>IT</span> {language === "EN" ? "wasn't her thing. She asked if I wanted to take over since the course was already paid for. Knowing it would be hard for my mom, I decided to study in her place." : language === "DE" ? " nichts für sie war. Sie fragte, ob ich es übernehmen wollte, da der Kurs bereits bezahlt war. Da ich wusste, dass es für meine Mutter schwer sein würde, entschied ich mich, an ihrer Stelle zu studieren." : "- не её. Она спросила, не хочу ли я взять на себя, поскольку курс уже оплачен. Зная, что это будет тяжело для моей мамы, я решил учиться в еёместе."}
                </p>
              </div>

              <div className={scss.one_side}>
                <p>{language === "EN" ? "After 6 months, I'm glad I chose to study. I learned so many things I didn't know before and that's why I'm proud that I decided to study" : language === "DE" ? "Nach 6 Monaten bin ich froh, dass ich mich zum Studium entschieden habe. Ich habe so viele Dinge gelernt, die ich vorher nicht kannte, und deshalb bin ich stolz darauf, dass ich mich für das Lernen der " : "Через 6 месяцев я рад, что выбрал учебу. Я узнал так много вещей, которых раньше не знал, и поэтому я горжусь, что решил учить"} <span>IT</span>{language === "EN" ? "!" : language === "DE" ? "entschieden habe!" : "!"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About