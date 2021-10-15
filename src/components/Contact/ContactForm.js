import React from "react";
import { useTranslation } from "react-i18next";
import emailjs from "emailjs-com";
import classes from "./ContactForm.module.css";

require("dotenv").config();

export default function ContactForm() {
  const form = React.useRef();
  const defaultFormValues = {
    name: "",
    email: "",
    message: "",
  };
  const [credentials, setCredentials] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const [sendForm, setSendForm] = React.useState(false);

  React.useEffect(() => {
    if (sendForm) {
      setTimeout(() => {
        setSendForm(false);
      }, 5000);
    }
  }, [sendForm]);

  const sendEmail = () => {
    emailjs
      .sendForm(
        process.env.REACT_APP_MAIL_SERVICE_ID,
        process.env.REACT_APP_MAIL_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_MAIL_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    sendEmail();
    // Todo Better Feedback
    setCredentials(defaultFormValues);
    setSendForm(true);
  };

  const handleChange = (ev) => {
    setCredentials((oldCredentials) => ({
      ...oldCredentials,
      [ev.target.name]: ev.target.value,
    }));
  };
  const verifyForm = () => {
    if (!credentials.name || !credentials.email || !credentials.message) {
      return true;
    }
    return false;
  };

  const { t } = useTranslation("global");
  return (
    <>
      <form
        className={classes.contactFormStyled}
        ref={form}
        onSubmit={handleSubmit}
      >
        <div className={classes.formGroup}>
          <label htmlFor="name">
            {t("contact.Your Name")}
            <input
              type="text"
              id="name"
              name="name"
              value={credentials.name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className={classes.formGroup}>
          <label htmlFor="email">
            {t("contact.Your Email")}
            <input
              type="email"
              id="email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className={classes.formGroup}>
          <label htmlFor="message">
            {t("contact.Your message")}
            <textarea
              type="text"
              id="message"
              name="message"
              value={credentials.message}
              onChange={handleChange}
            />
          </label>
        </div>
        {!sendForm ? (
          <button
            className={classes.buttonContactForm}
            disabled={verifyForm()}
            type="submit"
          >
            {t("contact.Send")}
          </button>
        ) : (
          <button
            className={classes.buttonContactFormOK}
            disabled={true}
            type="submit"
          >
            {t("contact.Sent")}
          </button>
        )}
      </form>
    </>
  );
}
