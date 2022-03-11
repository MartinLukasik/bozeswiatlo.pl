import React, { useMemo, useState } from 'react'
import { Link } from 'gatsby'
import clsx from 'clsx'
import { useScroll } from '../contexts/ScrollProvider'

const NAVIGATION = [
  { name: 'Главная', to: '/' },
  { name: 'О нас', to: '/about' },
  { name: 'Галерея', to: '/gallery' },
  { name: 'Служения', to: '/ministries' },
  { name: 'Свидетельства', to: '/testimonials' },
  { name: 'Контакты', to: '/contact' },
]

type Props = {
  path: string
}

export function Header({ path }: Props) {
  const [open, setOpen] = useState(false)
  const scroll = useScroll()

  return (
    <header
      className={clsx(
        'page-header',
        'row',
        'no-gutters',
        'center-xs',
        'middle-xs',
        {
          sticky: path !== '/' || scroll.scrollY !== 0,
        }
      )}
    >
      <nav className="main-nav col-xs-12 row middle-xs between-xs">
        <div className="logo">
          <Link to="/">
            <img className="logo__img" src="/img/logo/logo-white.webp" alt="" />
          </Link>
        </div>
        <ul className="main-nav__links">
          {NAVIGATION.map(link => (
            <li key={link.to}>
              <Link
                className={clsx('main-nav__link', {
                  'main-nav__link--active': path === link.to,
                })}
                to={link.to}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <div
          className={clsx('nav-toggler', { active: open })}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
      <div className={clsx('responsive-nav', { 'active-nav': open })}>
        {NAVIGATION.map(link => (
          <Link key={link.to} to={link.to}>
            {link.name}
          </Link>
        ))}
      </div>
    </header>
  )
}
