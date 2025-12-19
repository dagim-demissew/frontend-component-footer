import React from 'react';
import footerLogo from '../assets/afrolms-logo.png';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="custom-footer">
      {/* TOP SECTION */}
      <div className="footer-top">
        <div className="powered-area">
          <ul className="logo-list">
            <li className="powered-text">Powered by:</li>
            <li>
              <a href="https://afrolms.com" target="_blank" rel="noopener noreferrer">
                <img
                  src={footerLogo}
                  alt="Afro LMS"
                  className="footer-logo"
                />
              </a>
            </li>
          </ul>
        </div>

        {/* NAV LINKS */}
        <nav className="nav-colophon" aria-label="About">
          <ol>
            <li><a href="/about">About</a></li>
            <li><a href="/privacy">Privacy</a></li>
            <li><a href="/terms">Terms</a></li>
            <li><a href="/contact">Contact</a></li>
          </ol>
        </nav>
      </div>

      {/* BOTTOM SECTION */}
      <div className="footer-bottom">
        <span className="copyright-site">
          © {year} My Open edX. All Rights Reserved.
        </span>

        <p className="edx-attribution">
          Powered by Open edX
        </p>
      </div>
    </footer>
  );
}
