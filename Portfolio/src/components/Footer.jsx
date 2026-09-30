const footerLinks = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { id: 'github', label: 'GitHub', href: 'https://github.com/Devanshu-Slayer' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/devanshukhachane07' },
  { id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/devanshu._.slayer' },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">

        <div className="footer__content">

          <div className="footer__brand">
            <a href="#home" className="footer__logo">
              Devanshu<span> Khachane</span>
            </a>
            <p className="footer__tagline">
              Building the web, one component at a time.
            </p>
          </div>

          <nav className="footer__nav" aria-label="Footer navigation">
            <h4 className="footer__heading">Navigation</h4>
            <ul className="footer__links">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <a href={link.href} className="footer__link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer__social-section">
            <h4 className="footer__heading">Connect</h4>
            <ul className="footer__links">
              {socialLinks.map((social) => (
                <li key={social.id}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__link"
                    aria-label={`Visit my ${social.label} profile`}
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} Devanshu Khachane. All rights reserved.
          </p>
          <p className="footer__credit">
            Built with React + Vite ⚡
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
