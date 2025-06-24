// src/components/header/Header.js
/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import clsx from 'clsx'

import stl from './Header.module.scss'

export default function Header() {
  const [showMenu, setShowMenu] = useState(false)

  const navLinks = [
    { label: 'Home',         href: '#home'     },
    { label: 'Services',     href: '#services' },
    { label: 'Why Choose Us',href: '#why'      },
  ]

  return (
    <>
      <header className={clsx(stl.header, showMenu && stl.menu_open)}>
        <div className={stl.header__container}>
          {/* Заменили картинку на текст */}
          <a href="#home" className={stl.header__logoText}>
            Axantra
          </a>

          <nav className={clsx(stl.header__menu, stl.menu)}>
            <div className={stl.menu__body}>
              <ul className={stl.menu__list}>
                {navLinks.map(({ label, href }) => (
                  <li key={label} className={stl.menu__item}>
                    <a
                      href={href}
                      className={stl.menu__link}
                      onClick={() => setShowMenu(false)}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <a href="#contact" className={stl.header__button}>
            Get in Touch
          </a>

          <button
            className={stl.icon_menu}
            type="button"
            onClick={() => setShowMenu(prev => !prev)}
          >
            <span />
          </button>
        </div>
      </header>

      {/* Стили для кнопки уже были; здесь ничего не меняем */}
      <style jsx>{`
        /* стиль для кнопки "Get in Touch" */
        :global(.${stl.header__button}) {
          display: inline-block;
          margin-left: 1rem;
          padding: 0.5rem 1rem;
          background-color: #2c2c2c;
          color: #ffffff;
          font-size: 0.875rem;
          font-weight: 500;
          border-radius: 999px;
          text-transform: uppercase;
          transition: background-color 0.2s ease, transform 0.1s ease;
          text-decoration: none;
        }
        :global(.${stl.header__button}:hover) {
          background-color: #404040;
          transform: translateY(-1px);
        }
        :global(.${stl.header__button}:active) {
          transform: scale(0.97);
        }
      `}</style>
    </>
  )
}
