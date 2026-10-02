import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { brand, footer, nav } from '../content/site'
import { Button } from '../components/modules'
import { Icon } from '../components/modules/Icon'

/* Logo mark — in WordPress: Divi > Theme Customizer > Header & Navigation > Logo (upload an SVG/PNG). */
export function Logo({ light = false }: { light?: boolean }) {
  const gid = light ? 'fin-l' : 'fin-d'
  return (
    <Link to="/" className={`bf-logo ${light ? 'bf-logo--light' : ''}`} aria-label={`${brand.name} home`}>
      <svg width="34" height="34" viewBox="0 0 40 40" aria-hidden="true">
        <defs>
          <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#f2c14e" />
            <stop offset="1" stopColor="#d98e1a" />
          </linearGradient>
        </defs>
        <rect width="40" height="40" rx="10" fill="#152a45" />
        <path d="M9 29c2-10 8-17 20-19-1 6-3 9-6 11 3 0 5-1 7-2-1 6-6 10-12 10-3 0-6 0-9 0Z" fill={`url(#${gid})`} />
      </svg>
      <span>
        Blackfin
        <small>Cloud Government</small>
      </span>
    </Link>
  )
}

/* Divi Theme Builder > Global Header (Menu module + Button module) */
export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  return (
    <header className={`et-l--header ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <div className="et_pb_row et_pb_row--header">
        <Logo />
        <nav className="et_pb_menu" aria-label="Primary">
          <ul>
            {nav.map((n) => (
              <li key={n.href}>
                <NavLink to={n.href} end={n.href === '/'}>
                  {n.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Button href={brand.schedule} variant="primary">
            Schedule a Call
          </Button>
        </nav>
        <button className="et_mobile_nav_menu" type="button" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <Icon name={open ? 'x' : 'menu'} size={26} />
        </button>
      </div>
    </header>
  )
}

/* Divi Theme Builder > Global Footer */
export function Footer() {
  return (
    <footer className="et-l--footer">
      <div className="et_pb_row et_pb_row--footer">
        <div className="et_pb_column">
          <Logo light />
          <p className="bf-footer-blurb">{footer.blurb}</p>
        </div>
        <div className="et_pb_column">
          <h4>Quick Links</h4>
          <ul>
            {footer.quick.map((n) => (
              <li key={n.href}>
                <Link to={n.href}>{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="et_pb_column">
          <h4>Contact</h4>
          <ul className="bf-footer-contact">
            <li>
              <Icon name="phone" size={18} />
              <span>
                <b>Let’s Talk</b>
                <a href={brand.phoneHref}>{brand.phone}</a>
              </span>
            </li>
            <li>
              <Icon name="mail" size={18} />
              <span>
                <b>Email Us</b>
                <a href={`mailto:${brand.email}`}>{brand.email}</a>
              </span>
            </li>
            <li>
              <Icon name="pin" size={18} />
              <span>
                <b>Write or Visit</b>
                {brand.address.join(', ')}
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="et_pb_row et_pb_row--legal">
        <p>{footer.copyright}</p>
      </div>
    </footer>
  )
}
