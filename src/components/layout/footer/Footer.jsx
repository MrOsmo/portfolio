import React from 'react'
import scss from "./Footer.module.scss"
import instagram from "../../../assets/social_media/instagram.svg"
import telegram from "../../../assets/social_media/telegram.svg"
import github from "../../../assets/social_media/github.svg"

const Footer = ({ language }) => {
  return (
    <footer className={scss.footer}>
      <div className={scss.content}>
        <div className={scss.background}>
          <p className={scss.left}>{language === "EN" ? "Copyright © 2021-2024. All rights are reserved" : language === "DE" ? "Copyright © 2021-2024. Alle Rechte vorbehalten." : "Авторские права © 2021-2024. Все права защищены."}</p>
          <p className={scss.middle}>{language === "EN" ? "Built with" : language === "DE" ? "Erstellt mit" : "Создано с"} <span className={scss.heart}>♥</span> {language === "EN" ? "by " : language === "DE" ? "von " : ""}<span>{language === "EN" ? "Sherbek Osmonaliev" : language === "DE" ? "Sherbek Osmonaliev" : "Шербеком Осмоналиевым"}</span></p>
          <div className={scss.social_media}>
            <a href="https://github.com/MrOsmo" target="_blank">
              <img src={github} alt="GitHub" />
            </a>
            <a href="https://www.instagram.com/sherbekofficial2007/" target="_blank">
              <img src={instagram} alt="Instagram" />
            </a>
            <a href="https://t.me/mr_osmo27" target="_blank">
              <img src={telegram} alt="Telegram" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer