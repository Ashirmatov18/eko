import { useState } from "react";
import "../../../styles/Header.css";
import logo from "../../../images/loco.png";

export default function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navigation">
      <img src={logo} href="/" className="brand-name"></img>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* icon from Heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a href="/home">О Нас</a>
          </li>
          <li>
            <a href="/about">Эко Решения</a>
          </li>
          <li>
            <a href="/contact">Технологии</a>
          </li>
          <li>
            <a href="/contact">Контакты</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
