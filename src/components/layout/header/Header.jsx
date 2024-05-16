import React, { useRef } from 'react';
import scss from "./Header.module.scss";
import logo from "../../../assets/logo.png";
import languageIcon from "../../../assets/language.svg";
import { useState } from 'react';

const Header = ({ language, setLanguage }) => {
  const headings = [
    {
      name: { EN: "Home", DE: "Startseite", RU: "Главная" },
      id: "home"
    },
    {
      name: { EN: "About", DE: "Über", RU: "Обо мне" },
      id: "about"
    },
    {
      name: { EN: "Tech Stack", DE: "Tech Stack", RU: "Тех. стек" },
      id: "techstack"
    },
    {
      name: { EN: "Projects", DE: "Projekte", RU: "Проекты" },
      id: "projects"
    },
    {
      name: { EN: "Contact", DE: "Kontakt", RU: "Контакты" },
      id: "contact"
    }
  ];

  const [open, setOpen] = useState(false)
  const [openTwo, setOpenTwo] = useState(false)
  const headerRef = useRef(null);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [isBurgerMenu, setIsBurgerMenu] = useState(false)

  return (
    <header className={scss.header}>
      <div className={scss.content}>
        <img onClick={() => scrollToSection("home")} className={scss.logo} src={logo} alt="Logo" />
        <div className={scss.headings}>
          <ul>
            {headings.map((e, index) => (
              <li key={index}>
                <a onClick={() => scrollToSection(e.id)}>
                  <p>{e.name[language]}</p>
                </a>
              </li>
            ))}

            <div className={scss.burger__button}>
              <label>
                <input type="checkbox"
                  onChange={() => setIsBurgerMenu(!isBurgerMenu)}
                  checked={isBurgerMenu}
                />
                <span></span>
                <span></span>
                <span></span>
              </label>
            </div>


            <div className={isBurgerMenu ? `${scss.burger_menu} ${scss.active}` : `${scss.burger_menu}`}>
              <nav>
                <ul>
                  {headings.map((e) => (
                    <div className={scss.burger_headings}>
                      <a onClick={() => scrollToSection(e.id)}>
                        <button>{e.name[language]}</button>
                      </a>
                    </div>
                  ))}
                  <div onClick={() => setOpenTwo(!openTwo)}>
                    <img src={languageIcon} alt="LanguageIcon" />
                    {openTwo && (
                      <div className={scss.languages}>
                        <hr />
                        <button onClick={() => setLanguage("EN")}>EN</button>
                        <button onClick={() => setLanguage("DE")}>DE</button>
                        <button onClick={() => setLanguage("RU")}>RU</button>
                      </div>
                    )}
                  </div>
                </ul>
              </nav>
            </div>

          </ul>
          <div className={scss.menuDiv} onMouseOver={() => setOpen(true)} onMouseOut={() => setOpen(false)}>
            <img className={scss.language_icon} src={languageIcon} alt="LanguageIcon" />
            {open && (
              <div className={scss.menu}>
                <button onClick={() => setLanguage("EN")}>EN</button>
                <button onClick={() => setLanguage("DE")}>DE</button>
                <button onClick={() => setLanguage("RU")}>RU</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
