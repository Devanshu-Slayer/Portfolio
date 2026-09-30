import { useState } from 'react';

const navLinks = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'certificates', label: 'Certificates', href: '#certificates' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar">
      <nav className="navbar__container container">

        <a href="#home" className="navbar__logo">
          Devanshu<span> Khachane</span>
        </a>

        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={link.href} className="navbar__link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={`navbar__hamburger ${isMenuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={handleMenuToggle}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          type="button"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {isMenuOpen && (
          <ul className="navbar__mobile-menu">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className="navbar__link"
                  onClick={handleLinkClick}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}

      </nav>
    </header>
  );
}

export default Navbar;