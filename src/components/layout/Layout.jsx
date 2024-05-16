import React from 'react'
import Header from './header/Header'
import Main from './main/Main'
import Footer from './footer/Footer'
import scss from "./Layout.module.scss"
import { useState } from 'react'


const Layout = () => {
  const [language, setLanguage] = useState("EN")

  return (
    <div className={scss.layout}>
      <Header language={language} setLanguage={setLanguage} />
      <Main language={language}/>
      <Footer language={language}/>
    </div>
  )
}

export default Layout