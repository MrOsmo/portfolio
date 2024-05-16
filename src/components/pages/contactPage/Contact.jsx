import React from 'react'
import scss from "./Contact.module.scss"
import line from "../../../assets/line.svg"
import { useForm } from 'react-hook-form'
import email from "../../../assets/email.svg"
import phone from "../../../assets/phone.svg"

const Contact = ({ language }) => {
  const {
    register,
    formState: {
      errors
    },
    handleSubmit,
  } = useForm()

  const onSubmit = (data) => {
    console.log(JSON.stringify(data))
  }
  return (
    <section id='contact' className={scss.contact}>
      <div className={scss.container}>
        <div className={scss.content}>
          <div className={scss.heading}>
            <img className={scss.line} src={line} alt="Line" />
            <h1>{language === "EN" ? "Contact" : language === "DE" ? "Kontakt" : "Контакты"}</h1>
          </div>
          <div className={scss.parts}>
            <div className={scss.description}>
              <h1>{language === "EN" ? "Get in touch" : language === "DE" ? "Kontaktieren Sie mich" : "Свяжитесь со мной"}</h1>
              <p>{language === "EN" ? "Have a project in mind? Looking to partner or work together? Reach out through the form and I'll get back to you in the next 48 hours..." : language === "DE" ? "Haben Sie ein Projekt im Sinn? Auf der Suche nach einer Partnerschaft oder Zusammenarbeit? Nehmen Sie Kontakt über das Formular auf, und ich werde mich innerhalb der nächsten 48 Stunden bei Ihnen melden..." : "У вас есть проект на уме? Ищете партнерство или сотрудничество? Свяжитесь через форму, и я отвечу вам в течение следующих 48 часов.."} 🎩</p>

              <div className={scss.email}>
                <img src={email} alt="Email" />
                <h2>osmonaliev.sherbek@icloud.com</h2>
              </div>

              <div className={scss.phone}>
                <img src={phone} alt="Phone" />
                <h2>+49 1520 4252990</h2>
              </div>
            </div>
            <div className={scss.form}>
              <div className={scss.form_bg}>
                <div className={scss.form_contact}>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                      {...register("name", {
                        required: true
                      })}
                      type="text"
                      placeholder={language === "EN" ? "Your name" : language === "DE" ? "Name" : "Ваше имя"} />
                    <span>{errors?.name && <p>{language === "EN" ? "This field is required!" : language === "DE" ? "Dieses Feld ist erforderlich!" : "Это поле обязательно для заполнения!"}</p>}</span>

                    <input
                      {...register("email", {
                        required: true
                      })}
                      type="text"
                      placeholder={language === "EN" ? "Your email" : language === "DE" ? "E-Mail" : "Ваш адрес электронной почты"} />
                    <span>{errors?.email && <p>{language === "EN" ? "This field is required!" : language === "DE" ? "Dieses Feld ist erforderlich!" : "Это поле обязательно для заполнения!"}</p>}</span>

                    <input
                      {...register("subject", {
                        required: true
                      })}
                      type="text"
                      placeholder={language === "EN" ? "Your subject" : language === "DE" ? "Betreff" : "Ваша тема"} />
                    <span>{errors?.name && <p>{language === "EN" ? "This field is required!" : language === "DE" ? "Dieses Feld ist erforderlich!" : "Это поле обязательно для заполнения!"}</p>}</span>

                    <textarea
                      {...register("message", {
                        required: true
                      })}
                      placeholder={language === "EN" ? "Your message" : language === "DE" ? "Nachricht" : "Ваше сообщение"}
                      cols="10"
                      rows="8"></textarea>
                    <span>{errors?.message && <p>{language === "EN" ? "This field is required!" : language === "DE" ? "Dieses Feld ist erforderlich!" : "Это поле обязательно для заполнения!"}</p>}</span>
                    <button type='submit'>{language === "EN" ? "SUBMIT" : language === "DE" ? "SENDEN" : "ОТПРАВИТЬ"}</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact