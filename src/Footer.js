import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faPinterest, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

// You can define your translations as an object
const translations = {
  en: {
    copyright: "© 2024 All Rights Reserved, ProTasker®",
    language: "Language",
  },
  es: {
    copyright: "© 2024 Todos los derechos reservados, ProTasker®",
    language: "Idioma",
  },
  fr: {
    copyright: "© 2024 Tous droits réservés, ProTasker®",
    language: "Langue",
  },
};

const Footer = () => {
  // State to manage the selected language
  const [language, setLanguage] = useState("en");

  // Handle language change
  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <footer className="footer">
      {/* Language Dropdown */}
      <div className="language-selector">
        <select onChange={handleLanguageChange} value={language}>
          <option value="en">English (US)</option>
          <option value="es">Español</option>
          <option value="fr">Français(France)</option>
        </select>
      </div>

      {/* Copyright Text */}
      <div className="copyright">
        <p>{translations[language].copyright}</p>
      </div>

      {/* Social Media Icons */}
      <div className="social-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="fac">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noreferrer" className="twi">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href="https://www.pinterest.com" target="_blank" rel="noreferrer" className="pin">
          <FontAwesomeIcon icon={faPinterest} size="2x" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="inst">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
